import React from "react";
import { Button } from ".";
import icons from "@/public/icons";
import { blogContent } from "@/app/_constant";
import Link from "next/link";

const BlogPostCard = ({ blogPost }) => {
  const formattedDate = new Date(blogPost.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link href={blogPost.uri}>
      <div className="bg-blogCard bg-cover bg-center rounded-xl">
        <img src={blogPost.featuredImage.sourceUrl} alt={blogPost.title} />
      </div>
      <p className="mt-4 font-montserrat text-slate-gray text-sm border-l-2 border-slate-gray pl-2">
        {formattedDate}
      </p>
      <h4 className="font-montserrat font-bold text-l mt-2">
        {blogPost.title}
      </h4>
      <div className="mt-4">
        <Button
          label={blogContent.blogPostCardButton}
          backgroundColor="bg-white"
          borderColor="border-slate-gray"
          textColor="text-slate-gray"
          iconURL={icons.rightArrowGray}
          textSize="sm"
          pSize="sm"
        />
      </div>
    </Link>
  );
};

export default BlogPostCard;
