"use client";
import { useAppSelector } from "@/app/_store/hooks";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaAddressBook } from "react-icons/fa";
import { MdSummarize } from "react-icons/md";

const Checkout = () => {

  // hooks 
  const { cart, qty } = useAppSelector((state) => state.cart);
  console.log("🚀 ~ Checkout ~ cart:", cart);
  const router = useRouter();

  // hooks form 
  type Inputs = {
    firstName: string
    lastName: string,
    address_line_1: string,
    address_line_2: string,
    city: string,
    state: string,
    pincode: string
  }
  
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<Inputs>()

  // state
  const [selectExistingAddress, setSelectExistingAddress] = useState<any>(null);
  const [Total, setTotal] = useState<number>(0);
  console.log("🚀 ~ Checkout ~ Total:", Total);

  // methods
  const handleAddressSelect = (index: number) => {
    setSelectExistingAddress((prev: number) => {
      if (prev === index) {
        return null;
      }
      return index;
    });
  };

  const calculateTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total += qty[item.id] * item.price;
    });
    setTotal(total);
  };


  // effects 
  useEffect(() => {
    calculateTotal();
  }, []);

  const orderPlace = () => {
    alert("order Place");
    router.push("/");
  };

  

  return (
    <div className="grid grid-cols-12 gap-3 h-screen">
      <div className="col-span-8 bg-slate-200">
        {/* shipping address  */}
        <div className="flex items-center py-3 px-4 bg-blue text-white font-medium uppercase gap-3">
          <p>Shipping Address</p>
          <FaAddressBook />
        </div>
        <div className="bg-white m-4 py-4 flex flex-col gap-4">
          <div className="md:flex md:gap-3 px-4">
            <input
              type="text"
              placeholder="first name"
              className="px-4 w-full py-2 rounded outline-none border-blue focus:border"
            />
            <input
              type="text"
              placeholder="last name"
              className="px-4 w-full py-2 rounded outline-none border-blue focus:border"
            />
          </div>

          <div className="md:flex px-4">
            <input
              type="text"
              placeholder="Address line 1"
              className="px-4  py-2 w-full rounded outline-none border-blue focus:border"
            />
          </div>
          <div className="md:flex px-4">
            <input
              type="text"
              placeholder="Address line 2 (optional)"
              className="px-4 w-full py-2 rounded outline-none border-blue focus:border"
            />
          </div>

          <div className="md:flex md:gap-3 px-4">
            <input
              type="text"
              placeholder="City"
              className="px-4  py-2 w-full rounded outline-none border-blue focus:border"
            />
            <input
              type="text"
              placeholder="State"
              className="px-4 w-full  py-2 rounded outline-none border-blue focus:border"
            />
          </div>

          <div className="md:flex md:gap-3 px-4">
            <input
              type="text"
              placeholder="Phone"
              className="px-4  py-2 w-full rounded outline-none border-blue focus:border"
            />
            <input
              type="text"
              placeholder="Email"
              className="px-4 w-full  py-2 rounded outline-none border-blue focus:border"
            />
          </div>
        </div>

        {/* existing address  */}
        <div className="flex items-center py-3 px-4 bg-blue text-white font-medium uppercase gap-3">
          <p>Existing Address</p>
          <FaAddressBook />
        </div>

        <div className="bg-white m-4 p-4 flex flex-col gap-4 w-full">
          <div
            className={`p-4 w-1/2 ${
              selectExistingAddress === 0
                ? "border-blue/60 border-2 rounded bg-blue/10"
                : "border-gray-400 rounded border-2 bg-gray-200"
            }`}
            onClick={() => handleAddressSelect(0)}
          >
            <p className="font-semibold ">Address 1</p>
            <div>
              <p>Hello owrld</p>
              <p>Addres line 1 abc abz abs abs</p>
              <p>Addres line 2 abc abz abs abs</p>
              <p>city, state</p>
              <p>443001</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-4 bg-blue text-white ">
        <div className="flex items-center py-3 px-4 bg-white/30 text-white font-medium uppercase gap-3">
          <p>Summary</p>
          <MdSummarize />
        </div>

        <div className="px-6 mt-10 flex flex-col gap-3  ">
          <div className="w-full flex justify-between  ">
            <p className="font-semibold">Subtotal:</p>
            <p className="text-end">${Total}</p>
          </div>
          <div className="w-full flex justify-between">
            <p className="font-semibold">Shipping Charges:</p>
            <p className="text-end">${Total / 10}</p>
          </div>
          <div className="w-full flex justify-between">
            <p className="font-semibold">Tax:</p>
            <p className="text-end">${(Total * 4) / 100}</p>
          </div>
          <hr className="text-white my-2 " />
          <div className="w-full flex justify-between">
            <p className="font-semibold">Total:</p>
            <p className="text-end">
              ${Total + Total / 10 + (Total * 4) / 100}
            </p>
          </div>
        </div>
        <div className="px-4">
          <button
            className="py-3 bg-white w-full text-blue mt-10 text-medium hover:bg-white/80 "
            onClick={() => orderPlace()}
          >
            Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
