import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="container mx-auto py-4 ">
      <div className="flex text-xl">
        <div className="flex flex-1"> <Link href={"/"}><span className="text-blue">E-</span>Comm</Link></div>
        <div className=" max-md:hidden flex gap-8 uppercase">  
          <Link href={'/'} className="text-blue">Home</Link>
          <Link href={"/contact"}>Contact</Link>
          <Link href={"/profile"}>Profile</Link>
          <button className=" px-6"></button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
