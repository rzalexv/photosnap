import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

interface IStory {
  title: string;
  author: string;
  images: {
    mobile: string;
    desktop: string;
  };
  date_publish: string;
}

interface StoryProps {
  story: IStory;
  withDate?: boolean;
}

export const Story: FC<StoryProps> = ({ story, withDate }) => {
  const { title, author, images, date_publish } = story;
  
  return (
    <div className="relative max-w-[640px] lg:hover:-translate-y-8 transition-all duration-500 after:bg-gradient-to-r after:from-peach after:via-plum after:to-blueberry after:h-0 after:transition-all after:duration-500 after:w-full after:absolute after:lg:hover:h-4">
      <picture className="before:w-full before:h-full before:absolute before:bg-gradient-to-t before:from-black/80 before:from-10% before:to-transparent before:to-50%">
        <Image src={images.mobile} className="object-cover object-center w-full md:hidden" alt={title} width={375} height={375} />
        <Image src={images.desktop} className="hidden object-cover object-center w-full md:block" alt={title} width={360} height={500} />
      </picture>
      <div className="absolute bottom-0 w-full px-8 pb-8 text-white">
        {withDate && <span className="text-sm">{date_publish}</span>}
        <h3 className="mb-1 text-xl font-bold tracking-wider">{title}</h3>
        <h4 className="mb-4">by {author}</h4>
        <hr className="opacity-30" />
        <div className="py-3">
          <Link href="/" className="font-bold flex items-center justify-between tracking-[2px] uppercase group invite">
            <span className="underline-gradient">Read Story</span>
            <Image src="/assets/images/shared/desktop/arrow-white.svg" alt="arrow" width={43} height={14} className="duration-300 group-hover:translate-x-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};
