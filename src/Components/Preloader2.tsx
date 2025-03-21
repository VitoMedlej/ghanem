"use client";
import React, { useState, useEffect, FC, FormEvent } from "react";
import { Box, Container, Pagination, Typography } from "@mui/material";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { server } from "@/Utils/Server";
import FilterSection from "./CollectionPage/FilterSection/FilterSection";
import { IProduct } from "@/Types/Types";
import ProductCard from "./ProductCard/ProductCard";

interface Preloader2Props {
  data: IProduct[] | null;
  totalPages: number;
}

const Preloader2: FC<Preloader2Props> = ({ data, totalPages: initialTotalPages }) => {
  const router = useRouter();
  const [newValue, setNewValue] = useState<string>("");
  const [currentSearch, setCurrentSearch] = useState<string>("");
  const [products, setProducts] = useState<IProduct[]>(data || []);
  const [pageCount, setPageCount] = useState<number>(initialTotalPages);
  const [options, setOptions] = useState({
    price: [1, 100000],
    sort: "latest",
    type: "All",
    category: "All",
  });

  const { category } = useParams();
  const searchParams = useSearchParams();
  const typeParam = searchParams.get("type");
  const searchQuery = searchParams.get("search");

  // Initialize currentSearch from URL param on load
  useEffect(() => {
    if (searchQuery) {
      setCurrentSearch(searchQuery);
      setNewValue(searchQuery);
    }
  }, [searchQuery]);

  useEffect(() => {
    setProducts(data || []);
  }, [data]);

  const fetchData = async (page: number) => {
    const url = `/api/get-cate?category=${
      category ? encodeURIComponent(category) : "all"
    }&search=${
      currentSearch ? encodeURIComponent(currentSearch) : null
    }&page=${page - 1}&type=${typeParam ? typeParam : null}&sort=${options.sort ? options.sort : null}`;
    const req = await fetch(`${server}${url}`, { cache: "no-store", next: { revalidate: 0 } });
    const res = await req.json();
    setProducts(res?.data?.products || []);
    setPageCount(res?.data?.totalPages || 1);
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  };

  const handleSubmit = async (reset?: boolean, e?: FormEvent) => {
    if (e) e.preventDefault();
    if (reset) {
      setNewValue("");
      setCurrentSearch("");
      setOptions({
        price: [1, 100000],
        sort: "latest",
        type: "all",
        category: "collection",
      });
      const url = `/api/sort?min=${options.price[0]}&max=${options.price[1]}&type=all&category=${encodeURIComponent(
        category
      )}`;
      const req = await fetch(`${server}${url}`, { cache: "no-store", next: { revalidate: 0 } });
      const res = await req.json();
      setProducts(res?.data?.products || []);
      return;
    }
    setCurrentSearch(newValue);
    const url = `/api/sort?search=${encodeURIComponent(newValue)}&min=${options.price[0]}&max=${
      options.price[1]
    }&type=${options.type}&category=${encodeURIComponent(category)}&sort=${options.sort}`;
    const req = await fetch(`${server}${url}`, { cache: "no-store", next: { revalidate: 0 } });
    const res = await req.json();
    setProducts(res?.data?.products || []);
  };

  return (
    <Container sx={{ mt: 2 }} disableGutters maxWidth="lg">
      <Box className="flex items-center wrap" sx={{ mb: 4, width: "100%", minHeight: "100px" }}>
        <FilterSection
          handleSubmit={handleSubmit}
          options={options}
          setOptions={setOptions}
          setProducts={setProducts}
          newValue={newValue}
          setNewValue={setNewValue}
        />
      </Box>
      <Box className="flex wrap">
        {products && products.length > 0 ? (
          products.map((i: IProduct) => (
            <ProductCard
              key={i._id}
              _id={i._id}
              title={i.title}
              newPrice={i.newPrice}
              price={i.price}
              images={i.images}
              category={i.category}
              stock={i.stock}
              sizes={i.sizes || null}
              width={{ xs: "47%", sm: "32%" }}
              inStock={i.inStock}
            />
          ))
        ) : (
          <Typography>No products found, try a different category...</Typography>
        )}
      </Box>
      <Pagination
        onChange={(e, val) => fetchData(val)}
        sx={{ my: 3 }}
        count={pageCount > 1 ? pageCount : 1}
        className="flex center"
      />
    </Container>
  );
};

export default Preloader2;
