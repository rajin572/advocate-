"use client";
import React, { useState } from "react";
import Container from "../ui/Container";
import Image from "next/image";
import { AllHowItWorks } from "../../../public/assets/AllImages";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const HowItWorkMain = () => {
  const [showMoreStep1, setShowMoreStep1] = useState(false);
  const [showMoreStep2, setShowMoreStep2] = useState(false);
  const [showMoreStep3, setShowMoreStep3] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <motion.div ref={ref} className=" overflow-hidden">
      <Container>
        <div>
          <div className="mb-10">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-color text-center mb-10">
              How It Works
            </h1>
            <h2 className="w-full sm:w-[90%] mx-auto text-2xl sm:text-3xl lg:text-4xl font-medium text-base-color text-center mb-8">
              At Clinivea,{" "}
              <span className="font-semibold">
                FOCUS IS <span className="font-skia">YOU™</span>
              </span>{" "}
              is you every step of the way. Here&apos;s how{" "}
              <span className="font-skia">MedicoVigilance™</span>
              works for you.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5   md:py-36">
            {/* 1st Step  */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
              transition={{ duration: 1 }}
              className=" flex flex-col"
            >
              <div className="bg-[#F7F8F8] px-5 sm:px-6 lg:px-8  xl:px-10 py-6 md:py-20 rounded-3xl border border-[#E6E7E6] flex flex-col items-center justify-center relative">
                <Image
                  src={AllHowItWorks.howItWorks1}
                  alt="user"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className={`h-28 w-28 lg:h-40 lg:w-40 md:absolute ${
                    showMoreStep1
                      ? "md:-top-[8%] lg:-top-[13%] xl:-top-[18%]"
                      : "md:-top-[12%] lg:-top-[20%] xl:-top-[25%]"
                  }`}
                />
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-base-color my-5 text-center">
                  Sign Up & Connect
                </h2>
                <p className=" lg:text-lg ">
                  <span>
                    {showMoreStep1
                      ? `Joining Clinivea means gaining a dedicated MedicoVigilance
                    Representative (MVR) by your side. Your MVR takes the time
                    to understand your unique healthcare needs, becoming your
                    personal guide through the complexities of health
                    management. Whether it’s your first step or your hundredth,
                    we run together, making healthcare feel seamless from day
                    one. `
                      : `Joining Clinivea means gaining a dedicated MedicoVigilance
                    Representative (MVR) by your side. Your MVR takes the time
                    to understand your unique healthcare needs, `}
                  </span>
                  <button
                    onClick={() => setShowMoreStep1((prev) => !prev)}
                    className="text-secondary-color font-semibold hover:underline"
                  >
                    {showMoreStep1 ? "See Less..." : "See More..."}
                  </button>
                </p>
              </div>
              <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-center font-semibold text-secondary-color mb-5 md:mb-0 md:mt-5 order-first md:order-last">
                Step -01
              </p>
            </motion.div>
            {/* 2nd Step  */}
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={
                isInView ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }
              }
              transition={{ duration: 1 }}
              className=" flex flex-col mt-0 md:-mt-28"
            >
              <div className="bg-[#F7F8F8] px-5 sm:px-7 lg:px-8 xl:px-10 py-6 md:py-20 rounded-3xl border border-[#E6E7E6] flex flex-col items-center justify-center relative">
                <Image
                  src={AllHowItWorks.howItWorks2}
                  alt="user"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className={`h-28 w-28 lg:h-40 lg:w-40 md:absolute ${
                    showMoreStep2
                      ? "md:-bottom-[9%] lg:-bottom-[10%] xl:-bottom-[18%]"
                      : "md:-bottom-[12%] lg:-bottom-[15%] xl:-bottom-[25%]"
                  } `}
                />
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-base-color my-5 md:my-0 md:mb-5 text-center">
                  Receive Personalized Support
                </h2>
                <p className=" lg:text-lg  mb-0 md:mb-5">
                  <span>
                    {showMoreStep2
                      ? `Your MVR provides tailored, proactive support to keep your
                  healthcare on track. From explaining your medical history to
                  discussing treatment options and coordinating appointments, we
                  simplify the process and empower you to make informed
                  decisions. Need help understanding insurance? Your MVR will
                  clarify your benefits, so you know exactly what’s covered and
                  can make the best choices for your health. `
                      : `Your MVR provides tailored, proactive support to keep your
                  healthcare on track. From explaining your medical history to
                  discussing treatment options and coordinating  `}
                  </span>
                  <button
                    onClick={() => setShowMoreStep2((prev) => !prev)}
                    className="text-secondary-color font-semibold hover:underline"
                  >
                    {showMoreStep2 ? "See Less..." : "See More..."}
                  </button>
                </p>
              </div>
              <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-center font-semibold text-secondary-color mb-5 order-first">
                Step -02
              </p>
            </motion.div>
            {/* 3rd Step  */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
              transition={{ duration: 1 }}
              className=" flex flex-col"
            >
              <div className="bg-[#F7F8F8] px-5 sm:px-7 lg:px-8 xl:px-10 py-6 md:py-20 rounded-3xl border border-[#E6E7E6] flex flex-col items-center justify-center relative">
                <Image
                  src={AllHowItWorks.howItWorks3}
                  alt="user"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className={`h-28 w-28 lg:h-40 lg:w-40 md:absolute ${
                    showMoreStep3
                      ? "md:-top-[8%] lg:-top-[13%] xl:-top-[18%]"
                      : "md:-top-[10%] lg:-top-[16%] xl:-top-[23%]"
                  }`}
                />
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-base-color my-5 text-center">
                  Enjoy Ongoing Advocacy and Support
                </h2>
                <p className=" lg:text-lg ">
                  <span>
                    {showMoreStep3
                      ? `With Clinivea, support doesn’t end at the appointment. Your
                    MVR is committed to helping you stay on top of your
                    healthcare goals, continuously monitoring your progress and
                    providing expert guidance to ensure each decision is clear,
                    confident, and focused on your well-being. `
                      : `With Clinivea, support doesn’t end at the appointment. Your
                    MVR is committed to helping you stay on top of your  healthcare goals, continuously monitoring `}
                  </span>
                  <button
                    onClick={() => setShowMoreStep3((prev) => !prev)}
                    className="text-secondary-color font-semibold hover:underline"
                  >
                    {showMoreStep3 ? "See Less..." : "See More..."}
                  </button>
                </p>
              </div>
              <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-center font-semibold text-secondary-color mb-5 md:mb-0 md:mt-5  order-first md:order-last">
                Step -03
              </p>
            </motion.div>
          </div>
        </div>
      </Container>
    </motion.div>
  );
};

export default HowItWorkMain;
