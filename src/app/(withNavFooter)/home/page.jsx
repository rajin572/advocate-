import ContactUs from "@/components/ContactUs/ContactUs";

import Banner from "@/components/Home/Banner";

import FAQ from "@/components/Home/FAQ";

import HowItWorkHome from "@/components/Home/HowItWorkHome";

import OurServices from "@/components/Home/OurServices";
import SubscriptionSection from "@/components/Home/SubscriptionSection";

import Testimonial from "@/components/Home/Testimonial";
import RecentVlog from "@/components/RecentVlog/RecentVlog";
import React from "react";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <OurServices />
      <HowItWorkHome />
      <SubscriptionSection />
      <Testimonial />
      <RecentVlog />
      <ContactUs />
      <FAQ />
    </div>
  );
}
