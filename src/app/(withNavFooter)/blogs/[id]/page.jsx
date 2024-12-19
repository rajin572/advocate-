import BlogDetails from "@/components/BlogDetails/BlogDetails";
import React from "react";
import { BlogData } from "../../../../../public/data/BlogData";

const page = ({ params }) => {
  const id = params.id;

  return (
    <div>
      <BlogDetails id={id} />
    </div>
  );
};

export default page;
