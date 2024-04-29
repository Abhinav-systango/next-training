"use client";
import { logoutUser } from "@/app/_store/features/authSlice";
import { useAppDispatch, useAppSelector } from "@/app/_store/hooks";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { isLoggedIn } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  return (
    <div className="container mx-auto py-4 ">
      <div className="flex text-xl">
        <div className="flex flex-1">
          <Link href={"/"}>
            <span className="text-blue">E-</span>Comm
          </Link>
        </div>
        <div className=" max-md:hidden flex gap-8 uppercase">
          <Link href={"/"} className="text-blue">
            Home
          </Link>
            {isLoggedIn && <Link href={"/profile"}>Profile</Link>}
            {!isLoggedIn ? (
              <Link href={"/login"}>Login</Link>
            ) : (
              <p
                className="cursor-pointer"
                onClick={() => dispatch(logoutUser())}
              >
                Logout
              </p>
            )}
          <button className=" px-6"></button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
