"use client";
import { UIContext } from "@/context/ui";
import Link from "next/link";
import React, { FC, useContext } from "react";

export interface ICard {
  title: string;
  description: string;
  price: number;
  url: string;
}

interface CardProps {
  card: ICard;
  isBlack?: boolean;
}

export const Card: FC<CardProps> = ({ card, isBlack }) => {
  const { title, description, price, url } = card;
  const { isYearly } = useContext(UIContext);

  return (
    <div className={`relative py-12 px-10 text-center grid gap-6 xl:gap-8 md:grid-cols-2 md:text-left max-w-[800px] mx-auto xl:text-center xl:grid-cols-1 ${isBlack ? "bg-black xl:py-20 text-white" : "bg-gray-200 xl:my-10"}`}>
      {isBlack && <div className="absolute top-0 xl:h-2 h-full left-0 w-2 xl:w-full bg-gradient-to-t xl:bg-gradient-to-r from-peach via-plum to-blueberry"></div>}
      <h3 className="font-bold text-2xl xl:text-3xl">{title}</h3>
      <p className="md:-mt-4 xl:mt-0 text-neutral-500">{description}</p>
      <span className="font-bold block text-4xl tracking-widest md:col-start-2 md:row-start-1 md:text-right xl:col-start-auto xl:row-start-auto xl:text-center">${isYearly ? (price * 10).toFixed(2) : price.toFixed(2)}</span>
      <span className="text-sm xl:text-base block -mt-6  md:text-right xl:text-center xl:mb-4">per {isYearly ? "year" : "month"}</span>
      <Link href={url} className={`flex justify-center py-3 text-sm tracking-widest uppercase transition-colors duration-300  ${isBlack ? "bg-white text-black hover:bg-gray-200" : "text-white bg-black hover:bg-white hover:text-black"}`}>
        Pick Plan
      </Link>
    </div>
  );
};
