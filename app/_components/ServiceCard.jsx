import React from "react";

const ServiceCard = ({ icon, label, description }) => {
  return (
    <div className="flex-1 sm:w-[3500px] w-full rounded-[20px] shadow-3xl px-10 py-16">
      <div className="p-4 bg-primary w-[55px] h-[55px] rounded-full flex items-center justify-center">
        <img src={icon} alt={label} className="w-10 h-10" />
      </div>
      <h3 className="mt-5 font-fascinate text-3xl leading-normal text-dark-gray">
        {label}
      </h3>
      <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
