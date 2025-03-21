import client from '@/database/mongodb';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const categoryParam = searchParams.get('category') || '';
    const typeParam = searchParams.get('type') || '';
    const search = searchParams.get('search');
    const page = searchParams.get('page') || '0';
    const sort = searchParams.get('sort'); // (if you need to use sort)

    const pageSize = 12;

    // Decode and replace hyphens with spaces
    const category = decodeURIComponent(categoryParam).replace(/-/g, ' ');
    const type = decodeURIComponent(typeParam).replace(/-/g, ' ');

    const filterByCate =
      !category || category === 'collection' || category === 'category'
        ? null
        : category.toLowerCase();
    const filterByType = !type || type === 'null' ? null : type;
    const filterBySearch = search && search !== 'null' && search !== null && search.length > 1;

    const ProductsCollection = await client.db("GNM").collection("Products");

    const buildFilterQuery = () => {
      const baseQuery: any = {};
      if (filterBySearch) {
        baseQuery.$or = [{ title: { $regex: search, $options: 'i' } }];
      }
      if (filterByCate && filterByType) {
        baseQuery.category = { $regex: new RegExp(`^${filterByCate}$`, 'i') };
        baseQuery.type = { $regex: new RegExp(`^${filterByType}$`, 'i') };
      } else if (filterByCate) {
        baseQuery.category = { $regex: new RegExp(`^${filterByCate}$`, 'i') };
      }
      return baseQuery;
    };

    const filterQuery = buildFilterQuery();
    console.log('filterQuery: ', filterQuery);

    const countQuery = await ProductsCollection.countDocuments(filterQuery);
    const totalPages = Math.ceil(countQuery / pageSize);
    const skip = Number(page) * pageSize;

    const products = await ProductsCollection.find(filterQuery)
      .sort({ _id: -1 })
      .skip(skip)
      .limit(pageSize)
      .toArray();

    if (!products || products.length < 1) {
      throw new Error('Could not find any products');
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
