"use client";
import React, { useState } from "react";
import { productContent } from "@/app/_constant";
import { AddToCartButton } from "@/app/_components";
import icons from "@/public/icons";
import images from "@/public/images";

const ProductContent = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [showSizeError, setShowSizeError] = useState(false); // State to handle error message visibility
  const rating = 4;
  const fullStars = rating;
  const darkStars = 5 - rating;

  const formatPrice = (price) => (parseFloat(price) || 0).toFixed(2);

  const handleSizeSelection = (size) => {
    setSelectedSize(size);
    setShowSizeError(false); // Hide error when a size is selected
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      setShowSizeError(true); // Show error if no size selected
      return;
    }
    setShowSizeError(false); // Hide the error once a size is selected
  };

  return (
    <main className="relative pt-[88px]">
      {/* product banner */}
      <section className="padding-sm bg-primary-200">
        <div className="max-container relative">
          <h4 className="text-center font-fascinate text-3xl font-bold">
            {productContent.title}
          </h4>
          <img
            src={images.productBannerBackground}
            alt=""
            className="absolute h-[250px] w-[250px] -top-16 -right-20 max-sm:hidden"
          />
        </div>
      </section>
      {/* product */}
      <section className="padding">
        <div className="max-container flex gap-4 max-lg:flex-col">
          {/* images */}
          <div className="flex-1 flex gap-4 max-sm:flex-col-reverse">
            {/* Thumbnails Section */}
            <div className="flex-[0.2] flex flex-col max-sm:flex-row items-center gap-4 flex-wrap">
              {product.images.slice(1).map((image) => (
                <img
                  key={image.id}
                  src={image.src}
                  alt={image.alt || `Thumbnail image ${image.id}`}
                  className="max-sm:flex-1 h-20 w-20 object-cover rounded-lg bg-productCard bg-cover bg-no-repeat bg-center"
                />
              ))}
            </div>

            {/* Main Image Section */}
            <div className="flex-1 flex max-md:items-center max-md:justify-center">
              <img
                src={product.images[0].src}
                alt={
                  product.images[0].alt || `Main image ${product.images[0].id}`
                }
                className="h-[470px] w-[470px] max-sm:h-auto max-sm:w-full object-contain bg-productCard bg-cover bg-no-repeat rounded-2xl bg-center"
              />
            </div>
          </div>
          {/* product info */}
          <div className="flex-1 max-xl:flex-[0.7] max-lg:mt-8">
            <p className="uppercase font-montserrat font-medium text-primary text-lg">
              {productContent.slogan}
            </p>
            <h3 className="text-[36px] font-montserrat font-bold">
              {product.name}
            </h3>
            {/* product ratings */}
            <div className="flex mt-4 gap-4">
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
            {/* product price */}
            {product.sale_price ? (
              <div className="flex gap-2 items-center mt-6">
                <p className="leading-normal text-primary font-montserrat line-through text-2xl">
                  ${formatPrice(product.regular_price)}
                </p>
                <p className="leading-normal text-primary font-montserrat font-bold text-2xl">
                  ${formatPrice(product.sale_price)}
                </p>
              </div>
            ) : (
              <p className="leading-normal text-primary font-montserrat text-2xl mt-2">
                ${formatPrice(product.regular_price)}
              </p>
            )}
            {/* product description */}
            <div
              dangerouslySetInnerHTML={{ __html: product.description }}
              className="wp-post-content mt-6" // Add a class for WordPress specific styling
            />

            {/* product size */}
            <h4 className="text-xl font-montserrat font-bold mt-6">
              {productContent.subTitle}
            </h4>
            <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-3 gap-4">
              {productContent.shoeSizes.map((size) => {
                const attributeExists = product.attributes.some(
                  (attr) => attr.name === size
                );
                if (attributeExists) {
                  return (
                    <div
                      key={size}
                      onClick={() => handleSizeSelection(size)} // Handle size selection
                      className={`mt-4 rounded-lg font-montserrat text-md text-dark-gray py-3 border border-dark-gray text-center cursor-pointer ${
                        selectedSize === size
                          ? "bg-primary text-white font-bold border-primary"
                          : ""
                      }`}
                    >
                      {size}
                    </div>
                  );
                } else {
                  return (
                    <div
                      key={size}
                      className={`mt-4 rounded-lg font-montserrat text-md text-pale-blue py-3 border border-pale-blue text-center`}
                    >
                      {size}
                    </div>
                  );
                }
              })}
            </div>

            {/* Add to Cart Button */}
            <div className="mt-6 max-md:w-full w-1/3">
              <AddToCartButton
                label={productContent.button.label}
                fullWidth
                productId={product.id}
                product={product}
                selectedSize={selectedSize} // Pass selected size
                checkSizeError={setShowSizeError}
                showSizeError={showSizeError}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductContent;
