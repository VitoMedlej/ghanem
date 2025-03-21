import Preloader2 from "@/Components/Preloader2";

const Page = async (ctx: any) => {
  try {
    const { category } = ctx?.params;
    const { type, search, subcategory } = ctx?.searchParams;
    const req = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/get-cate?category=${category ? category : 'collection'}&type=${type ? type : null}&page=0&search=${search ? search : null}&subcategory=${subcategory ? encodeURIComponent(subcategory) : null}`,
      { cache: 'no-store', next: { revalidate: 0 } }
    );
    const res = await req.json();
    return (
      <Preloader2
        totalPages={res?.data?.totalPages || 1}
        data={res?.data?.products || null}
      />
    );
  } catch (err) {
    console.error('Error fetching data: ', err);
    return (
      <Preloader2 totalPages={1} data={ null } />
    );
  }
};

export default Page;