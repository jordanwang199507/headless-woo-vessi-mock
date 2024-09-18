import React from "react";
import icons from "@/public/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  const fullStars = rating;
  const darkStars = 5 - rating;
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imgURL}
        alt={customerName}
        className="object-cover rounded-full w-[100px] h-[100px]"
      />
      <h4 className="font-fascinate mt-1 text-2xl text-center text-dark-gray tracking-wide">
        {customerName}
      </h4>
      <p className="mt-4 max-w-sm text-center font-montserrat text-slate-gray">
        "{feedback}"
      </p>
      <div className="flex mt-6 gap-4">
        {Array.from({ length: fullStars }).map((_, index) => (
          <img
            key={`full-star-${index}`}
            src={icons.star}
            alt="Star"
            className="w-5 h-5"
          />
        ))}
        {Array.from({ length: darkStars }).map((_, index) => (
          <img
            key={`dark-star-${index}`}
            src={icons.starDark}
            alt="Star Dark"
            className="w-5 h-5"
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewCard;
