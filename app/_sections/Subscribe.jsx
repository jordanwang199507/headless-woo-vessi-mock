import React from "react";
import { subscribeText } from "@/app/_constant";
import { Button } from "@/app/_components";

const Subscribe = () => {
  return (
    <section
      id="newsletter"
      className="max-container flex justify-between items-center max-lg:flex-col gap-10"
    >
      <div className="flex flex-col flex-1">
        <h3 className="text-4xl font-fascinate text-dark-gray leading-[68px] lg:max-w-md">
          Sign Up For Our <span className="text-primary">Newsletter</span>
        </h3>
        <p className="mt-4 lg:max-w-lg max-lg:max-w-md font-montserrat text-slate-gray leading-7">
          {subscribeText.subText}
        </p>
      </div>

      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input
          placeholder={subscribeText.inputPlaceholder}
          className="input"
          type="text"
        />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label={subscribeText.button1} fullWidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
