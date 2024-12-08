"use client";
import React from "react";
import Container from "../ui/Container";
import Image from "next/image";
import { allIcons, AllResults } from "../../../public/assets/AllImages";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import StateCard from "./StateCard";

const ClientFeedBack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <motion.div ref={ref} className="bg-white overflow-hidden">
      <Container>
        <div className="mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-color text-center mb-8">
            Real Results from Real Clients
          </h1>
          <h2 className="w-full sm:w-[90%] lg:w-[70%] xl:w-[60%] mx-auto text-2xl sm:text-3xl lg:text-4xl font-medium text-base-color text-center mb-8">
            See how Clinivea has helped clients navigate their healthcare and
            achieve better outcomes.
          </h2>
        </div>

        {/* Feedback Card */}
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: 300, opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="w-full p-5 sm:p-7 lg:p-10 rounded-xl bg-white mb-16"
          style={{ boxShadow: "0px 0px 10px 10px #00000014" }}
        >
          <h2 className="w-full sm:w-[90%] lg:w-[70%]  xl:w-[60%] mx-auto text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary-color text-center mb-8">
            Sarah’s Journey:Navigating a Complex Cancer Diagnosis
          </h2>
          <div className="flex flex-col md:flex-row md:items-center gap-3 ">
            {/* Left - Image */}
            <div className="md:w-1/3">
              <Image
                src={AllResults.clientFeedbackUser1} // Update this with your actual image path
                alt="Profile"
                width={0}
                height={0}
                className="rounded-lg  max-h-[550px] md:w-full md:h-full mx-auto object-fill "
              />
            </div>

            {/* Right - Text Content */}
            <div className="md:w-2/3 md:pl-3 lg:pl-6">
              <div className="mb-4">
                <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-base-color mb-2 lg:mb-3 xl:mb-5">
                  Outcome
                </h2>
                <p className="text-base-color text-lg lg:text-xl xl:text-2xl">
                  Clinivea’s MVR helped Sarah find the right oncologist,
                  coordinated her appointments, and explained every step of her
                  treatment plan.
                </p>
              </div>

              <hr className="w-full border-t border-red-500 my-5 xl:my-10" />

              <div>
                <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-base-color mb-2 lg:mb-3 xl:mb-5">
                  Result
                </h2>
                <p className="text-base-color text-lg lg:text-xl xl:text-2xl">
                  Sarah felt empowered to make informed decisions about her
                  healthcare and saved over $2,000 by optimizing her insurance
                  claims.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: -300, opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="w-full p-5 sm:p-7 lg:p-10 rounded-xl bg-white "
          style={{ boxShadow: "0px 0px 10px 10px #00000014" }}
        >
          <h2 className="w-full sm:w-[90%] lg:w-[70%]  xl:w-[60%] mx-auto text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary-color text-center mb-8">
            Mark’s Story: Managing Diabetes and Reducing Healthcare Costs
          </h2>
          <div className="flex flex-col md:flex-row md:items-center gap-3">
            {/* Left - Image */}
            <div className="md:w-1/3 order-first md:order-last">
              <Image
                src={AllResults.clientFeedbackUser2} // Update this with your actual image path
                alt="Profile"
                width={0}
                height={0}
                className="rounded-lg  max-h-[550px] md:w-full md:h-full mx-auto object-fill "
              />
            </div>

            {/* Right - Text Content */}
            <div className="md:w-2/3 md:pr-3 lg:pr-6">
              <div className="mb-4">
                <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-base-color mb-2 lg:mb-3 xl:mb-5">
                  Outcome
                </h2>
                <p className="text-base-color text-lg lg:text-xl xl:text-2xl">
                  Mark’s MVR guided him through a new diabetes management plan,
                  helped him track his blood sugar using health monitoring
                  devices, and reduced his out-of-pocket costs by working with
                  his insurance
                </p>
              </div>

              <hr className="w-full border-t border-red-500 my-5 xl:my-10" />

              <div>
                <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-base-color mb-2 lg:mb-3 xl:mb-5">
                  Result
                </h2>
                <p className="text-base-color text-lg lg:text-xl xl:text-2xl">
                  Mark gained better control over his diabetes and saved 15% on
                  his annual healthcare expenses.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        {/* State Card */}
        <StateCard />
      </Container>
    </motion.div>
  );
};

export default ClientFeedBack;
