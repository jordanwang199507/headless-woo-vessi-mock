"use client";
import { useState } from "react";
import {
  Elements,
  CardElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
const CheckoutForm = ({ cartItems, onSuccess, onError }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    province: "",
    postalCode: "",
    country: "",
    cardNumber: "",
    expMonth: "",
    expYear: "",
    cvc: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return; // Stripe.js has not loaded yet
    }

    setIsProcessingPayment(true);

    // Simple form validation
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone ||
      !formData.address ||
      !formData.city ||
      !formData.province ||
      !formData.postalCode ||
      !formData.country
    ) {
      onError("Please fill in all the fields.");
      setIsProcessingPayment(false);
      return;
    }

    try {
      // Create a payment method with Stripe using manual card inputs
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement),
        billing_details: {
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          address: {
            line1: formData.address,
            city: formData.city,
            state: formData.province,
            postal_code: formData.postalCode,
            country: formData.country,
          },
        },
      });

      if (error) {
        throw new Error(error.message);
      }

      // Send the payment details and order to your server
      const response = await fetch("/api/createWooOrder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cartItems,
          paymentMethodId: paymentMethod.id,
          customerInfo: formData, // Send customer info with the order
        }),
      });

      const result = await response.json();

      if (result.success) {
        onSuccess();
      } else {
        throw new Error(result.error || "Payment failed");
      }
    } catch (error) {
      onError(error.message);
    } finally {
      setIsProcessingPayment(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <h4 className="font-montserrat font-bold text-lg">
        Enter your name and address:
      </h4>
      <div className="flex flex-col">
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
          placeholder="First Name"
          className="border border-dark-gray py-2 px-3 mt-4 font-montserrat w-full"
        />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
          placeholder="Last Name"
          className="border border-dark-gray py-2 px-3 mt-3 font-montserrat w-full"
        />
      </div>

      <h4 className="font-montserrat font-bold text-lg mt-4">
        What's your contact information?
      </h4>
      <div className="flex flex-col">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="example@vessi.com"
          className="border border-dark-gray py-2 px-3 mt-4 font-montserrat w-full"
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          placeholder="Phone Number"
          className="border border-dark-gray py-2 px-3 mt-3 font-montserrat w-full"
        />
      </div>

      <h4 className="font-montserrat font-bold text-lg mt-4">Billing</h4>
      <div className="flex flex-col">
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
          required
          placeholder="Country"
          className="border border-dark-gray py-2 px-3 mt-4 font-montserrat w-full"
        />
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
          placeholder="Address"
          className="border border-dark-gray py-2 px-3 mt-3 font-montserrat w-full"
        />
        <div className="flex flex-wrap gap-4 mt-3">
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
            placeholder="City"
            className="border border-dark-gray py-2 px-3 flex-1 font-montserrat w-full sm:w-auto"
          />
          <input
            type="text"
            name="province"
            value={formData.province}
            onChange={handleChange}
            required
            placeholder="Province"
            className="border border-dark-gray py-2 px-3 flex-1 font-montserrat w-full sm:w-auto"
          />
          <input
            type="text"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            required
            placeholder="Postal Code"
            className="border border-dark-gray py-2 px-3 flex-1 font-montserrat w-full sm:w-auto"
          />
        </div>
      </div>

      <h4 className="font-montserrat font-bold text-lg mt-4">
        Enter your payment details:
      </h4>
      <div className="mt-4">
        <CardElement />
      </div>

      <button
        className="font-montserrat  leading-none  rounded-full bg-primary text-white border-primary btn-padding-md w-full text-lg mt-6"
        type="submit"
        disabled={!stripe || isProcessingPayment}
      >
        {isProcessingPayment ? "Processing Payment..." : "Place Order"}
      </button>
    </form>
  );
};

export default CheckoutForm;
