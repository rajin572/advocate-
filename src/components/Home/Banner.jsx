"use client";
import React, { Suspense } from "react";
import Container from "../ui/Container";
import Image from "next/image";
import { AllImages } from "../../../public/assets/AllImages";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import { buttonVariants } from "@/lib/variants";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// import required modules
import { EffectFade, Autoplay } from "swiper/modules";
import Revel from "../ui/Animation/Revel";

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
  },
};
const icon2 = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "#19363D",
  },
};

export default function Banner() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.1 }}
      className="relative bg-[#F3F3F3] w-full h-[90vh] overflow-hidden flex flex-col items-center"
    >
      <Swiper
        spaceBetween={0}
        draggable={false}
        effect={"fade"}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Autoplay]}
        className="mySwiper h-[90vh] w-full "
      >
        <SwiperSlide>
          <Image
            src={AllImages.herobanner1}
            alt="banner-image"
            fill
            style={{ objectFit: "cover" }}
            className="absolute inset-0 w-full h-full object-cover object-left-top"
          />
          <div className="absolute inset-0 bg-black opacity-70"></div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={AllImages.herobanner2}
            alt="banner-image"
            fill
            style={{ objectFit: "cover" }}
            className="absolute inset-0 w-full h-full object-cover object-left-top"
          />
          <div className="absolute inset-0 bg-black opacity-70"></div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={AllImages.herobanner3}
            alt="banner-image"
            fill
            style={{ objectFit: "cover" }}
            className="absolute inset-0 w-full h-full object-cover object-center sm:object-left-top"
          />
          <div className="absolute inset-0 bg-black opacity-70"></div>
        </SwiperSlide>
      </Swiper>
      <div className="absolute w-full h-[90vh] z-10 text-base-color text-center flex justify-center items-center">
        <Container>
          {/* <div className="w-fit ml-[20%] hidden lg:block">
            <motion.svg
              width="100%"
              height="200"
              viewBox="0 0 507 199"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                variants={icon2}
                initial="hidden"
                animate="visible"
                transition={{
                  default: { delay: 1.5, duration: 0.5, ease: "easeInOut" },
                  fill: { delay: 2, duration: 0.3, ease: [1, 0, 0.8, 1] },
                }}
                d="M475.006 183.315C473.05 183.236 471.871 181.115 472.892 179.511L486.346 158.362C487.36 156.768 489.788 156.88 490.724 158.563L503.058 180.754C503.993 182.437 502.738 184.436 500.795 184.357L475.006 183.315Z"
                fill="#19363D"
                stroke="#19363D"
              />
              <motion.path
                variants={icon}
                initial="hidden"
                animate="visible"
                d="M3.93194 195.324C31.9172 151.464 122.723 54.6616 156.491 122.028C186.301 181.499 37.8079 234.187 56.2373 105.289C74.6668 -23.6086 347.816 19.4448 483.79 176.678"
                stroke="#19363D"
                strokeWidth="2"
                strokeLinejoin="round"
                strokeDasharray="8 8"
                transition={{
                  default: { duration: 2, ease: "easeInOut" },
                }}
              />
            </motion.svg>
          </div> */}
          <div className="grid grid-cols-1  lg:items-start justify-items-center w-full">
            <div>
              <motion.div
                // initial={{ opacity: 0, y: -200 }}
                // animate={{ opacity: 1, y: 0 }}
                // transition={{
                //   type: "spring",
                //   bounce: 0.4,

                //   duration: 1,
                //   delay: 0.3,
                // }}
                className="text-center"
              >
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl leading-10	 text-primary-color  font-semibold mb-10 font-skia ">
                  <Revel className="mx-auto py-1" delay={0}>
                    <p>Compassionate Care,</p>
                  </Revel>
                  <Revel className="mx-auto py-2" delay={0.1}>
                    <p className="sm:mt-1 lg:mt-2">
                      {" "}
                      Right Where You Feel Most Comfortable
                    </p>
                  </Revel>
                </h1>

                {/* <h3 className="text-xl lg:text-2xl xl:text-4xl  font-semibold mb-6 flex items-center flex-wrap justify-center lg:justify-start">
                Easy way to navigate your healthcare
              </h3> */}
                <Revel className="mx-auto" delay={0.2}>
                  <p className=" sm:text-lg lg:text-xl text-highlight-color w-full sm:w-[90%] lg:w-[80%] font-medium xl:w-[80%] mx-auto">
                    Providing compassionate and professional carers to ensure
                    your loved ones receive the best care in the comfort of
                    their own home.
                  </p>
                </Revel>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 200 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  bounce: 0.4,

                  duration: 1.5,
                  delay: 0.8,
                }}
              >
                <motion.button
                  variants={buttonVariants}
                  initial="initial"
                  whileTap="tap"
                  transition={{
                    type: "spring",
                    stiffness: 200,

                    damping: 7,
                  }}
                  type="primary"
                  className="isolate  w-full sm:w-fit mx-auto flex justify-center items-center border border-highlight-color bg-highlight-color/20 backdrop-filter  backdrop-blur-3xl shadow-lg ring-1 ring-primary-color/5 text-primary-color mt-10 font-medium sm:px-5 py-2 text-sm lg:text-lg rounded-lg"
                >
                  Request Care Needs Assessment
                  <FaArrowRight className="sm:text-lg lg:text-lg xl:text-xl ml-3 mt-1" />
                </motion.button>
              </motion.div>
            </div>

            {/* <motion.div
              className="mt-10 lg:mt-0  order-last"
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                bounce: 0.4,

                duration: 3,
              }}
            >
              <Suspense>
                <video
                  controls
                  controlsList="nodownload"
                  className=" w-full h-full rounded-lg "
                >
                  <source src="/video/banner.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Suspense>
            </motion.div> */}
          </div>
        </Container>
      </div>
    </motion.div>
  );
}
