import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Story } from "@/components/shared";
import { stories } from "@/data";

export const metadata: Metadata = {
  title: "Photosnap | Stories",
  description: 'The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains" especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.',
};

const StoriesPage = () => {
  return (
    <div>
      <div className="2xl:mx-auto 2xl:max-w-[1920px] relative">
        <picture className="block lg:h-[720px]">
          <Image src="/assets/images/stories/mobile/moon-of-appalacia.jpg" alt="Moon of Apalacia" width={375} height={317} className="object-cover object-center w-full h-full sm:hidden" />
          <Image src="/assets/images/stories/tablet/moon-of-appalacia.jpg" alt="Moon of Apalacia" width={768} height={650} className="hidden object-cover object-center w-full h-full sm:block lg:hidden" />
          <Image src="/assets/images/stories/desktop/moon-of-appalacia.jpg" alt="Moon of Apalacia" width={1440} height={650} className="hidden object-cover object-center w-full h-full lg:block" />
        </picture>
        <div className="py-10 lg:py-32 text-white bg-black md:bg-transparent md:absolute md:left-0 md:top-0 md:w-[65%] lg:w-[50%] xl:w-[45%] 2xl:w-[35%] md:h-full md:grid md:items-center md:py-0">
          <div className="container grid gap-4 px-8 xl:px-16 md:gap-6">
            <span className="font-bold tracking-widest uppercase">Last Month&apos;s Featured Story</span>
            <h1 className="text-[38px] leading-tight font-bold uppercase 2xl:text-6xl md:text-[54px] tracking-widest">Hazy Full Moon of Appalachia</h1>
            <div className="flex gap-2 text-sm">
              <span className="xl:text-gray-400">March 2nd 2020</span>
              <span className="">by John Appleseed</span>
            </div>
            <p className="leading-relaxed tracking-wide 2xl:text-lg xl:text-gray-400">The dissected plateau area, while not actually made up of geological mountains, is popularly called &ldquo;mountains&rdquo; especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.</p>
            <div className="">
              <Link href="/" className="font-bold inline-flex gap-4 items-center justify-between tracking-[2px] uppercase group">
                <span className="underline-gradient">Read the Story</span>
                <Image src="/assets/images/shared/desktop/arrow-white.svg" alt="arrow" width={43} height={14} className="duration-300 group-hover:translate-x-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 2xl:mx-auto 2xl:max-w-[1920px]">
        {stories.map((story, index) => (
          <Story story={story} withDate key={index} />
        ))}
      </div>
    </div>
  );
};

export default StoriesPage;
