import type { Metadata } from "next";
import { Hero, Feature, Banner } from "@/components/shared";
import { features } from "@/data";

export const metadata: Metadata = {
  title: "Photosnap | Features",
  description: "We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.",
};

const FeaturesPage = () => {
  return (
    <div>
      <div className="2xl:mx-auto 2xl:max-w-[1920px]">
        <Hero
          title="Features"
          description="We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories."
          decorator
          images={{
            mobile: "/assets/images/features/mobile/hero.jpg",
            tablet: "/assets/images/features/tablet/hero.jpg",
            desktop: "/assets/images/features/desktop/hero.jpg",
          }}
        />
      </div>

      <div className="container grid gap-10 my-24 sm:grid-cols-2 xl:grid-cols-3 lg:my-28 2xl:my-40">
        {features.map((feature, index) => (
          <Feature feature={feature} key={index} />
        ))}
      </div>

      <div className="2xl:mx-auto 2xl:max-w-[1920px]">
        <Banner />
      </div>
    </div>
  );
};

export default FeaturesPage;
