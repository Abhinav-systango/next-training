import React from "react";

const Navbar = () => {
  return (
    <div className="container mx-auto py-4 ">
      <div className="flex text-xl">
        <div className="flex flex-1"> <p>E-Comm</p></div>
        <div className=" max-md:hidden flex gap-8 uppercase">  
          <p className="text-blue">Home</p>
          <p>BAGS</p>
          <p>Sneaker</p>
          <p>Belt</p>
          <p>Contact</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
