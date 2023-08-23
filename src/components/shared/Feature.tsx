import { FC } from "react";
import Image from "next/image";

interface IFeature {
  icon: string;
  title: string;
  description: string;
}

interface FeatureProps {
  feature: IFeature;
}

export const Feature: FC<FeatureProps> = ({ feature }) => {
  const { icon, title, description } = feature;
  return (
    <div className="mx-auto text-center max-w-[320px] md:max-w-[360px]">
      <Image src={`/assets/images/features/desktop/${icon}.svg`} alt={title} width={72} height={72} className="mx-auto mb-6 w-[72px] h-[72px] object-contain" />
      <h3 className="mb-3 text-lg font-bold lg:text-xl">{title}</h3>
      <p className="text-sm leading-relaxed tracking-wide text-gray-500 lg:text-base">{description}</p>
    </div>
  );
};
