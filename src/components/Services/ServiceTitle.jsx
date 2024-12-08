"use client";
import AnimatedUnderline from "../ui/AnimatedUnderline";

const ServiceTitle = () => {
  return (
    <div className="mb-14 sm:mb-16 lg:mb-20">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[45px] font-semibold text-secondary-color mb-2 text-center">
        Our Services
      </h1>
      <AnimatedUnderline className="mx-auto" />
    </div>
  );
};

export default ServiceTitle;
