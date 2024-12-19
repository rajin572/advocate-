import AboutUsBanner from "@/components/AbouUs/AboutUsBanner";

import ContactUs from "@/components/ContactUs/ContactUs";

import WhyUs from "@/components/WhyUs/WhyUs";

import React from "react";

export const metadata = {
  title: "About Advocate",
};
const page = () => {
  return (
    <div className="min-h-screen mb-10 md:mb-16">
      <AboutUsBanner />
      <WhyUs />

      <ContactUs />
    </div>
  );
};

export default page;
