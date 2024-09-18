import React from "react";
import { PopularProductCard } from "@/app/_components";
import { popularProductText } from "@/app/_constant";

const PopularProducts = ({ popularProducts }) => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div>
        <h2 className="text-4xl text-dark-gray font-fascinate font-bold">
          Our <span className="text-primary">Waterproof</span> Shoes
        </h2>
        <p className="lg:max-w-xl mt-4 font-montserrat text-slate-gray">
          {popularProductText.subText}
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {popularProducts.map((product) => (
          <PopularProductCard product={product} key={product.name} />
        ))}
      </div>
      {/* {popularProducts.length > 0 ? (
        popularProducts.map((product) => (
          <div key={product.id}>
            {product.images && product.images.length > 0 ? (
              <img
                src={product.images[0].src}
                alt={product.name}
                style={{ width: "150px", height: "150px" }}
              />
            ) : (
              <p>No Image Available</p>
            )}
            <h3>{product.name}</h3>
          </div>
        ))
      ) : (
        <p>No popular products available</p>
      )} */}
    </section>
  );
};

export default PopularProducts;
