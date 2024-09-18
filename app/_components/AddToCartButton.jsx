"use client";
import { useState } from "react";

export default function AddToCartButton({
  productId,
  product,
  selectedSize,
  fullWidth,
  backgroundColor,
  borderColor,
  textColor,
  textSize,
  pSize,
  checkSizeError,
  showSizeError,
}) {
  const [isAdded, setIsAdded] = useState(false);
  const paddingClass = pSize === "sm" ? "btn-padding-sm" : "btn-padding-md";

  const handleAddToCart = async () => {
    if (!selectedSize) {
      checkSizeError(true);
      return;
    } // Prevent adding to cart if no size is selected
    try {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const existingProduct = cart.find((item) => item.id === productId);

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        cart.push({
          id: productId,
          quantity: 1,
          product: product,
          selectedSize: selectedSize,
        });
      }

      localStorage.setItem("cart", JSON.stringify(cart));
      alert(`Product ${productId} added to cart!`);
      setIsAdded(true);
    } catch (error) {
      console.error("Failed to add product to cart:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <button
      onClick={!isAdded ? handleAddToCart : null} // Disable click if size is not selected or already added
      disabled={isAdded} // Disable button when needed
      className={`flex justify-center items-center gap-2 border font-montserrat  leading-none  rounded-full ${
        backgroundColor
          ? `${backgroundColor} ${borderColor} ${textColor}`
          : "bg-primary text-white border-primary"
      } ${fullWidth && "w-full"} ${
        textSize ? `text-${textSize}` : `text-lg`
      } ${paddingClass}`}
    >
      {!showSizeError
        ? isAdded
          ? "Added to Cart"
          : "Add to Cart"
        : "Please select a size"}
    </button>
  );
}
