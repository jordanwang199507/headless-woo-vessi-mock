"use client";
import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/navigation";
import { CheckoutContent } from "@/app/_sections";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function Checkout() {
  const [cartItems, setCartItems] = useState([]);
  const router = useRouter();

  useEffect(() => {
    // Retrieve cart from localStorage
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  }, []);

  const handleSuccess = () => {
    // Clear the cart after successful order
    localStorage.removeItem("cart");
    // Redirect to home page
    router.push("/thankyou");
  };

  const handleError = (error) => {
    alert(`Error creating order: ${error}`);
  };

  return (
    <CheckoutContent
      stripe={stripePromise}
      cartItems={cartItems}
      onSuccess={handleSuccess}
      onError={handleError}
    />
  );
}
