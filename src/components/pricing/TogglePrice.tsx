"use client";
import { UIContext } from "@/context/ui";
import React, { useContext } from "react";

export const TogglePrice = () => {
  const { isYearly, tooglePrice } = useContext(UIContext);

  const handleToogle = () => {
    tooglePrice(!isYearly);
  };

  return (
    <div className="flex items-center gap-8 text-lg justify-center font-bold">
      <span className={`${isYearly ? "text-neutral-500" : ""}`}>Monthly</span>
      <button
        className={`after:duration-300 after:transition-all relative w-20 h-10  rounded-full after:top-1 after:absolute after:h-8 after:w-8 after:rounded-full  ${
          isYearly ? "bg-black after:bg-white" : "bg-gray-200 after:bg-black after:-translate-x-[100%]"
        }`}
        onClick={handleToogle}
      ></button>
      <span className={`${isYearly ? "" : "text-neutral-500"}`}>Yearly</span>
    </div>
  );
};
