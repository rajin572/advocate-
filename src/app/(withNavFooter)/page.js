import Testimonial from "@/components/Home/Testimonial";
import Banner from "@/components/Home/Banner";

import FAQ from "@/components/Home/FAQ";

import RecentVlog from "@/components/RecentVlog/RecentVlog";
import ContactUs from "@/components/ContactUs/ContactUs";

import WhyUs from "@/components/WhyUs/WhyUs";

import ServicesPage from "@/components/Services/Services";

const HomePage = () => {
  return (
    <div className="">
      <Banner />
      <WhyUs />
      <ServicesPage />
      <Testimonial />
      <RecentVlog />
      <FAQ />
      <ContactUs />
    </div>
  );
};

export default HomePage;
