"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { allIcons } from "../../../public/assets/AllImages";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { motion, useInView } from "framer-motion";
import AnimatedUnderline from "../ui/AnimatedUnderline";

const OurServicesData = [
  {
    icon: allIcons.quality,
    title: "Quality",
    description:
      "We deliver the highest standard of care, ensuring every client receives reliable, consistent services tailored to their unique needs, enhancing their quality of life and providing peace of mind.",
  },
  {
    icon: allIcons.honesty,
    title: "Honesty",
    description:
      "We foster trust through transparency and integrity, keeping clients and their families informed at every stage of care for a confident, open relationship.",
  },
  {
    icon: allIcons.improvement,
    title: "Continuous Improvement",
    description:
      "We continually evolve to meet our clients’ needs, integrating the latest care technologies, gathering feedback, and ensuring our services remain effective and relevant.",
  },
  {
    icon: allIcons.kindness,
    title: "Kindness",
    description:
      "Our caregivers treat every client with empathy, offering compassionate care that goes beyond physical needs, nurturing emotional well-being and comfort.",
  },
  {
    icon: allIcons.respect,
    title: "Respect",
    description:
      "We honor each client's dignity, preferences, and diversity, ensuring care is personalized and delivered with consideration for individual choices and needs.",
  },
];

const OurValues = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div ref={ref} className="overflow-hidden">
      <div>
        <div className=" mb-5">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[45px] font-semibold text-secondary-color mt-14 sm:mt-16 lg:mt-20 mb-2 text-center">
            Our values
          </h1>
          <AnimatedUnderline className="mx-auto" />
        </div>
        <motion.div
          className="overflow-hidden"
          animate={isInView ? { y: 0, opacity: 1 } : { y: 400, opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            freeMode={true}
            breakpoints={{
              400: { slidesPerView: 1, spaceBetween: 20 },
              600: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 2, spaceBetween: 40 },
              1440: { slidesPerView: 2.5, spaceBetween: 50 },
            }}
            modules={[FreeMode]}
            className="mySwiper lg:px-5"
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          >
            {OurServicesData.map((ourServiceData, i) => (
              <SwiperSlide key={i} className="py-10">
                <div
                  style={{
                    boxShadow:
                      "rgba(0, 0, 0, 0.2) 0px 0px 1px -1px, rgba(0, 0, 0, 0.14) 0px 0px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px",
                  }}
                  className={`p-5 flex flex-col justify-center min-h-80 bg-highlight-color rounded-lg transform transition-transform duration-500 ${
                    activeIndex === i ? "!scale-110 mx-5" : ""
                  }`}
                >
                  <div className="rounded-full">
                    <Image
                      src={ourServiceData.icon}
                      alt="icon"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="h-20 w-20 mx-auto"
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-base-color my-5 text-center">
                    {ourServiceData.title}
                  </h3>
                  <p className="text-sm sm:text-base lg:text-base text-base-color text-center">
                    {ourServiceData.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </div>
  );
};

export default OurValues;
