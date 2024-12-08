"use client";
import React from "react";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { GoCheck } from "react-icons/go";
import { buttonVariants } from "@/lib/variants";

const Plans = [
  "Care Coordination",
  "Audio/Video Conference with MVR",
  "Appointment Reminders",
  "Post-Appointment Follow-Up",
  "Insurance Assistance",
  "Access to Online Health Portal",
  "Clinivea Pay Rewards",
  "Personalized Healthcare Navigation and Advocacy",
  "Video Conference with MVR",
  "Virtual/In-Person Appointment Attendance",
  "Healthcare Concierge Services",
  "Appointment Scheduling and Management",
  "Treatment and Medication Guidance",
  "Insurance Advocacy & Bill Management",
  "Proactive Health Monitoring and Reporting",
  "Health & Wellness Plans",
  "Second Opinion & Specialist Coordination",
  "Advance Care Planning",
  "Transportation and Accessibility Assistance",
];

const PricingPlans = () => {
  return (
    <div className="p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-stretch gap-[1.5vw]">
        <div className="flex flex-col  lg:col-span-1">
          <div
            className=" h-[200px] flex flex-col justify-center items-center mb-5  bg-white border border-[#CBCEEA] rounded-2xl"
            style={{ boxShadow: "0px 0px 5px 2px #00000040" }}
          >
            <h1 className="text-secondary-color text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-center px-5">
              Choose the right fit for you
            </h1>
          </div>
          <ul
            style={{ boxShadow: "0px 0px 5px 2px #00000040" }}
            className="w-full flex flex-col justify-between items-center h-full text-sm sm:text-base px-5 pt-5 bg-white border border-[#CBCEEA] rounded-2xl "
          >
            {Plans.map((plan, index) => (
              <li
                key={index}
                className={`w-full border-b border-[#DFDFDF] font-bold  flex justify-center  flex-col overflow-hidden ${
                  index === 0 ? "h-52 lg:h-80 xl:h-60" : "h-24"
                }`}
              >
                {plan}
              </li>
            ))}
          </ul>
        </div>
        {/* Explore  */}
        <div
          style={{ boxShadow: "0px 0px 5px 2px #00000040" }}
          className="flex flex-col  lg:col-span-1 bg-[#FEEBEA87] border border-[#CBCEEA] rounded-2xl "
        >
          <div className="text-center h-[200px] flex flex-col justify-center items-center mb-5">
            <h2 className="text-2xl mb-2 font-bold">Explore</h2>
            <div className="flex  gap-2 justify-center items-center">
              <p className="text-lg">Free</p>
            </div>
            <motion.button
              variants={buttonVariants}
              initial="initial"
              whileTap="tap"
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 7,
              }}
              className="bg-transparent border-2 border-secondary-color text-base xl:text-lg text-secondary-color font-semibold px-5 py-2 rounded-lg mt-3 w-[90%] mx-auto"
            >
              Get Access
            </motion.button>
          </div>
          <ul className="w-full flex flex-col justify-between items-center h-full text-sm sm:text-base px-5 pt-5 text-gray-700">
            <li className=" font-bold border-b border-[#E2E4FB] h-52 lg:h-80 xl:h-60 w-full flex justify-center  flex-col overflow-hidden  text-center">
              Try it Out, No Cost. Perfect for those just starting and wanting a
              feel for what Clinivea offers.
            </li>
            <li className=" font-bold border-b border-[#E2E4FB] h-24 w-full flex justify-center  flex-col overflow-hidden text-center">
              1:1 Audio conference for general support
            </li>
            <li className=" font-bold border-b border-[#E2E4FB] h-24 w-full flex justify-center  flex-col overflow-hidden text-center">
              Included
            </li>
            <li className=" font-bold border-b border-[#E2E4FB] h-24 w-full flex justify-center  flex-col overflow-hidden text-center">
              Limited
            </li>
            <li className=" font-bold border-b border-[#E2E4FB] h-24 w-full flex justify-center  flex-col overflow-hidden text-center">
              Basic
            </li>
            <li className="flex items-center justify-center font-bold border-b border-[#E2E4FB] h-24 w-full  text-center">
              <div className="w-fit p-2 bg-[#EBECFC] rounded-full">
                <GoCheck className="text-[#6A26FF] font-bold size-5 " />
              </div>
            </li>
            <li className="flex items-center justify-center font-bold border-b border-[#E2E4FB] h-24 w-full  text-center">
              Limited Rewards
            </li>
            <li className="flex items-center justify-center font-bold border-b border-[#E2E4FB] h-24 w-full  text-center">
              Not Included
            </li>
            {Array.from({ length: 11 }).map((_, index) => (
              <li
                key={index}
                className="flex items-center justify-center font-bold border-b border-[#E2E4FB] h-24 w-full  text-center"
              >
                <div className="w-fit p-2 bg-[#EBECFC] rounded-full">
                  <IoMdClose className="text-[#606060] font-bold size-5 " />
                </div>
              </li>
            ))}
            {/* Repeat similar structure for other features */}
          </ul>
        </div>
        {/* Premium  */}
        <div
          style={{ boxShadow: "0px 0px 5px 2px #00000040" }}
          className="flex flex-col lg:col-span-1 bg-[#FEEBEA] border border-[#CBCEEA] rounded-2xl "
        >
          <div className="text-center h-[200px] flex flex-col justify-center items-center mb-5">
            <h2 className="text-2xl mb-2 font-bold">Essential</h2>
            <div className="flex gap-2 justify-center items-center">
              <p className="text-3xl font-bold ">$49.95</p>
              <p className="text-lg">/monthly</p>
            </div>
            <motion.button
              variants={buttonVariants}
              initial="initial"
              whileTap="tap"
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 7,
              }}
              className="bg-red-500 border-2 border-secondary-color text-base xl:text-lg text-white font-semibold px-5 py-2 rounded-lg mt-3 w-[90%] mx-auto"
            >
              Get Access
            </motion.button>
          </div>
          <ul className="w-full flex flex-col justify-between items-center h-full text-sm sm:text-base px-5 pt-5 text-gray-700">
            <li className=" font-bold border-b border-[#E2E4FB] h-52 lg:h-80 xl:h-60 w-full flex justify-center  flex-col overflow-hidden text-center">
              Affordable Support, Ideal for those seeking reliable guidance and
              support with budget-friendly options.
            </li>
            <li className=" font-bold border-b border-[#E2E4FB] h-24 w-full flex justify-center  flex-col overflow-hidden text-center">
              1:1 Video or Audio conference with dedicated MVR
            </li>
            <li className=" font-bold border-b border-[#E2E4FB] h-24 w-full flex justify-center  flex-col overflow-hidden text-center">
              Included
            </li>
            <li className=" font-bold border-b border-[#E2E4FB] h-24 w-full flex justify-center  flex-col overflow-hidden text-center">
              Comprehensive
            </li>
            <li className=" font-bold border-b border-[#E2E4FB] h-24 w-full flex justify-center  flex-col overflow-hidden text-center">
              Comprehensive
            </li>
            <li className="flex items-center justify-center font-bold border-b border-[#E2E4FB] h-24 w-full text-center">
              <div className="w-fit p-2 bg-[#EBECFC] rounded-full">
                <GoCheck className="text-[#6A26FF] font-bold size-5 " />
              </div>
            </li>
            <li className="flex items-center justify-center font-bold border-b border-[#E2E4FB] h-24 w-full text-center">
              Enhanced Rewards
            </li>
            <li className="flex items-center justify-center font-bold border-b border-[#E2E4FB] h-24 w-full text-center">
              Included
            </li>
            {Array.from({ length: 11 }).map((_, index) => (
              <li
                key={index}
                className="flex items-center justify-center font-bold border-b border-[#E2E4FB] h-24 w-full text-center"
              >
                <div className="w-fit p-2 bg-[#EBECFC] rounded-full">
                  <GoCheck className="text-[#6A26FF] font-bold size-5 " />
                </div>
              </li>
            ))}
            {/* Repeat similar structure for other features */}
          </ul>
        </div>
        {/* Premium Plus */}
        <div
          style={{ boxShadow: "0px 0px 5px 2px #00000040" }}
          className="flex flex-col lg:col-span-1 bg-[#FEEBEA] border border-[#CBCEEA] rounded-2xl "
        >
          <div className="text-center h-[200px] flex flex-col justify-center items-center mb-5">
            <h2 className="text-2xl mb-2 font-bold">Premium</h2>
            <div className="flex gap-2 justify-center items-center">
              <p className="text-3xl font-bold ">$89.95</p>
              <p className="text-lg">/monthly</p>
            </div>
            <motion.button
              variants={buttonVariants}
              initial="initial"
              whileTap="tap"
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 7,
              }}
              className="bg-red-500 border-2 border-secondary-color text-base xl:text-lg text-white font-semibold px-5 py-2 rounded-lg mt-3 w-[90%] mx-auto"
            >
              Get Access
            </motion.button>
          </div>
          <ul className="w-full flex flex-col justify-between items-center h-full text-sm sm:text-base px-5 pt-5 text-gray-700">
            <li className=" font-bold border-b border-[#E2E4FB] h-52 lg:h-80 xl:h-60 w-full flex justify-center  flex-col overflow-hidden text-center">
              Total care, every step of the way. Enjoy full-scale guidance from
              a dedicated MedicoVigilance Representative, personalized health
              strategies, and priority access. Perfect for those who want
              proactive and ongoing support for every health decision.
            </li>
            <li className=" font-bold border-b border-[#E2E4FB] h-24 w-full flex justify-center  flex-col overflow-hidden text-center">
              1:1 Video or Audio conference with dedicated MVR
            </li>
            <li className=" font-bold border-b border-[#E2E4FB] h-24 w-full flex justify-center  flex-col overflow-hidden text-center">
              Included
            </li>
            <li className=" font-bold border-b border-[#E2E4FB] h-24 w-full flex justify-center  flex-col overflow-hidden text-center">
              Comprehensive
            </li>
            <li className=" font-bold border-b border-[#E2E4FB] h-24 w-full flex justify-center  flex-col overflow-hidden text-center">
              Comprehensive
            </li>
            <li className="flex items-center justify-center font-bold border-b border-[#E2E4FB] h-24 w-full text-center">
              <div className="w-fit p-2 bg-[#EBECFC] rounded-full">
                <GoCheck className="text-[#6A26FF] font-bold size-5 " />
              </div>
            </li>
            <li className="flex items-center justify-center font-bold border-b border-[#E2E4FB] h-24 w-full text-center">
              Enhanced Rewards
            </li>
            <li className="flex items-center justify-center font-bold border-b border-[#E2E4FB] h-24 w-full text-center">
              Included
            </li>
            {Array.from({ length: 11 }).map((_, index) => (
              <li
                key={index}
                className="flex items-center justify-center font-bold border-b border-[#E2E4FB] h-24 w-full text-center"
              >
                <div className="w-fit p-2 bg-[#EBECFC] rounded-full">
                  <GoCheck className="text-[#6A26FF] font-bold size-5 " />
                </div>
              </li>
            ))}
            {/* Repeat similar structure for other features */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
