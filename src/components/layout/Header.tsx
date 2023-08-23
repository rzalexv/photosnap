"use client";
import { UIContext } from "@/context/ui";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";

export const Header = () => {
  const { toggleMenu, isOpenMenu } = useContext(UIContext);
  const handleToogle = () => {
    toggleMenu(!isOpenMenu);
  };

  return (
    <header className="flex items-center h-20">
      <div className="container flex items-center justify-between gap-12">
        <Link href="/">
          <Image src="/assets/images/shared/desktop/logo-dark.svg" alt="Photosnap Logo" width={170} height={16} className="md:w-64" />
        </Link>

        <div className="burger md:hidden h-5 w-5 flex items-center justify-center" onClick={handleToogle}>
          {isOpenMenu ? <Image src="/assets/images/shared/mobile/close.svg" alt="Close Menu" width={16} height={15} className="" /> : <Image src="/assets/images/shared/mobile/menu.svg" alt="Open Menu" width={20} height={6} className="" />}
        </div>

        <nav
          className={` left-0  absolute flex flex-col justify-center items-center  w-full lg:w-[60%] gap-6 py-16 z-50 md:relative md:flex-row md:py-0 md:top-0 md:justify-between opacity-100  shadow-lg md:opacity-100 md:visible md:h-auto md:shadow-none md:duration-0 bg-white transition-all duration-700  ${
            isOpenMenu ? "top-20" : "-top-1/2 invisible opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-6 text-sm font-bold tracking-widest text-center uppercase md:flex-row lg:gap-16 lg:text-base">
            <li className="">
              <Link href="/stories" className="underline-gradient" onClick={handleToogle}>
                Stories
              </Link>
            </li>
            <li className="">
              <Link href="/features" className="underline-gradient" onClick={handleToogle}>
                Features
              </Link>
            </li>
            <li className="">
              <Link href="/pricing" className="underline-gradient" onClick={handleToogle}>
                Pricing
              </Link>
            </li>
          </ul>
          <ul className="">
            <li className="">
              <Link href="/" className="inline-flex px-6 py-3 text-sm font-bold tracking-widest text-white uppercase bg-black" onClick={handleToogle}>
                Get an Invite
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
