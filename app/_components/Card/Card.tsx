import { AddProductToCart, removeProductFromCart } from "@/app/_store/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/app/_store/hooks";
import { productInterface } from "@/app/_utils/interface";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { FcRating } from "react-icons/fc";

const Card = ({ product }: { product: productInterface }) => {
  // state
  const dispatch = useAppDispatch();
  const { cart, qty } = useAppSelector((state) => state.cart);
  const router = useRouter();

  // methods
  const handleAddToCart = (product: productInterface) => {
    dispatch(AddProductToCart(product));
  };
  const handleProductDetails = (productId: number) => {
    router.push(`/productDetails/${productId}`);
  };

  const isProductAddedInCart = (id: number) => {
    const index = cart.findIndex((item) => item.id === id);
    if (index !== -1) {
      return true;
    }
    return false;
  };

  return (
    <div className="w-56">
      <div
        className="w-full py-3  px-8 cursor-pointer"
        onClick={() => handleProductDetails(product.id)}
      >
        <Image
          src={product?.image}
          width={500}
          height={500}
          alt=""
          className="w-full object-contain h-40 mx-auto"
        />
      </div>
      <div className="bg-gray-200 flex flex-col gap-1 py-2 px-3 text-center rounded-b-lg shadow">
        <p className="text-xs font-medium">{product?.title}</p>
        <p className="text-xs text-gray-500 flex items-center justify-center gap-1">
          <FcRating />
          {product?.rating?.count}
        </p>
        <p className="text-md text-blue  "> ${product?.price}</p>

        {isProductAddedInCart(product.id) ? (
          <div className="flex items-center justify-evenly w-full gap-4">
            <button
            className="bg-blue w-full p-2 text-white text-xs hover:bg-opacity-70"
            onClick={() => handleAddToCart(product)}
          >
            Add 
          </button>
          <button
            className="bg-white rounded border w-full hover:font-bold border-blue text-blue p-2 text-xs"
            onClick={() => dispatch(removeProductFromCart({id: product.id}))}
          >
            Remove 
          </button>
          </div>
        ) : (
          <button
            className="bg-blue text-white p-2 text-xs hover:bg-opacity-70"
            onClick={() => handleAddToCart(product)}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
