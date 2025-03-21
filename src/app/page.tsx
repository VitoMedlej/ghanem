"use client";
import PreLoader from "@/Components/PreLoader";

export default async function Home() {
  const fetchImgsAndSections = async () => {
    const imagesReq = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/get-images`);
    const imagesRes = await imagesReq.json();

    const sectionsReq = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/get-sections`);
    const sectionsRes = await sectionsReq.json();

    if (
      sectionsRes?.success &&
      imagesRes?.success &&
      imagesRes?.data?.Images &&
      sectionsRes?.data?.Images
    ) {
      return {
        imgs: imagesRes.data.Images,
        Brands: imagesRes.data.Brands,
        SectionsRes: sectionsRes.data.Images[0]?.imagesArray?.sections,
      };
    }
    return null;
  };

  try {
    const dataReq = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/get-data`);
    const dataRes = await dataReq.json();
    const result = await fetchImgsAndSections();

    return (
      <PreLoader
        vids={null}
        resImages={result?.imgs}
        SectionsRes={result?.SectionsRes}
        brands={result?.Brands}
        featuredProducts={dataRes?.data?.featuredProducts}
        data={dataRes?.data}
      />
    );
  } catch (e) {
    console.log("e main home: ", e);
    return <PreLoader resImages={null} data={null} />;
  }
}