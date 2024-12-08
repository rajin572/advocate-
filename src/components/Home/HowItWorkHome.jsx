"use client";
/* eslint-disable react/no-unescaped-entities */
import classNames from "classnames";
import { useRef, useState } from "react";
import Container from "../ui/Container";
import Image from "next/image";
import { AllImages } from "../../../public/assets/AllImages";
import { AnimatePresence, delay, motion, useInView } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import { buttonVariants } from "@/lib/variants";

const containerVariants = {
  hidden: {
    transition: {
      delay: 0.5,
      // staggerChildren: 0.3, // Stagger when hiding
      when: "afterChildren", // Wait until children are hidden
    },
  },
  visible: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.3,
      when: "beforeChildren",
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
    },
  },
};

const HowItWorkHome = () => {
  const ref = useRef(null);
  const isInView = useInView(ref); // Trigger animation when 50% of section is in view
  const [activeSection, setActiveSection] = useState("Connect");
  const sections = [
    { id: "Connect", label: "Sign up and connect with an MVR" },
    { id: "Receive", label: "Receive personalized guidance" },
    {
      id: "Manage",
      label: (
        <div className="flex items-e">
          <span>Enjoy ongoing advocacy and support</span>
        </div>
      ),
    },
  ];

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"} // Animation triggered when in view
      className="bg-[#FFF4F3] py-20 overflow-hidden"
    >
      <div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-color text-center mb-16">
          How It Works
        </h1>
      </div>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-start relative  mb-16">
          <motion.div className="  flex justify-center items-center py-5 ">
            <nav className="border-l border-base-color">
              {sections.map((section) => (
                <motion.div
                  key={section.id}
                  variants={childVariants}
                  className="-ml-[6px]  flex mb-5 items-center"
                >
                  <span
                    className={classNames(
                      "h-3 w-3 rounded-full bg-secondary-color",
                      activeSection === section.id ? "block" : "hidden"
                    )}
                  ></span>
                  <div
                    className={classNames(
                      "block sm:text-lg md:text-xl lg:text-2xl font-semibold ps-10 cursor-pointer",
                      activeSection === section.id
                        ? "text-secondary-color ps-8 transition ease-in-out scale-110"
                        : "text-base-color"
                    )}
                    onClick={() => setActiveSection(section.id)}
                  >
                    {section.label}
                  </div>
                </motion.div>
              ))}
            </nav>
          </motion.div>
          <div className="text-base-color flex-grow flex flex-col w-full gap-y-28 mt-16 lg:mt-0  ml-auto">
            <AnimatePresence mode="wait">
              {activeSection === "Connect" ? (
                <motion.section
                  key="Connect"
                  initial={{ opacity: 0, x: 100 }}
                  animate={
                    isInView
                      ? {
                          opacity: 1,
                          x: 0,
                          transition: { type: "spring", duration: 1.5 },
                        }
                      : {
                          opacity: 0,
                          x: 100,
                          transition: { type: "spring", duration: 0.2 },
                        }
                  }
                  exit={{
                    x: 100,
                    opacity: 0,
                    transition: { type: "spring", duration: 0.5 },
                  }}
                  // transition={{ type: "spring", duration: 0.5 }}
                  className="flex flex-col justify-center items-center gap-10"
                >
                  <Image
                    src={AllImages.howItWork3}
                    alt="connect"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full"
                  />
                  <p className="sm:text-lg md:text-xl lg:text-2xl w-full ">
                    Connect with an MVR and gain a dedicated guide by your side.
                    Your MVR understands your unique needs, making healthcare
                    clear and seamless.
                  </p>
                </motion.section>
              ) : activeSection === "Receive" ? (
                <motion.section
                  key="Receive"
                  initial={{ opacity: 0, x: 100 }}
                  animate={
                    isInView
                      ? {
                          opacity: 1,
                          x: 0,
                          transition: { type: "spring", duration: 1 },
                        }
                      : {
                          opacity: 0,
                          x: 100,
                          transition: { type: "spring", duration: 0.2 },
                        }
                  }
                  exit={{
                    x: 100,
                    opacity: 0,
                    transition: { type: "spring", duration: 0.5 },
                  }}
                  // transition={{ type: "spring", duration: 0.5 }}
                  className="flex flex-col justify-center items-center gap-10"
                >
                  <Image
                    src={AllImages.howItWork2}
                    alt="receive"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full"
                  />
                  <p className="sm:text-lg md:text-xl lg:text-2xl w-full ">
                    Receive personalized guidance with your MVR, who provides
                    proactive support for your healthcare journey. From
                    reviewing your medical history to coordinating appointments
                    and explaining insurance benefits empowers you to make
                    informed, confident decisions.
                  </p>
                </motion.section>
              ) : (
                <motion.section
                  key="Manage"
                  initial={{ opacity: 0, x: 100 }}
                  animate={
                    isInView
                      ? {
                          opacity: 1,
                          x: 0,
                          transition: { type: "spring", duration: 1 },
                        }
                      : {
                          opacity: 0,
                          x: 100,
                          transition: { type: "spring", duration: 0.2 },
                        }
                  }
                  exit={{
                    x: 100,
                    opacity: 0,
                    transition: { type: "spring", duration: 0.5 },
                  }}
                  // transition={{ type: "spring", duration: 0.5 }}
                  className="flex flex-col justify-center items-center gap-10"
                >
                  <Image
                    src={AllImages.howItWork1}
                    alt="manage"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full"
                  />
                  <p className="sm:text-lg md:text-xl lg:text-2xl w-full ">
                    Your MVR is by your side beyond every appointment, offering
                    ongoing support and guidance. Enjoy clear, confident
                    healthcare decisions as your MVR keeps you on track with
                    your health goals, ensuring every step is focused on your
                    well-being.
                  </p>
                </motion.section>
              )}
            </AnimatePresence>
          </div>
        </div>
        <motion.button
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 7,
          }}
          className=" w-full sm:w-[90%] md:w-[70%] lg:w-[60%] mx-auto flex justify-center items-center bg-[#F7F8F8] text-secondary-color border border-[#E6E7E6] font-semibold px-10 py-3 text-lg sm:text-xl lg:text-2xl xl:text-3xl  rounded-xl"
        >
          See Full Details on How It Works
          <FaArrowRight className="text-lg sm:text-xl lg:text-3xl ml-3 mt-1" />
        </motion.button>
      </Container>
    </motion.div>
  );
};

export default HowItWorkHome;
