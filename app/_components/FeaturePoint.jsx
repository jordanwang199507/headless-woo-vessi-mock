import React from "react";

const FeaturePoint = ({ icon, label, description }) => {
  return (
    <div className="flex gap-8">
      <div className="p-4 bg-primary w-[75px] h-[75px] max-md:w-[50px] max-md:h-[50px] rounded-full flex items-center justify-center">
        <img src={icon} alt={icon} className="w-12 h-12" />
      </div>
      <div className="flex flex-col gap-2 flex-1">
        <h4 className="font-fascinate text-2xl text-dark-gray tracking-wide">
          {label}
        </h4>
        <p className="font-montserrat text-slate-gray max-w-lg leading-normal">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeaturePoint;
