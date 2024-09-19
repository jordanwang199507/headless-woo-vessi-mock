import React from "react";
import icons from "@/public/icons";

const CartItemCard = ({ item, index, handleRemoveItem, hideDelete, h, w }) => {
  const formatPrice = (price) => {
    return (parseFloat(price) || 0).toFixed(2);
  };

  return (
    <div className="flex gap-6 max-sm:flex-col">
      <div className="relative">
        <img
          src={item.product.images[0].src}
          alt={item.product.name}
          className={`${
            h ? `h-[${h}] max-md:h-[${h}]` : `h-[180px] max-md:h-[120px]`
          } ${
            w ? `w-[${w}] max-md:w-[${w}]` : `w-[180px] max-md:w-[120px]`
          } bg-productCard rounded-lg bg-cover bg-center`}
        />
        {item.product.sale_price && (
          <img
            src={icons.sale}
            className="absolute -top-5 -left-5 h-[50px] w-[50px]"
          />
        )}
      </div>
      <div className="flex-1 ">
        <div className="flex justify-between gap-4">
          <h5 className="font-montserrat font-bold text-lg text-dark-gray">
            {item.product.name}
          </h5>
          <p className="leading-normal text-dark-gray font-montserrat text-lg font-bold">
            ${formatPrice(item.product.price)}
          </p>
        </div>
        <p className="text-slate-gray font-montserrat font-normal mt-2">
          {item.product.categories.map((category) => category.name).join(", ")}
        </p>
        <div className="flex gap-8 mt-1 font-montserrat text-slate-gray">
          <p>
            Size: <span className="font-bold">{item.selectedSize}</span>
          </p>
          <p>
            Quantity: <span className="font-bold">{item.quantity}</span>
          </p>
        </div>
        <button
          onClick={() => handleRemoveItem(index)} // Pass the index to remove
          className={`rounded-full p-2 bg-primary-400 mt-6 max-md:mt-0 hover:bg-primary-200 ${
            hideDelete && "hidden"
          }`}
        >
          <img src={icons.delete} alt="delete button" className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default CartItemCard;
