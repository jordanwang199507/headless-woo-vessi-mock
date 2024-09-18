"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CartItemCard, Button } from "@/app/_components";
import { bcTax } from "@/app/_constant";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const router = useRouter();

  useEffect(() => {
    // Retrieve cart from localStorage
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  }, []);

  const handleRemoveItem = (indexToRemove) => {
    // Filter out the item by index and update cartItems
    const updatedCartItems = cartItems.filter(
      (_, index) => index !== indexToRemove
    );

    // Update state and localStorage
    setCartItems(updatedCartItems);
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
  };

  const handleProceedToCheckout = () => {
    // Navigate to the checkout page
    console.log("clicked");
    // router.push("/checkout");
  };

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
    <main>
      {/* cart */}
      <section className="padding">
        <div className="max-container mt-10">
          <div className="flex gap-12 max-lg:flex-col">
            <div className="w-2/3 max-lg:w-full">
              <h3 className="font-bold font-montserrat text-3xl text-dark-gray">
                Your Cart
              </h3>
              {cartItems.length === 0 ? (
                <p className="min-h-[50vh] padding text-4xl font-fascinate text-primary uppercase">
                  Your cart is empty.
                </p>
              ) : (
                <div className="mt-6 flex flex-col gap-6 ">
                  {cartItems.map((item, index) => (
                    <CartItemCard
                      key={index}
                      item={item}
                      index={index}
                      handleRemoveItem={handleRemoveItem}
                    />
                  ))}
                </div>
              )}
            </div>
            {/* summary */}
            {cartItems.length !== 0 && (
              <div className="flex-1 ">
                <h3 className="font-bold font-montserrat text-3xl text-dark-gray">
                  Summary
                </h3>
                <div className="flex justify-between items-center font-montserrat font-medium mt-6">
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
                <div className="mt-12">
                  <Button
                    onClick={handleProceedToCheckout}
                    label="Proceed to Checkout"
                    fullWidth
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <section></section>
    </main>
  );
}
