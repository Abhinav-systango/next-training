"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { FcRating } from "react-icons/fc";
import CarousalImage from "../../../public/images/carousal3.jpg"
import { useAppDispatch, useAppSelector } from "@/app/_store/hooks";
import { fetchAllProducts } from "@/app/_store/features/productsSlice";

const Hero = () => {

  const {products, loading} = useAppSelector(state => state.products)
  const dispatch = useAppDispatch()
  useEffect(() => {
      dispatch(fetchAllProducts())
  }, []);

  return (
    <div className="md:relative">
            
      <Image src={CarousalImage} alt="" className="w-full md:h-[calc(100vh_-_100px)] object-cover"/>

      <div className=" w-full md:top-[85%]">
        <div className="flex md:justify-center md:gap-5 overflow-auto">
          {products?.slice(0,3).map((product) => (
            <div className="w-60 bg-slate-100 rounded-lg" key={product.category + product.image}>
              <div className="flex flex-col gap-4 py-5 px-8 ">
                <p className="font-medium text-sm h-10">{product.title}</p>
                <Image
                 src={product.image}
                 alt="Picture of the author"
                 width={500}
                 height={500}
                 
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
