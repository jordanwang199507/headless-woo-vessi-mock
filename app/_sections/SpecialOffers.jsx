import React from "react";
import images from "@/public/images";
import icons from "@/public/icons";
import { specialOfferText } from "@/app/_constant";
import { Button } from "@/app/_components";

const SpecialOffers = () => {
  return (
    <section className="flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={images.offer} alt="discount image" width={580} height={510} />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-fascinate text-4xl text-dark-gray xl:max-w-lg">
          Best <span className="text-primary">Waterproof</span> Shoes
        </h2>
        <p className="mt-6 xl:max-w-lg font-montserrat text-slate-gray leading-normal">
          {specialOfferText.subText}
        </p>
        <div className="flex flex-wrap gap-4 mt-11">
          <Button label={specialOfferText.button1} iconURL={icons.rightArrow} />
          <Button
            label={specialOfferText.button2}
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
