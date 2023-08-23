import Image from "next/image";
import type { Metadata } from "next";
import { Banner, Hero } from "@/components/shared";
import { Card, TogglePrice } from "@/components/pricing";
import { pricing, table } from "@/data";

export const metadata: Metadata = {
  title: "Photosnap | Pricing",
  description: "Create a your stories, Photosnap is a platform for photographers and visual storytellers. It's the simple way to create and share your photos.",
};

const PricingPage = () => {
  return (
    <div>
      <div className="2xl:mx-auto 2xl:max-w-[1920px]">
        <Hero
          title="Pricing"
          description="Create a your stories, Photosnap is a platform for photographers and visual storytellers. It's the simple way to create and share your photos."
          decorator
          images={{
            mobile: "/assets/images/pricing/mobile/hero.jpg",
            tablet: "/assets/images/pricing/tablet/hero.jpg",
            desktop: "/assets/images/pricing/desktop/hero.jpg",
          }}
        />
      </div>
      <div className="container pt-24 xl:pt-32">
        <TogglePrice />
        <div className="mt-10 xl:mt-16 grid gap-8 xl:grid-cols-3">
          {pricing.map((card, index) => {
            if (index === 1) return <Card card={card} key={index} isBlack />;
            return <Card card={card} key={index} />;
          })}
        </div>
      </div>

      <div className="container py-10 xl:py-40">
        <table className="table w-full lg:hidden">
          <thead>
            <tr className="block">
              <th className="block">
                <h2 className="text-left uppercase font-bold text-sm tracking-wider mb-4">The Features</h2>
                <hr className="bg-black h-[2px]" />
              </th>
            </tr>
          </thead>
          <tbody>
            {table.map(({ rowTitle, plans }, idx) => (
              <tr className="pt-6 block" key={idx}>
                <td className="block">
                  <h3 className="font-bold tracking-widest uppercase text-sm mb-4">{rowTitle}</h3>
                  <div className="grid grid-cols-3">
                    {plans.map(({ plan, check }, index) => (
                      <div className="" key={index}>
                        <span className="uppercase text-sm tracking-widest font-bold text-neutral-400 mb-2 block">{plan}</span>
                        {check && <Image src="/assets/images/pricing/desktop/check.svg" width={18} height={15} className="" alt="check" />}
                      </div>
                    ))}
                  </div>
                  <hr className="mt-6 bg-neutral-200 h-[2px]" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 className="hidden lg:block text-5xl uppercase text-center font-bold tracking-widest mb-12">Compare</h2>
        <table className="hidden lg:table w-full max-w-[800px] mx-auto">
          <thead>
            <tr>
              <th>
                <div className="grid grid-cols-[1.5fr_2fr] items-center pb-4 px-4">
                  <h2 className="text-left uppercase font-bold text-sm tracking-wider">The Features</h2>
                  <div className="flex justify-between">
                    <h2 className="text-left uppercase font-bold text-sm tracking-wider">Basic</h2>
                    <h2 className="text-left uppercase font-bold text-sm tracking-wider pl-6">Pro</h2>
                    <h2 className="text-left uppercase font-bold text-sm tracking-wider">Business</h2>
                  </div>
                </div>
                <hr className="bg-black h-[2px] block" />
              </th>
            </tr>
          </thead>
          <tbody>
            {table.map(({ rowTitle, plans }, idx) => (
              <tr className="pt-6 block" key={idx}>
                <td className="block">
                  <div className="grid grid-cols-[1.5fr_2fr] items-center px-4">
                    <h3 className="font-bold tracking-widest uppercase text-sm">{rowTitle}</h3>
                    <div className="flex justify-between px-5">
                      {plans.map(({ check }, index) => (
                        <div className="h-5 w-5" key={index}>
                          {check && <Image src="/assets/images/pricing/desktop/check.svg" width={18} height={15} className="" alt="check" />}
                        </div>
                      ))}
                    </div>
                  </div>
                  <hr className="mt-6 bg-neutral-200 h-[2px]" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="2xl:mx-auto 2xl:max-w-[1920px]">
        <Banner />
      </div>
    </div>
  );
};

export default PricingPage;
