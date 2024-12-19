"use client";
import React, { use, useEffect, useState } from "react";
import Container from "../ui/Container";
import Image from "next/image";
import { BlogData } from "../../../public/data/BlogData";

const BlogDetails = ({ id }) => {
  const [data, setData] = useState(null);

  const blogs = BlogData;

  useEffect(() => {
    console.log("id:", id);
    console.log("BlogData:", blogs);
    const foundItem = blogs.find((item) => item.id === parseInt(id, 10));
    console.log("Found Item:", foundItem);
    setData(foundItem);
  }, [id]);
  return (
    <div className="py-20 mb-10">
      <Container>
        {data ? (
          <div>
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-color text-center mb-10">
                {data.title}
              </h1>
            </div>
            <div className="">
              <Image
                src={data.image}
                alt="blog_img"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full md:w-[90%] lg:w-full md:mx-auto max-h-[600px] rounded-lg object-cover"
              />
              <div className="flex items-center text-base-color text-xl my-10">
                {/* <GoClock className="mr-2 text-secondary-color size-5" /> */}
                <span>{data?.description}</span>
              </div>
              <div>{data.details}</div>
            </div>
          </div>
        ) : null}
      </Container>
    </div>
  );
};

export default BlogDetails;
