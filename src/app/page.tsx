import type { Metadata } from "next";
import { Hero, Feature, Story } from "@/components/shared";
import { features, stories } from "@/data";

export const metadata: Metadata = {
  title: "Photosnap | HomePage",
  description: "Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.",
};

export default function Home() {
  return (
    <main className="bg-white">
      <div className="2xl:mx-auto 2xl:max-w-[1920px]">
        <Hero
          title="Create and Share Your Photo Stories."
          description="Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others."
          cta={{
            href: "/",
            text: "Get an Invite",
          }}
          decorator
          images={{
            mobile: "/assets/images/home/mobile/create-and-share.jpg",
            tablet: "/assets/images/home/tablet/create-and-share.jpg",
            desktop: "/assets/images/home/desktop/create-and-share.jpg",
          }}
        />
      </div>

      <div className="2xl:mx-auto 2xl:max-w-[1920px]">
        <Hero
          direction="right"
          bgColor="white"
          title="Beautiful stories every time"
          description="We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone."
          cta={{
            href: "/stories",
            text: "View the Stories",
          }}
          images={{
            mobile: "/assets/images/home/mobile/beautiful-stories.jpg",
            tablet: "/assets/images/home/tablet/beautiful-stories.jpg",
            desktop: "/assets/images/home/desktop/beautiful-stories.jpg",
          }}
        />
      </div>

      <div className="2xl:mx-auto 2xl:max-w-[1920px]">
        <Hero
          direction="left"
          bgColor="white"
          title="Designed for Everyone"
          description="Photosnap can help you create stories that resonate with your audience. Our tool is designed for photographers of all levels, brands, businesses you name it."
          cta={{
            href: "/stories",
            text: "View the Stories",
          }}
          images={{
            mobile: "/assets/images/home/mobile/designed-for-everyone.jpg",
            tablet: "/assets/images/home/tablet/designed-for-everyone.jpg",
            desktop: "/assets/images/home/desktop/designed-for-everyone.jpg",
          }}
        />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 2xl:mx-auto 2xl:max-w-[1920px]">
        {stories.slice(0, 4).map((story, index) => (
          <Story story={story} key={index} />
        ))}
      </div>

      <div className="container grid gap-10 my-10 sm:grid-cols-2 sm:[&>:last-child]:col-span-2 xl:grid-cols-3 xl:[&>:last-child]:col-span-1 lg:my-28">
        {features.slice(0, 3).map((feature, index) => (
          <Feature feature={feature} key={index} />
        ))}
      </div>
    </main>
  );
}
