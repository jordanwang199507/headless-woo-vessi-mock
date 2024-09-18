import React from "react";
import { shopContent } from "@/app/_constant";
import images from "@/public/images";
import { Button, ProductCard } from "@/app/_components";

const ShopContent = ({ products }) => {
  return (
    <main className="relative ">
      {/* shop banner */}
      <section className="xl:padding-l wide:padding-r padding-x">
        <div className="max-container">
          <div className="w-full py-32 bg-shop bg-contain max-sm:bg-cover bg-no-repeat bg-right-top max-sm:bg-center">
            <div className="max-md:glassmorphism max-w-fit py-5">
              <p className="text-xl font-montserrat font-bold text-primary">
                {shopContent.slogan}
              </p>
              <h3 className="text-4xl max-md:text-[38px] mt-6 font-fascinate max-w-xl">
                Our <span className="text-primary">Waterproof</span> Shoes
                Collection
              </h3>
              <p className="text-slate-gray font-montserrat text-lg leading-8 mt-4">
                {shopContent.subText}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* shop content */}
      <section className="xl:padding-l wide:padding-r padding-x padding-b">
        <div className="max-container">
          {/* shop title */}
          <div className="flex gap-6 items-center max-md:my-4 mb-4">
            <Button
              label={shopContent.filterButton.label}
              iconURL={shopContent.filterButton.icon}
              textSize="sm"
              pSize="sm"
            />
            <h4 className="font-fascinate text-2xl">Best Sellers</h4>
          </div>
          {/* shop catalog */}
          <div className="mt-8 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-10 justify-items-center gap-14">
            {products.map((product) => (
              <ProductCard product={product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ShopContent;
