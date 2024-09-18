import React from "react";

const ShoeCard = ({ thumbnail, bigShoe, changeBigShoeImage, bigShoeImage }) => {
  const handleClick = () => {
    if (bigShoeImage !== bigShoe) {
      changeBigShoeImage(bigShoe);
    }
  };
  return (
    <div
      className={`border-4 rounded-full ${
        bigShoeImage === bigShoe ? "border-primary" : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={thumbnail}
          alt={`shoe colletion ${thumbnail}`}
          width={127}
          height={103}
        />
      </div>
    </div>
  );
};

export default ShoeCard;
