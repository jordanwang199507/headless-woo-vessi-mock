import React from "react";
import icons from "@/public/icons";
import Link from "next/link";

const PopularProductCard = ({ product }) => {
  // Round up the average rating
  const rating = Math.ceil(product.average_rating);
  const fullStars = rating;
  const darkStars = 5 - rating;

  const formatPrice = (price) => {
    return (parseFloat(price) || 0).toFixed(2);
  };

  return (
    <Link
      href={`/product/${product.id}`}
      className="flex flex-1 flex-col items-start w-full max-sm:w-full cursor-pointer"
    >
      {/* product image */}
      <div className="relative flex items-center justify-center w-full bg-productCard bg-contain bg-no-repeat bg-center">
        <img src={product.images[0].src} alt={product.name} />
        {product.sale_price && (
          <img src={icons.sale} className="absolute -top-5 -left-5" />
        )}
      </div>

      {/* product ratings */}
      <div className="flex mt-8 gap-4">
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
      {/* product name */}
      <h3 className="mt-4 uppercase text-xl leading-normal font-bold font-montserrat text-dark-gray tracking-wide">
        {product.name}
      </h3>
      {/* product price */}
      {product.sale_price ? (
        <div className="flex gap-2 items-center">
          <p className="leading-normal text-primary font-montserrat line-through text-xl">
            ${formatPrice(product.regular_price)}
          </p>
          <p className="leading-normal text-primary font-montserrat font-semibold text-xl">
            ${formatPrice(product.sale_price)}
          </p>
        </div>
      ) : (
        <p className="leading-normal text-primary font-montserrat text-xl">
          ${formatPrice(product.regular_price)}
        </p>
      )}
    </Link>
  );
};

export default PopularProductCard;
