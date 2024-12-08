"use client";
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import Container from "../ui/Container";
import Image from "next/image";
import { AllHowItWorks, AllImages } from "../../../public/assets/AllImages";
import { FaArrowRight } from "react-icons/fa6";
import { buttonVariants } from "@/lib/variants";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ServiceHighlights = () => {
  const [personalizeShow, setPersonalizeShow] = useState(false);
  const [comprehensiveShow, setComprehensiveShow] = useState(false);
  const [maximizedShow, setMaximizedShow] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <motion.div
      initial={{ y: -200, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : { y: -200, opacity: 0 }}
      transition={{ duration: 1 }}
      ref={ref}
      className="relative py-20"
    >
      <Container>
        <div className="flex justify-center items-center gap-2 mb-20">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-color text-center ">
            Why Choose
          </h1>
        </div>
        <div className="hidden sm:block">
          <div className="flex justify-between">
            <div className="w-1/3">
              <div className="text-center ">
                <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold text-base-color mb-5">
                  Personalized Support
                </h1>
                <p className="text sm:text-lg text-start lg:text-xl w-full">
                  <span>
                    {personalizeShow ? (
                      <span>
                        At Clinivea, we’re more than a healthcare service—we’re
                        your dedicated partner on this journey. [Read More]
                        Through our{" "}
                        <span className="font-skia">MedicoVigilance™</span>{" "}
                        approach, every client receives a personal
                        MedicoVigilance Representative (MVR) who stands with
                        you, guiding and advocating for you each step of the
                        way. Your MVR doesn’t just provide information; they
                        simplify and clarify, ensuring you feel empowered and
                        supported. It’s a partnership built around making
                        healthcare feel personal, reassuring, and entirely
                        focused on you.
                      </span>
                    ) : (
                      `At Clinivea, we’re more than a healthcare service—we’re your dedicated `
                    )}
                  </span>
                  <button
                    onClick={() => setPersonalizeShow((prev) => !prev)}
                    className="text-secondary-color font-semibold hover:underline"
                  >
                    {personalizeShow ? "  See Less..." : " See More..."}
                  </button>
                </p>
              </div>
            </div>
            <div className="w-1/3">
              <div className="text-center ">
                <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold text-base-color mb-5">
                  Maximized Healthcare Benefits
                </h1>
                <p className="text sm:text-lg  text-start lg:text-xl w-full">
                  <span>
                    {maximizedShow
                      ? `Clinivea is committed to making sure you get the most from your healthcare coverage. (Read More): With every step, we ensure that your insurance plan works for you, finding ways to minimize out-of-pocket costs while maximizing coverage. Whether it’s understanding benefits, managing claims, or helping you plan ahead, we’re here to make healthcare more valuable, efficient, and worry-free. `
                      : `Clinivea is committed to making sure you get the most from your `}
                  </span>
                  <button
                    onClick={() => setMaximizedShow((prev) => !prev)}
                    className="text-secondary-color font-semibold hover:underline"
                  >
                    {maximizedShow ? " See Less..." : " See More..."}
                  </button>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center py-5">
            <div className="w-1/3 flex flex-col sm:-mr-[1.7%] lg:-mr-[1.67%]">
              <div className="w-full h-[100px] sm:h-[120px] md:h-[150px] lg:h-[200px] xl:h-[250px] relative ">
                <div className=" w-full h-full bg-[#003366] rounded-t-full"></div>
                <div className="w-[90%] sm:h-[200px] md:h-[440px] bg-white rounded-full absolute top-[10%] left-[5%]"></div>
                <Image
                  src={AllHowItWorks.whyClinivea1}
                  alt="icon"
                  className="absolute top-[25%] left-[15%] w-[70%]"
                />
              </div>
            </div>

            <div className="w-1/3 flex flex-col sm:mt-28 md:mt-32 lg:mt-48 xl:mt-60">
              <div className="w-full h-[100px] sm:h-[120px] md:h-[150px] lg:h-[200px] xl:h-[250px] relative">
                <Image
                  src={AllHowItWorks.whyClinivea2}
                  alt="icon"
                  className="absolute bottom-[25%] left-[15%] w-[70%] z-10"
                />
                <div className="w-[90%] sm:h-[200px] md:h-[440px] bg-white rounded-full absolute bottom-[10%] left-[5%]"></div>
                <div className=" w-full h-full bg-[#009900] rounded-b-full"></div>
              </div>
            </div>

            <div className="w-1/3 flex flex-col sm:-ml-[1.7%] lg:-ml-[1.67%] ">
              <div className="w-full h-[100px] sm:h-[120px] md:h-[150px] lg:h-[200px] xl:h-[250px] relative">
                <div className=" w-full h-full bg-[#003366] rounded-t-full"></div>
                <div className="w-[90%] sm:h-[200px] md:h-[440px] bg-white rounded-full absolute top-[10%] left-[5%]"></div>
                <Image
                  src={AllHowItWorks.whyClinivea1}
                  alt="icon"
                  className="absolute top-[25%] left-[15%] w-[70%]"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-1/3">
              <div className="text-center ">
                <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold text-base-color mb-5">
                  Comprehensive Care
                </h1>
                <p className="text sm:text-lg  text-start lg:text-xl">
                  <span>
                    {comprehensiveShow ? (
                      <span>
                        We don’t just coordinate care; we run with you to make
                        it seamless.
                        <span className="font-skia">Interplay™</span>
                        technology, Clinivea provides a clear, holistic view of
                        your health, making complex information easy to
                        understand. From scheduling appointments to coordinating
                        follow-ups and managing health records, we handle the
                        details so you can focus on what matters most—your
                        well-being. Healthcare can feel overwhelming, but we’re
                        here to make it clear, manageable, and accessible.
                      </span>
                    ) : (
                      `We don’t just coordinate care; we run with you to make it seamless.. `
                    )}
                  </span>
                  <button
                    onClick={() => setComprehensiveShow((prev) => !prev)}
                    className="text-secondary-color font-semibold hover:underline"
                  >
                    {comprehensiveShow ? " See Less..." : " See More..."}
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="block sm:hidden">
          <div className="flex flex-col items-center space-y-12 p-6">
            {/* Personalized Support */}
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center">
                <Image src={AllHowItWorks.whyClinivea1} alt="icon" />
              </div>
              <h2 className="text-xl font-semibold mt-4">
                Personalized Support
              </h2>
              <p className="text-gray-600 mt-2">
                <span>
                  {personalizeShow ? (
                    <span>
                      At Clinivea, we’re more than a healthcare service—we’re
                      your dedicated partner on this journey. [Read More]
                      Through our{" "}
                      <span className="font-skia">MedicoVigilance™</span>{" "}
                      approach, every client receives a personal MedicoVigilance
                      Representative (MVR) who stands with you, guiding and
                      advocating for you each step of the way. Your MVR doesn’t
                      just provide information; they simplify and clarify,
                      ensuring you feel empowered and supported. It’s a
                      partnership built around making healthcare feel personal,
                      reassuring, and entirely focused on you.
                    </span>
                  ) : (
                    `At Clinivea, we’re more than a healthcare service—we’re your dedicated `
                  )}
                </span>
                <button
                  onClick={() => setPersonalizeShow((prev) => !prev)}
                  className="text-secondary-color font-semibold hover:underline"
                >
                  {personalizeShow ? "  See Less..." : " See More..."}
                </button>
              </p>
            </div>

            {/* Comprehensive Care */}
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center">
                <Image src={AllHowItWorks.whyClinivea2} alt="icon" />
              </div>
              <h2 className="text-xl font-semibold mt-4">Comprehensive Care</h2>
              <p className="text sm:text-lg lg:text-xl">
                <span>
                  {comprehensiveShow ? (
                    <span>
                      We don’t just coordinate care; we run with you to make it
                      seamless. (Read More): With our Bio Design{" "}
                      <span className="font-skia">Interplay™</span>
                      technology, Clinivea provides a clear, holistic view of
                      your health, making complex information easy to
                      understand. From scheduling appointments to coordinating
                      follow-ups and managing health records, we handle the
                      details so you can focus on what matters most—your
                      well-being. Healthcare can feel overwhelming, but we’re
                      here to make it clear, manageable, and accessible.
                    </span>
                  ) : (
                    `We don’t just coordinate care; we run with you to make it seamless `
                  )}
                </span>
                <button
                  onClick={() => setComprehensiveShow((prev) => !prev)}
                  className="text-secondary-color font-semibold hover:underline"
                >
                  {comprehensiveShow ? " See Less..." : " See More..."}
                </button>
              </p>
            </div>

            {/* Maximized Healthcare Benefits */}
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center">
                <Image src={AllHowItWorks.whyClinivea3} alt="icon" />
              </div>
              <h2 className="text-xl font-semibold mt-4">
                Maximized Healthcare Benefits
              </h2>
              <p className="text sm:text-lg lg:text-xl w-full">
                <span>
                  {maximizedShow
                    ? `Clinivea is committed to making sure you get the most from your healthcare coverage. (Read More): With every step, we ensure that your insurance plan works for you, finding ways to minimize out-of-pocket costs while maximizing coverage. Whether it’s understanding benefits, managing claims, or helping you plan ahead, we’re here to make healthcare more valuable, efficient, and worry-free. `
                    : `Clinivea is committed to making sure you get the most from your `}
                </span>
                <button
                  onClick={() => setMaximizedShow((prev) => !prev)}
                  className="text-secondary-color font-semibold hover:underline"
                >
                  {maximizedShow ? " See Less..." : " See More..."}
                </button>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <motion.button
            variants={buttonVariants}
            initial="initial"
            whileHover={"hover"}
            transition={{
              type: "spring",
              stiffness: 200,

              damping: 7,
            }}
            type="primary"
            className=" w-full sm:w-[90%] md:w-[70%] lg:w-[60%] mx-auto flex justify-center items-center bg-[#F7F8F8] text-secondary-color border border-[#E6E7E6] font-semibold px-10 py-3 text-lg sm:text-xl lg:text-2xl xl:text-3xl  rounded-xl"
          >
            Start Your Journey with Clinivea
            <FaArrowRight className="text-lg sm:text-xl lg:text-3xl ml-3 mt-1" />
          </motion.button>
        </div>
      </Container>
    </motion.div>
  );
};

export default ServiceHighlights;
