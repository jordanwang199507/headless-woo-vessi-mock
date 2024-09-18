import React from "react";
import { FeaturePoint } from "@/app/_components";
import { features } from "@/app/_constant";
import images from "@/public/images";

const Features = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col max-lg:w-full">
        <h2 className="font-fascinate text-4xl text-dark-gray">
          Let's <span className="text-primary">Talk</span> Features
        </h2>
        <div className="flex flex-col gap-8 mt-12">
          {features.map((feature) => (
            <FeaturePoint {...feature} key={feature.label} />
          ))}
        </div>
      </div>
      <div className="relative flex flex-1 items-center justify-center w-full bg-card bg-contain bg-no-repeat bg-center">
        <img src={images.shoe8} alt="Feature shoes" width={570} height={522} />
      </div>
    </section>
  );
};

export default Features;
