"use client";
import Card from "@/app/_components/Card/Card";
import { AddProductToCart } from "@/app/_store/features/cartSlice";
import {
  fetchAllProducts,
  fetchProduct,
} from "@/app/_store/features/productsSlice";
import { useAppDispatch, useAppSelector } from "@/app/_store/hooks";
import { productInterface } from "@/app/_utils/interface";
import Image from "next/image";
import React, { useEffect } from "react";
import { FcRating } from "react-icons/fc";

const page = ({ params }: { params: { productId: string } }) => {

  // hooks 
  const dispatch = useAppDispatch();
  const { product, loading, error, products } = useAppSelector(
    (state) => state.products
  );

  // effects 
  useEffect(() => {
    console.log("🚀 ~ page ~ loading:", loading);
    dispatch(fetchAllProducts());
    dispatch(fetchProduct(params.productId));
  }, []);

  // methods 
  const handleAddToCart = (product: productInterface) => {
    dispatch(AddProductToCart(product));
  };

  return (
    <div className="container mx-auto my-5">
      <div className="md:grid  md:grid-cols-12  h-screen  ">
        <div className="max-md:hidden md:col-span-4 grid justify-center h-screen overflow-auto">
          {products.map((product) => {
            return (
              <div key={product.id + product.id}>
                <Card product={product} />
              </div>
            );
          })}
        </div>
        <div className="md:col-span-8  grid justify-center">
          <div className="px-6  ">
            <p className="py-2 font-medium">
              <span className="font-bold text-black mr-2">{product.id} / </span>
              {product.title}
            </p>

            <div>
              <Image
                src={product.image}
                alt="product Image"
                height={350}
                width={350}
                className="mx-auto"
              />
            </div>

            <div>
              <div className="flex items-center justify-between py-3">
                <p className="font-bold uppercase my-3">{product.category}</p>
                <p className="flex items-center gap-3">
                  <FcRating /> {product.rating.count}
                </p>
              </div>
              <p className="text-sm text-justify">{product.description}</p>

              <div className="flex justify-between items-center my-4">
                <p className="font-xl text-blue font-bold">
                  Price:- ${product.price}
                </p>
                <button
                  className="bg-blue text-white px-4 py-2 text-xs hover:bg-opacity-70"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
