import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";

const socialNetworks = [
  {
    url: "/",
    icon: <FaFacebook aria-label="Facebook" />,
  },
  {
    url: "/",
    icon: <FaYoutube aria-label="Youtube" />,
  },
  {
    url: "/",
    icon: <FaTwitter aria-label="Twitter" />,
  },
  {
    url: "/",
    icon: <FaPinterest aria-label="Pinterest" />,
  },
  {
    url: "/",
    icon: <FaInstagram aria-label="Instagram" />,
  },
];

const mainNavigation = [
  {
    url: "/",
    name: "Home",
  },
  {
    url: "/stories",
    name: "Stories",
  },
  {
    url: "/features",
    name: "Features",
  },
  {
    url: "/pricing",
    name: "Pricing",
  },
];

export const Footer = () => {
  return (
    <footer className="py-16 text-white bg-black">
      <div className="container grid sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        <div className="flex justify-center sm:justify-start">
          <Link href="/">
            <Image src="/assets/images/shared/desktop/logo-white.svg" alt="Photosnap Logo" width={170} height={16} className="" />
          </Link>
        </div>

        <ul className="flex justify-center gap-4 mt-8 mb-16 sm:my-0 sm:justify-start lg:col-start-1 lg:row-start-3" aria-label="Social Networks">
          {socialNetworks.map(({ url, icon },index) => (
            <li key={index}>
              <Link href={url} className="inline-block text-2xl transition-transform duration-300 hover:scale-125">
                {icon}
              </Link>
            </li>
          ))}
        </ul>

        <nav className="sm:col-start-1 sm:row-start-2 sm:col-span-2 sm:mb-8 lg:mb-0 sm:row-span-2 lg:col-start-2 lg:col-span-1 lg:row-span-3 lg:row-start-1" aria-label="Main Navigation">
          <ul className="flex flex-col justify-center gap-4 mb-20 tracking-wider text-center sm:flex-row sm:justify-start sm:mb-0 sm:text-sm lg:flex-col lg:text-start ">
            {mainNavigation.map(({ name, url },index) => (
              <li key={index}>
                <Link href={url} className="font-bold uppercase transition-colors underline-gradient">
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mb-8 text-center sm:text-end sm:col-start-2 sm:row-start-1 sm:mb-0 lg:col-start-3">
          <Link href="/" className="inline-flex items-center justify-center gap-4 font-bold tracking-wider text-center uppercase group sm:text-sm sm:justify-end">
            <span className="underline-gradient">Get an invite</span>
            <Image src="/assets/images/shared/desktop/arrow-white.svg" alt="arrow" width={43} height={14} className="duration-300 group-hover:translate-x-2" />
          </Link>
        </div>

        <p className="text-sm text-center text-neutral-600 sm:text-end lg:col-start-3 lg:row-start-3">&copy; Copyright 2019. All Rights Reserved</p>
      </div>
    </footer>
  );
};
