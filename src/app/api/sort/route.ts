import client from '@/database/mongodb';
import type { NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import { type NextRequest } from 'next/server';

export async function GET(req: NextRequest, res: NextApiResponse) {
    try {
        const { nextUrl } = req;
        const category = nextUrl.searchParams.get('category');
        const search = nextUrl.searchParams.get('search');
        const sort = nextUrl.searchParams.get('sort') || 'latest';
        const type = nextUrl.searchParams.get('type');
        const pg = nextUrl.searchParams.get('page') || '1';
        const page = parseInt(`${pg}`) || 1;
        const limit = 50;
        const skip = (page - 1) * limit;

        let sortCriteria;
        switch (sort) {
            case 'latest':
                sortCriteria = { _id: -1 };
                break;
            case 'highestPrice':
                sortCriteria = { convertedPrice: -1 };
                break;
            case 'lowestPrice':
                sortCriteria = { convertedPrice: 1 };
                break;
            default:
                sortCriteria = { _id: -1 };
        }

        const filterByCate = !category || ['collection', 'all', 'category'].includes(category.toLocaleLowerCase()) ? null : category.toLocaleLowerCase();
        const filterByType = !type || ['all', 'null', 'collection'].includes(type.toLocaleLowerCase()) ? null : decodeURIComponent(type).toLocaleLowerCase();

        const ProductsCollection = await client.db("GNM").collection("Products");
        let products: any[] = [];

        const ProductsQuery = search && search.length > 1 ?
            await ProductsCollection.find({
                $or: [
                    { title: { $regex: search, $options: 'i' } },
                    { type: { $regex: search, $options: 'i' } },
                    { category: { $regex: search, $options: 'i' } }
                ]
            }) :
            await ProductsCollection.aggregate([
                {
                    $match: filterByType && filterByCate ? { category: filterByCate, type: filterByType } :
                        filterByType ? { type: filterByType } :
                        filterByCate ? { category: filterByCate } : {}
                },
                {
                  $addFields: {
                    convertedPrice: {
                        $cond: {
                            if: {
                                $and: [
                                    { $ne: ['$price', ''] },
                                    { $ne: ['$price', undefined] },
                                    { $ne: ['$price', null] }
                                ]
                            },
                            then: {
                                $convert: {
                                    input: '$price',
                                    to: 'double',
                                    onError: 0, // default value if conversion fails
                                    onNull: 0 // default value if null
                                }
                            },
                            else: {
                                $cond: {
                                    if: { $gt: [{ $size: '$sizes' }, 0] },
                                    then: { $convert: { input: '$sizes.0.price', to: 'double', onError: 0, onNull: 0 } }, // Use price of the first size
                                    else: 0
                                }
                            }
                        }
                    }
                }
            },
                {
                    $sort: sortCriteria
                },
                {
                    $skip: skip
                },
                {
                    $limit: limit
                }
            ]);

        await ProductsQuery.forEach((doc: any) => {
            products.push(doc);
        });

        if (!products || products.length < 1) {
            return NextResponse.json({ success: false });
        }

        return NextResponse.json({
            success: true,
            data: {
                products
            }
        });
    } catch (e) {
        console.log('e sort function: ', e);
        return NextResponse.json({
            success: false,
            data: {
                products: null
            }
        });
    }
}

export const dynamic = 'force-dynamic';