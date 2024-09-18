import React from "react";
import { blogContent, socialMediaLight } from "@/app/_constant";
import { Button, SocialMediaIcons } from "@/app/_components";
import Link from "next/link";

const BlogContent = ({ blogsPost, post }) => {
  const formatDate = (date) => {
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return formattedDate;
  };

  const mostRecentBlogs = blogsPost
    .slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .filter((blog) => blog.uri)
    .slice(0, 4); // set how many most recent blogs to show

  const mostRecentBlogOptions = mostRecentBlogs.map((blog) => ({
    label: blog.title,
    date: formatDate(blog.date),
    uri: blog.uri,
  }));
  return (
    <main className="relative pt-[88px]">
      <section className="padding-sm bg-dark-gray">
        <h3 className="font-fascinate text-center text-4xl text-white">
          The <span className="text-secondary">Forecast</span> Blog
        </h3>
        <p className="font-montserrat mt-4 m-auto text-slate-100 text-center leading-7 max-w-lg">
          {blogContent.subText}
        </p>
      </section>
      {/* blog content */}
      <section className="padding-sm">
        <div className="max-container flex max-lg:flex-col gap-16 max-md:gap-12">
          {/* blog */}
          <div className="flex-1">
            <h4 className="font-montserrat text-4xl max-md:text-[42px] max-sm:text-[32px] font-bold text-dark-gray">
              {post.title}
            </h4>
            <div
              dangerouslySetInnerHTML={{ __html: post.content }}
              className="wp-post-content mt-6" // Add a class for WordPress specific styling
            />
          </div>
          {/* sidbar */}
          <div className="flex-[0.3] flex flex-col gap-6">
            {/* newsletter subscribe */}
            <div>
              <h4 className="font-montserrat font-bold max-w-sm max-md:max-w-full text-md">
                Sign up for our
                <span className="text-primary"> newsletter</span> to follow
                <span className="text-primary"> The Forecast, </span>our
                <span className="text-primary"> new arrivals, </span>and
                exclusive <span className="text-primary">promotions.</span>
              </h4>
              <div className="w-full mt-4 flex items-center max-sm:flex-col p-2 max-sm:p-0 gap-5 sm:border sm:border-slate-gray rounded-full">
                <input
                  placeholder={blogContent.newsLetterInput.placeholder}
                  className="input-sm"
                  type="text"
                />
                <div className="flex max-sm:justify-end items-center max-sm:w-full">
                  <Button
                    label={blogContent.newsLetterInput.button}
                    textSize="sm"
                    pSize="sm"
                  />
                </div>
              </div>
            </div>
            {/* recent posts */}
            <div>
              <h4 className="font-montserrat font-bold text-md">
                Recent <span className="text-primary">Posts</span>
              </h4>
              <div className="flex flex-col gap-5 mt-4">
                {mostRecentBlogOptions.map((blog) => (
                  <Link
                    key={blog.label}
                    href={blog.uri}
                    className="cursor-pointer"
                  >
                    <h4 className="font-montserrat font-semibold text-sm ">
                      {blog.label}
                    </h4>
                    <p className="mt-1 font-montserrat text-slate-gray text-xs border-l-2 border-slate-gray pl-2">
                      {blog.date}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
            {/* social medias */}
            <div>
              <h4 className="font-montserrat font-bold text-md">
                Stay <span className="text-primary">Connected</span>
              </h4>
              <div className="flex gap-4 mt-3">
                {socialMediaLight.map((social) => (
                  <SocialMediaIcons icon={social.icon} key={social.label} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogContent;
