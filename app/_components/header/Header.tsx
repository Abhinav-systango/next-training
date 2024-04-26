"use client";
import { useAppSelector } from "@/app/_store/hooks";
import Link from "next/link";
import React from "react";
import { CgProfile, CgSearch, CgShoppingCart } from "react-icons/cg";

const Header = () => {
  const { cart } = useAppSelector((state) => state.cart);
  const { isLoggedIn, user } = useAppSelector((state) => state.auth);
  return (
    <div className="sticky top-0 z-50 bg-white">
      <div className="container mx-auto p-2">
        <div className="flex items-center">
          <div className=" max-md:hidden flex  gap-4">
            <select className="bg-transparent outline-none border-none">
              <option value="EN">EN</option>
            </select>
            <select className="bg-transparent outline-none border-none">
              <option value="USD">USD</option>
            </select>
          </div>

          {/* right  */}
          <div className="flex flex-1 justify-between  md:justify-end gap-10">
           { isLoggedIn && <p className="flex items-center gap-1 cursor-pointer ">
              <CgProfile /> {"adsfa"}
            </p>}
            {/* cart  */}
            <Link href={"/cart"} className="relative">
              <div className="-top-1 absolute -right-2">
                <p className="flex h-1 w-1 items-center justify-center rounded-full bg-red-500 p-2 text-[8px] text-white">
                  {cart.length}
                </p>
              </div>
              <CgShoppingCart className="text-xl" />
            </Link>

            <div className="flex items-center max-md:hidden">
              <input
                type="text"
                placeholder="$0.00"
                className="border-none outline-none w-16 focus:w-full"
              />
              <CgSearch />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
