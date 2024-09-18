import React from "react";
import { customerReviewText } from "@/app/_constant";
import { ReviewCard } from "@/app/_components";

const CustomerReviews = () => {
  return (
    <section>
      <h3 className="font-fascinate text-center text-4xl text-dark-gray">
        What Our <span className="text-primary">Customer</span> Say?
      </h3>
      <p className="font-montserrat leading-7 m-auto mt-4 max-w-lg text-center text-slate-gray">
        {customerReviewText.subText}
      </p>
      <div className="mt-20 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {customerReviewText.reviews.map((review) => (
          <ReviewCard key={review.customerName} {...review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
