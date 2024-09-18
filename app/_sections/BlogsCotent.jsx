"use client";
import React, { useState } from "react";
import { blogContent, socialMediaLight } from "@/app/_constant";
import { BlogPostCard, Button, SocialMediaIcons } from "@/app/_components";
import images from "@/public/images";
import Link from "next/link";

const BlogsCotent = ({ blogsPost }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4); // Number of posts per page
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState(""); // Add search state
  const [tempSearchQuery, setTempSearchQuery] = useState(""); // Temporary state to hold input value

  const categories = [
    "ALL",
    ...new Set(
      blogsPost.flatMap((post) => post.categories?.map((cat) => cat.name) || [])
    ),
  ];

  const formatDate = (date) => {
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return formattedDate;
  };

  // Search logic (search by content, title, date, category, or author)
  const searchFilter = (post) => {
    const query = searchQuery.toLowerCase();
    return (
      post.title.toLowerCase().includes(query) ||
      post.categories?.some((cat) => cat.name.toLowerCase().includes(query))
    );
  };

  // Filter posts by selected category
  const filteredPosts = blogsPost
    .filter((post) =>
      selectedCategory === "ALL"
        ? true
        : post.categories?.some((cat) => cat.name === selectedCategory)
    )
    .filter((post) => searchFilter(post));

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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

  const handleSearchSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    setSearchQuery(tempSearchQuery); // Update actual search query
    setCurrentPage(1); // Reset to the first page
  };
  return (
    <main className="relative pt-[88px]">
      {/* blogHeader */}
      <section className="padding-sm bg-dark-gray">
        <h3 className="font-fascinate text-center text-4xl text-white">
          The <span className="text-secondary">Forecast</span> Blog
        </h3>
        <p className="font-montserrat mt-4 m-auto text-slate-100 text-center leading-7 max-w-lg">
          {blogContent.subText}
        </p>
      </section>
      {/* blogBanner */}
      <section className=" w-full min-h-min sm:py-28 py-12 padding-x mt-2 bg-banner bg-cover bg-center">
        <div className="max-container">
          <p className="font-montserrat text-dark-gray font-normal">
            {blogContent.bannerHash}
          </p>
          <h3 className="mt-6 font-fascinate text-4xl max-lg:text-[42px] max-sm:text-[36px]">
            The Best Boots <br />
            That Will Keep Your <br /> Feet
            <span className="text-primary uppercase"> Dry</span>
          </h3>
        </div>
      </section>
      <section className=" padding-sm">
        <div className="max-container flex max-lg:flex-col gap-16 max-md:gap-12">
          {/* blogsCollection */}
          <div className="flex-1">
            {/* blogsCategoryFilter */}
            <div className="flex gap-20 max-sm:gap-0 justify-center max-sm:justify-between items-center font-montserrat font-bold text-dark-gray">
              {categories.map((category) => (
                <button
                  className={`uppercase ${
                    selectedCategory === category ? "text-primary" : ""
                  }`}
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setCurrentPage(1);
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
            {/* blogs */}
            <div className="grid grid-cols-2 max-md:grid-cols-1 gap-10 mt-10">
              {currentPosts.map((blogPost) => (
                <BlogPostCard blogPost={blogPost} key={blogPost.title} />
              ))}
            </div>
            {/* pagination */}
            <div className="flex justify-center gap-4 mt-10">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  className={`p-2 ${
                    currentPage === index + 1 ? "text-primary" : "text-gray-600"
                  }`}
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
          {/* sidebar */}
          <div className="flex-[0.3] flex flex-col gap-6">
            <div className="flex gap-6 justify-between flex-col max-lg:flex-row max-md:flex-col">
              {/* searchBar */}
              <div className="flex-1">
                <h4 className="font-montserrat font-bold max-w-36 max-md:max-w-sm text-md">
                  Seek <span className="text-primary">Adventure. </span>
                  <span className="text-primary">Innovate. </span>
                  Live Your <span className="text-primary">Best Life.</span>
                </h4>
                <form
                  onSubmit={handleSearchSubmit}
                  className="w-full mt-4 flex items-center max-sm:flex-col p-2 max-sm:p-0 gap-5 sm:border sm:border-slate-gray rounded-full"
                >
                  <input
                    placeholder={blogContent.searchInput.placeholder}
                    className="input-sm"
                    type="text"
                    value={tempSearchQuery}
                    onChange={(e) => setTempSearchQuery(e.target.value)}
                  />
                  <div className="flex max-sm:justify-end items-center max-sm:w-full">
                    <Button
                      label={blogContent.searchInput.button}
                      textSize="sm"
                      pSize="sm"
                      type="submit" // Submit the form when clicked
                    />
                  </div>
                </form>
              </div>
              {/* newsletter subscribe */}
              <div className="flex-1">
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

export default BlogsCotent;
