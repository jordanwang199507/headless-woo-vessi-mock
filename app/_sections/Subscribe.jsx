"use client";
import React, { useState } from "react";
import axios from "axios";
import { subscribeText } from "@/app/_constant";
import { Button } from "@/app/_components";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubscribe = async () => {
    if (!email) {
      setError("Email is required");
      return;
    }

    // Validate email format
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setError(""); // Clear previous errors
    // Check if environment variables are loaded correctly
    if (
      !process.env.NEXT_PUBLIC_NEWSLETTER_KEY ||
      !process.env.NEXT_PUBLIC_NEWSLETTER_SECRET
    ) {
      console.error("API key or secret is missing");
      setError("API key or secret is missing");
      return;
    }

    try {
      const response = await axios.post(
        "https://lightblue-magpie-945165.hostingersite.com/wp-json/newsletter/v2/subscribers",
        {
          email: email,
          status: "subscribed",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Basic ${btoa(
              `${process.env.NEXT_PUBLIC_NEWSLETTER_KEY}:${process.env.NEXT_PUBLIC_NEWSLETTER_SECRET}`
            )}`,
          },
        }
      );
      console.log(response.status);
      if (response.status === 200 || response.status === 201) {
        setSuccess("Subscription successful!");
        setEmail(""); // Clear input field
      }
    } catch (error) {
      console.error("Error details:", error.response); // Log detailed error for debugging
      setError(
        error.response?.data?.message ||
          "Subscription failed. Please try again."
      );
    }
  };

  return (
    <section
      id="newsletter"
      className="max-container flex justify-between items-center max-lg:flex-col gap-10"
    >
      <div className="flex flex-col flex-1">
        <h3 className="text-4xl font-fascinate text-dark-gray leading-[68px] lg:max-w-md">
          Sign Up For Our <span className="text-primary">Newsletter</span>
        </h3>
        <p className="mt-4 lg:max-w-lg max-lg:max-w-md font-montserrat text-slate-gray leading-7">
          {subscribeText.subText}
        </p>
        {error && <p className="text-red-500 font-montserrat mt-4">{error}</p>}
        {!error && success && (
          <p className="text-green-500 font-montserrat mt-4">{success}</p>
        )}
      </div>

      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input
          placeholder={subscribeText.inputPlaceholder}
          className="input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button
            label={subscribeText.button1}
            fullWidth
            onClick={handleSubscribe}
          />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
