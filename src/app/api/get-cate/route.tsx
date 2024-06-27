import client from '@/database/mongodb';
import type { NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest, res: NextApiResponse) {
    try {
        const { searchParams } = new URL(req.nextUrl);
        
        // Decode and replace hyphens with spaces for category and type
         // Decode category and type parameters
         const category = decodeURIComponent(searchParams.get('category') || '').replace(/-/g, ' ');
         const type = decodeURIComponent(`${searchParams.get('type')}`).replace(/-/g, ' ');


        const search = searchParams.get('search');
        const page = searchParams.get('page');
        const sort = searchParams.get('sort');

        const pageSize = 12; // Number of items per page

        // Determine filter conditions based on decoded category and type
        let filterByCate = !category || category === 'collection' || category === 'category' ? null : category.toLowerCase();
        let filterByType = !type || type === 'null' ? null : type;

        const filterBySearch = search && search !== 'null' && search !== null && search.length > 1;

        const ProductsCollection = await client.db("GNM").collection("Products");
        let products: any = [];

        const filterQuery = () => {
            const baseQuery: any = {};

            if (filterBySearch) {
                baseQuery.$or = [
                    { title: { $regex: search, $options: 'i' } },
                    { category: { $regex: search, $options: 'i' } },
                ];
            }

            if (filterByCate && filterByType) {
                baseQuery.category = { $regex: new RegExp(`^${filterByCate.toLowerCase()}$`, 'i') };
                baseQuery.type = { $regex: new RegExp(`^${filterByType.toLowerCase()}$`, 'i') };
            } else if (filterByCate) {
                baseQuery.category = { $regex: new RegExp(`^${filterByCate.toLowerCase()}$`, 'i') };
            }

            return baseQuery;
        };

        console.log('filterQuery: ', filterQuery());

        const countQuery = await ProductsCollection.countDocuments(filterQuery());
        const totalPages = Math.ceil(countQuery / pageSize); // Total number of pages
        const skip = Number(page) * pageSize;

        const ProductsQuery = await ProductsCollection.find(filterQuery())
            .sort({ _id: -1 })
            .skip(skip)
            .limit(pageSize)
            .toArray();

        ProductsQuery.forEach((doc: any) => {
            products.push(doc);
        });

        if (!products || products.length < 1) {
            throw 'ERROR: Could not find any products';
        }

        return NextResponse.json({
            success: true,
            data: {
                totalPages,
                products,
            },
        });
    } catch (error) {
        console.error('Error in GET request:', error);
        return NextResponse.json({
            success: false,
            data: {
                products: null,
                featuredProducts: null,
            },
        });
    }
}

export const dynamic = 'force-dynamic';
