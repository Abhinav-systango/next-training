"use client";
import { fetchProductsWithLimit } from "@/app/_api/FetchApis";
import { productInterface } from "@/app/_utils/interface";
import React, { useEffect, useState } from "react";
import { FcRating } from "react-icons/fc";

const Hero = () => {
  const [Products, setProducts] = useState<productInterface[]>();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await fetchProductsWithLimit(3);
        localStorage.setItem("Products", JSON.stringify(data))
        console.log("🚀 ~ fetchProduct ~ data:", data);
        setProducts(data);
      } catch (error) {
        console.log("🚀 ~ fetchProduct ~ error:", error);
      } 
    };
    fetchProduct();
  }, []);

  return (
    <div className="md:relative">
            
      <img src="/images/carousal3.jpg" alt="" className="w-full h-[calc(100vh_-_100px)] object-cover"/>

      <div className=" w-full top-[85%]">
        <div className="flex justify-center gap-5 overflow-auto">
          {Products?.map((product) => (
            <div className="w-60 bg-slate-100 rounded-lg">
              <div className="flex flex-col gap-4 py-5 px-8 ">
                <p className="font-medium text-sm h-10">{product.title}</p>
                <img
                  src={product.image}
                  alt=""
                  className="bg-blend-multiply object-contain h-32 py-3"
                />
                <div className="flex items-center justify-between">
                  <p className="flex gap-1 items-center">
                    <FcRating />
                    {product.rating.count}
                  </p>
                  <p className="text-lg text-end text-blue p-2 font-semibold">
                    ${product.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
