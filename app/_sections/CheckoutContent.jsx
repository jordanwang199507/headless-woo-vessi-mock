"use client";
import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { CheckoutForm, CartItemCard } from "@/app/_components";
import { bcTax } from "@/app/_constant";

const CheckoutContent = ({ stripe, cartItems, onSuccess, onError }) => {
  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => {
      return total + item.quantity * parseFloat(item.product.price || 0);
    }, 0); // Start with 0 as the initial value
  };
  const calculateTax = () => {
    return calculateSubtotal() * bcTax;
  };
  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax();
  };
  const formatPrice = (price) => {
    return (parseFloat(price) || 0).toFixed(2);
  };
  return (
    <main className="relative pt-[88px]">
      <section className="padding-sm bg-dark-gray">
        <h3 className="font-fascinate text-center text-4xl text-white">
          Checkout
        </h3>
      </section>
      <section className="padding">
        <div className="max-container flex gap-6 max-lg:flex-col">
          <div className="flex-1 min-w-min">
            <Elements stripe={stripe}>
              <CheckoutForm
                cartItems={cartItems}
                onSuccess={onSuccess}
                onError={onError}
              />
            </Elements>
          </div>

          <div className="flex-1 min-w-max">
            <h2 className="font-montserrat font-bold text-lg">Order Summary</h2>
            <div className="mt-6">
              {cartItems.map((item, index) => (
                <CartItemCard
                  key={index}
                  item={item}
                  index={index}
                  hideDelete
                  h="100px"
                  w="100px"
                />
              ))}
            </div>
            <div>
              <div className="flex justify-between items-center font-montserrat font-medium mt-4">
                <p>Subtotal</p>
                <p>${formatPrice(calculateSubtotal())}</p>
              </div>
              <div className="flex justify-between items-center font-montserrat font-medium mt-4">
                <p>Tax</p>
                <p>${formatPrice(calculateTax())}</p>
              </div>
              <hr className="mt-4" />
              <div className="flex justify-between items-center font-montserrat font-medium mt-6">
                <p className="uppercase text-lg">Total</p>
                <p className="text-lg">${formatPrice(calculateTotal())}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CheckoutContent;
