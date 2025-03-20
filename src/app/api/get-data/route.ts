import client from '@/database/mongodb';
import type { NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import { type NextRequest } from 'next/server';

export async function GET(req: NextRequest, res: NextApiResponse) {
  try {
    const ProductsCollection = client.db("GNM").collection("Products");

    const categories = ["home appliances", "lighting", "bathroom", "tools & home improvement", ];

    const productsByCategory = await ProductsCollection.find({ category: { $in: categories } }).toArray();

    return NextResponse.json({
      success: true,
      data: productsByCategory
    });
  } catch (error) {
    console.log("error get-data: ", error);
    return NextResponse.json({ success: false });
  }
}

export const revalidate = 60;
