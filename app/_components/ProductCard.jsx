import React from "react";
import Link from "next/link";

const ProductCard = ({ product }) => {
  //   console.log(product);
  const formatPrice = (price) => {
    return (parseFloat(price) || 0).toFixed(2);
  };
  return (
    <Link href={`/product/${product.id}`}>
      <img
        src={product.images[0].src}
        alt={product.name}
        className="bg-productCard bg-cover bg-center rounded-xl"
      />
      <h5 className="font-montserrat font-bold text-lg mt-6 text-dark-gray">
        {product.name}
      </h5>
      <p className="font-montserrat mt-2 font-normal text-dark-gray">
        {product.categories.map((category) => category.name).join(", ")}
      </p>

      {product.sale_price ? (
        <div className="flex gap-2 items-center mt-2">
          <p className="leading-normal text-primary font-montserrat line-through text-xl">
            ${formatPrice(product.regular_price)}
          </p>
          <p className="leading-normal text-primary font-montserrat font-bold text-xl">
            ${formatPrice(product.sale_price)}
          </p>
        </div>
      ) : (
        <p className="leading-normal text-primary font-montserrat text-xl mt-2">
          ${formatPrice(product.regular_price)}
        </p>
      )}
    </Link>
  );
};

export default ProductCard;
