"use client";
import React from "react";
import { Button, ShoeCard, SocialMediaIcons } from "@/app/_components";
import { shoes, heroText, socialMediaLight } from "@/app/_constant";
import icons from "@/public/icons";
import images from "@/public/images";
import { useState } from "react";

const Hero = ({ siteInfo }) => {
  //   console.log(siteInfo);
  const [bigShoeImg, setBigShoeImg] = useState(images.bigShoe1);
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center h-[90vh] max-xl:h-full gap-10 max-container"
    >
      <div className="relative xl:w-2/5 w-full flex flex-col justify-center items-start max-xl:padding-x pt-28 z-10">
        <h1 className="font-fascinate text-dark-gray text-8xl max-lg:text-6xl max-sm:text-[52px] max-sm:leading-[74px] max-xs:text-[48px] max-xs:leading-[64px] font-bold">
          The Best <br />
          <span className="text-primary">Waterproof</span> Shoes
        </h1>
        <p className="mt-4 uppercase text-lg font-montserrat font-bold text-primary">
          {siteInfo.description}
        </p>

        <p className="text-slate-gray  font-montserrat text-lg leading-8 mt-6 mb-10 sm:max-w-xl">
          {heroText.subText}
        </p>
        <Button label={heroText.button1} iconURL={icons.rightArrow} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {heroText.statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl max-sm:text-[36px] font-fascinate font-bold text-dark-gray">
                {stat.value}
              </p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
        <div className="flex gap-4 mt-5">
          {socialMediaLight.map((social) => (
            <SocialMediaIcons icon={social.icon} key={social.label} />
          ))}
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:h-[90vh] max-xl:py-40 bg-hero bg-cover bg-no-repeat bg-center rounded-b-full">
        <img src={bigShoeImg} alt="shoe collection" width={610} height={50} />
        <div className="flex sm:gap-6 gap-4 absolute bottom-[5%]">
          {shoes.map((shoe) => (
            <div key={shoe.thumbnail}>
              <ShoeCard
                {...shoe}
                changeBigShoeImage={(shoe) => {
                  setBigShoeImg(shoe);
                }}
                bigShoeImage={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
