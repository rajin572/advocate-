import React from "react";
import Container from "../ui/Container";
import { AllBlogs } from "../../../public/assets/AllImages";
import BlogCard from "../ui/Blog/BlogCard";

const blogData = [
  {
    image: AllBlogs.blog1,
    date: "June 23; 2024",
    title:
      "Clinivea’s MVR helped Sarah find the right oncologist, coordinated her appointments, and explained every step of her treatment plan. ",
  },
  {
    image: AllBlogs.blog2,
    date: "June 23; 2024",
    title:
      "Clinivea’s MVR helped Sarah find the right oncologist, coordinated her appointments, and explained every step of her treatment plan. ",
  },
  {
    image: AllBlogs.blog1,
    date: "June 23; 2024",
    title:
      "Clinivea’s MVR helped Sarah find the right oncologist, coordinated her appointments, and explained every step of her treatment plan. ",
  },
  {
    image: AllBlogs.blog2,
    date: "June 23; 2024",
    title:
      "Clinivea’s MVR helped Sarah find the right oncologist, coordinated her appointments, and explained every step of her treatment plan. ",
  },
  {
    image: AllBlogs.blog1,
    date: "June 23; 2024",
    title:
      "Clinivea’s MVR helped Sarah find the right oncologist, coordinated her appointments, and explained every step of her treatment plan. ",
  },
  {
    image: AllBlogs.blog2,
    date: "June 23; 2024",
    title:
      "Clinivea’s MVR helped Sarah find the right oncologist, coordinated her appointments, and explained every step of her treatment plan. ",
  },
];

const Blog = () => {
  return (
    <div className="py-20 w-full">
      <div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-color text-center mb-5">
          New at Clinivea Blog
        </h1>
        <p className="xl:w-[70%] lg:w-[80%] sm:w-[90%] mx-auto text-lg sm:text-xl lg:text-2xl text-center text-base-color ">
          A collection of stories centered on our clients, the impact of
          <span className="font-skia"> MedicoVigilance™</span>, the expertise of
          our MVRs, and how we keep{" "}
          <span className="font-semibold">
            FOCUS IS
            <span className="font-skia"> YOU™</span>
          </span>{" "}
          at the heart of every healthcare journey. Explore real experiences,
          insights, and the transformative outcomes we achieve together.
        </p>
      </div>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-20">
          {blogData.map((item, index) => (
            <BlogCard key={index} item={item} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Blog;
