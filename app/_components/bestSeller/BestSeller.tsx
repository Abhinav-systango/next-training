"use client";
import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import { useAppDispatch, useAppSelector } from "@/app/_store/hooks";
import { fetchAllCategories, fetchProductWithCategory } from "@/app/_store/features/categoriesSlice";
import Loader from "../loader/Loader";

const BestSeller = () => {
  const dispatch = useAppDispatch()
  const [SelectedCategory, setSelectedCategory] = useState<string>();
  const { categories, products, categoryLoading, productLoading  } = useAppSelector(state => state.categories)
  console.log("🚀 ~ BestSeller ~ productLoading:", productLoading)
  useEffect(() => {
      dispatch(fetchAllCategories())
      dispatch(fetchProductWithCategory('electronics'))
  }, []); 

  const handleCategorySelect = async (category: string) => {
    setSelectedCategory(category);
    dispatch(fetchProductWithCategory(category))
  };

  return (
    <div>
      <div className="container mx-auto py-10 ">
        <p className="text-center uppercase font-semibold">Best Seller</p>

        <div className=" overflow-auto">
        <ul className="w-[max-content] flex gap-10 mx-auto items-center uppercase font-medium">
          {categories?.map((category) => {
            return (
              <li
              key={category}
                className={
                  SelectedCategory === category ? "border-b-2 border-blue p-4" : ""
                }
                onClick={() => handleCategorySelect(category)}
              >
                {category}
              </li>
            );
          })}
        </ul>
        </div>

          {productLoading ? <Loader /> : <div className="flex max-md:flex-col md:flex-wrap md:gap-10 mx-auto max-md:items-center justify-center mt-3">
          {products &&
            products?.map((product) => {
              return <Card product={product} key={product.price  + product.price}/>;
            })}
          </div>}
      </div>
    </div>
  );
};

export default BestSeller;
