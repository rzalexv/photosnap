import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  direction?: "left" | "right";
  bgColor?: "black" | "white";
  title: string;
  description: string;
  cta?: {
    href: string;
    text: string;
  };
  decorator?: boolean;
  images: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
}

const left = "md:grid-cols-[1.5fr_273px] xl:grid-cols-[1.5fr_2fr]";
const right = "md:grid-cols-[273px_1.5fr] xl:grid-cols-[2fr_1.5fr]";

export const Hero: FC<HeroProps> = ({ direction = "left", bgColor = "black", title, description, cta, decorator, images }) => {
  const isBlack = bgColor === "black";
  const isLeft = direction === "left";

  return (
    <div className={`grid lg:grid-cols-2 ${isLeft ? left : right}`}>
      <picture className={`${isLeft ? "md:order-last" : ""}`}>
        <Image src={images.mobile} alt={`${title} image`} width={375} height={294} className="object-cover object-center w-full h-full md:hidden" />
        <Image src={images.tablet} alt={`${title} image`} width={273} height={650} className="hidden object-cover object-center w-full md:block lg:hidden md:h-full" />
        <Image src={images.desktop} alt={`${title} image`} width={830} height={650} className="hidden object-cover object-center w-full h-full lg:block" />
      </picture>
      <div className={`${isBlack ? "text-white bg-black" : "bg-white text-black"} md:grid md:items-center`}>
        <div className="relative grid gap-6 px-8 py-20 sm:w-4/5 sm:text-center sm:mx-auto md:mx-0 md:text-left md:w-full md:px-16 md:py-0 2xl:px-28">
          {decorator && <div className="absolute top-0 h-2 left-8 w-28 bg-gradient-to-r from-peach via-plum to-blueberry md:h-full md:w-2 2xl:w-3 md:bg-gradient-to-t md:left-0 "></div>}
          <h1 className="text-[32px] font-bold leading-snug tracking-widest uppercase md:text-[38px] 2xl:text-6xl 2xl:leading-tight">{title}</h1>
          <p className="text-sm leading-relaxed tracking-wide text-neutral-500 md:text-base 2xl:text-[22px] 2xl:leading-relaxed">{description}</p>
          {cta && (
            <Link href="/" className="2xl:mt-8 inline-flex items-center gap-4 font-bold tracking-[2px] text-center uppercase group 2xl:text-lg 2xl:tracking-[3px]">
              <span className="underline-gradient">{cta.text}</span>
              <Image src={`/assets/images/shared/desktop/arrow-${isBlack ? "white" : "black"}.svg`} alt="arrow" width={43} height={14} className="duration-300 group-hover:translate-x-2" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
