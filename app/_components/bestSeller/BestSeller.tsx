"use client";
import {
  fetchCategories,
  fetchProductWithCategory,
} from "@/app/_api/FetchApis";
import { productInterface } from "@/app/_utils/interface";
import React, { useEffect, useState } from "react";
import Card from "../Card/Card";

const BestSeller = () => {
  const [Categories, setCategories] = useState<[]>();
  const [SelectedCategory, setSelectedCategory] = useState<string>();
  const [products, setProducts] = useState<productInterface[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesData = await fetchCategories();
        if (categoriesData) {
          setCategories(categoriesData);
          handleCategorySelect(categoriesData[0])
        }
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchData();
  }, []); 

  const handleCategorySelect = async (category: string) => {
    setSelectedCategory(category);
    // fetch product base on category
    try {
      const data = await fetchProductWithCategory(category);
      if (data) {
        setProducts(data);
      }
    } catch (error) {
      console.log("🚀 ~ handleCategorySelect ~ error:", error);
    }
  };

  return (
    <div>
      <div className="container mx-auto py-10">
        <p className="text-center uppercase font-semibold">Best Seller</p>

        <ul className="flex gap-10 justify-center py-4 uppercase font-medium overflow-auto">
          {Categories?.map((category) => {
            return (
              <li
                className={
                  SelectedCategory === category ? "border-b-2 border-blue" : ""
                }
                onClick={() => handleCategorySelect(category)}
              >
                {category}
              </li>
            );
          })}
        </ul>

        <div className="flex gap-3 md:gap-10 justify-center sm:flex-wrap overflow-auto">
          {products &&
            products?.map((product) => {
              return <Card product={product} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
