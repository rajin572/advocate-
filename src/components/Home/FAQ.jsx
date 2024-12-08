"use client";
import React, { useRef, useState } from "react";
import Container from "../ui/Container";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import Accordion from "../ui/Accordion";
import AnimatedUnderline from "../ui/AnimatedUnderline";

const FAQ = () => {
  const generalData = [
    {
      title: "How do I arrange for care?",
      content:
        "To arrange care, simply open our app, browse through available carers, and select the one that best suits your needs. You can easily view their profiles, qualifications, and availability. Once you’ve chosen a carer, book them directly through the app, and care will begin at your preferred time. If you have any questions or need assistance, feel free to contact us via the app or at 01730 859 583.",
    },
    {
      title: "Are your caregivers licensed and insured?",
      content:
        "Yes, all of our caregivers are fully licensed and insured to ensure the highest standard of care. We thoroughly vet each caregiver to ensure they meet all legal and professional requirements. Your loved ones are in safe hands with our qualified and reliable team.​",
    },
  ];

  return (
    <motion.div className="py-10 overflow-hidden my-10">
      <Container>
        <div className="grid grid-cols-1 gap-5">
          <div>
            <div className="mb-10">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[45px] font-semibold text-secondary-color mb-2">
                Frequently Asked Questions
              </h1>
              {/* <AnimatedUnderline className="ml-10 w-80" /> */}
            </div>
          </div>
          <div>
            <div>
              {generalData.map((item, index) => (
                <Accordion
                  key={index}
                  title={item.title}
                  content={item.content}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </motion.div>
  );
};

export default FAQ;
