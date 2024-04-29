"use client";
import {
  QtyInc,
  QtyRemove,
  removeProductFromCart,
} from "@/app/_store/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/app/_store/hooks";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import Navbar from "@/app/_components/navbar/Navbar";

const Cart = () => {
  // redux
  const { isLoggedIn } = useAppSelector((state) => state.auth);
  const { cart, qty } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  
  useLayoutEffect(() => {
    if (!isLoggedIn) {
      redirect('/login')
    }
  }, [])

  // states
  const [Total, setTotal] = useState<number>(0);

  // methods
  const handleDecrease = (id: number) => {
    if (qty[id] === 1) {
      return dispatch(removeProductFromCart({ id }));
    }
    dispatch(QtyRemove({ id }));
  };

  const calculateTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total += qty[item.id] * item.price;
    });
    setTotal(total);
  };

  useEffect(() => {
    calculateTotal();
  }, [cart, qty]);

  // css classes 
  const tHead = "text-sm font-medium uppercase py-2";

  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-10">
        <div className="overflow-auto">
          <table className="w-full text-center shadow rounded">
            <thead className="bg-blue/30">
              <tr className="">
                <th className={tHead}>Image</th>
                <th className={tHead}>title</th>
                <th className={tHead}>Category</th>
                <th className={tHead}>Price</th>
                <th className={tHead}>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                return (
                  <tr className="" key={Math.random()}>
                    <td className="py-3 w-36  ">
                      <Image
                        src={item.image}
                        height={30}
                        width={30}
                        alt=""
                        className="object-contain aspect-auto mx-auto cursor-pointer"
                      />
                    </td>
                    <td className="text-xs text-start px-1 ">{item.title}</td>
                    <td className="text-xs px-1 w-36 capitalize">
                      {item.category}
                    </td>
                    <td className="text-xs px-1 w-36">${item.price}</td>
                    <td className="text-xs px-1 w-36">
                      <div className="flex gap-2 items-center justify-center">
                        <BiMinus
                          className="cursor-pointer"
                          onClick={() => handleDecrease(item.id)}
                        />
                        <span className="text-blue">{qty[item.id]}</span>
                        <BiPlus
                          className="cursor-pointer"
                          onClick={() => dispatch(QtyInc({ id: item.id }))}
                        />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {cart.length > 0 ? 
            <div className="mt-5">
              <p className="text-end px-10">
                Total: <span className="text-blue">${Total.toFixed(2)}</span>
              </p>
            </div>
           : <p className="p-4 text-center">No product added in the cart</p>}

        </div>

        {cart.length > 0 && (
          <div className="text-end mt-5">
            <Link
              href={"/checkout"}
              className="px-6 py-3 rounded shadow-lg bg-blue text-white"
            >
              Checkout
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
