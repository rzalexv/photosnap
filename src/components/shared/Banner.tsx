import Image from "next/image";
import Link from "next/link";

export const Banner = () => {
  return (
    <div className="relative">
      <div className="absolute top-0 h-2 left-8 w-28 bg-gradient-to-r from-peach via-plum to-blueberry md:h-full md:w-2 2xl:w-3 md:bg-gradient-to-t md:left-0"></div>
      <picture className="block">
        <Image src="/assets/images/shared/mobile/bg-beta.jpg" alt="We're in Beta" width={375} height={288} className="object-cover object-center w-full h-full max-h-[320px] sm:hidden" />
        <Image src="/assets/images/shared/tablet/bg-beta.jpg" alt="We're in Beta" width={768} height={280} className="hidden object-cover object-center w-full h-full sm:block lg:hidden" />
        <Image src="/assets/images/shared/desktop/bg-beta.jpg" alt="We're in Beta" width={1440} height={280} className="hidden object-cover object-center w-full h-full lg:block" />
      </picture>
      <div className="absolute top-0 left-0 grid content-center h-full w-full px-8 text-white md:items-center md:gap-16 md:grid-cols-[1.5fr_1fr] xl:grid-cols-[.6fr_1fr]  2xl:px-56 xl:px-28">
        <h2 className="flex mb-4 text-3xl md:text-4xl 2xl:text-5xl md:leading-tight font-bold tracking-widest uppercase lg:text-left 2xl:leading-snug">We&apos;re in Beta. Get your invite today!</h2>
        <div className="md:text-end">
          <Link href="/" className="inline-flex items-center  gap-4 font-bold tracking-[2px] text-center uppercase group sm:text-sm 2xl:text-xl">
            <span className="underline-gradient">Get an invite</span>
            <Image src="/assets/images/shared/desktop/arrow-white.svg" alt="arrow" width={43} height={14} className="duration-300 group-hover:translate-x-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};
