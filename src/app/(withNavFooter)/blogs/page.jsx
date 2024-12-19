import Blog from "@/components/Blog/Blog";
import RecentVlog from "@/components/RecentVlog/RecentVlog";
import React from "react";

export const metadata = {
  title: "Blogs",
};

const page = () => {
  return (
    <div>
      <Blog />
    </div>
  );
};

export default page;
