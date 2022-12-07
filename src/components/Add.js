import React from "react";
import { v4 as uuidv4 } from 'uuid';
const Add = () => {
  const buttons = [
    "Today's Deals",
    "New Products",
    "Seller",
    "Home",
    "Coupons",
  ];
  return (
    <div className="bg-[#232f3e]">
      <div className="flex items-center justify-between  h-8 sm:max-w-[80vw] md:max-w-[80vw]  lg:max-w-[55vw] mx-auto sm:px-10 text-[15px] sm:text-[16px]">
        {buttons.map((button) => (
          <div key={uuidv4()} className="group whitespace-nowrap ">
            <div className="text-gray-200/70 hover:text-white px-[0.7rem] cursor-pointer">
              {button}
            </div>
            <div className="h-[2px] w-full group-hover:bg-white duration-100 ease-out"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Add;
