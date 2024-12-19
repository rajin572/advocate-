import React from "react";
import Container from "../ui/Container";
import { AllBlogs } from "../../../public/assets/AllImages";
import BlogCard from "../ui/Blog/BlogCard";
import { BlogData } from "../../../public/data/BlogData";

const Blog = () => {
  return (
    <div className="py-20 w-full">
      <div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-color text-center mb-5">
          Explore Advocate Blog
        </h1>
        <p className="xl:w-[70%] lg:w-[80%] sm:w-[90%] mx-auto text-lg sm:text-xl lg:text-2xl text-center text-base-color">
          Discover stories that highlight our commitment to compassionate care,
          the expertise of our caregivers, and how we prioritize{" "}
          <span className="font-semibold">YOUR WELLBEING</span> in every
          journey. Dive into inspiring client experiences, insightful tips, and
          the positive impact we create together.
        </p>
      </div>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-20">
          {BlogData.map((item, index) => (
            <BlogCard key={index} item={item} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Blog;
