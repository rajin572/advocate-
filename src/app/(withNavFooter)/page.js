import Navbar from "../../components/shared/Navbar";

import Footer from "../../components/shared/Footer";
import About from "@/components/Home/About";
import GetMvr from "@/components/Home/GetMvr";
import CliniveaPayComponent from "@/components/Home/CliniveaPayComponent";
import Testimonial from "@/components/Home/Testimonial";
import Banner from "@/components/Home/Banner";

import FAQ from "@/components/Home/FAQ";
import OurServices from "@/components/Home/OurServices";
import HowItWorkHome from "@/components/Home/HowItWorkHome";
import SubscriptionSection from "@/components/Home/SubscriptionSection";
import RecentVlog from "@/components/RecentVlog/RecentVlog";
import ContactUs from "@/components/ContactUs/ContactUs";
import Test from "@/components/ui/Test";
import WhyUs from "@/components/WhyUs/WhyUs";
import QualityAssurance from "@/components/WhyUs/QualityAssurance";
import ServicesPage from "@/components/Services/Services";

const HomePage = () => {
  return (
    <div className="">
      {/* <Test /> */}
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
