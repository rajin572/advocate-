import AboutUsBanner from "@/components/AbouUs/AboutUsBanner";
import OurApproach from "@/components/AbouUs/OurApproach";
import OurValues from "@/components/AbouUs/OurValues";
import ContactUs from "@/components/ContactUs/ContactUs";
import Container from "@/components/ui/Container";
import { Divider } from "antd";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen mb-10 md:mb-16">
      <AboutUsBanner />
      <OurApproach />
      <OurValues />

      <ContactUs />
    </div>
  );
};

export default page;
