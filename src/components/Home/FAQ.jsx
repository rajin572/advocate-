"use client";
import React, { useRef, useState } from "react";
import Container from "../ui/Container";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import Accordion from "../ui/Accordion";

const FAQ = () => {
  const [activeButton, setActiveButton] = useState("general");
  const ref = useRef(null);
  const isInView = useInView(ref);
  const generalData = [
    {
      title: "How do I arrange for care?",
      content:
        "To arrange care, simply open our app, browse through available carers, and select the one that best suits your needs. You can easily view their profiles, qualifications, and availability. Once you’ve chosen a carer, book them directly through the app, and care will begin at your preferred time. If you have any questions or need assistance, feel free to contact us via the app or at 01730 859 583.",
    },
    {
      title: "Are your caregivers licensed and insured?",
      content:
        "Yes, all of our caregivers are fully licensed and insured to ensure the highest standard of care. We thoroughly vet each caregiver to ensure they meet all legal and professional requirements. Your loved ones are in safe hands with our qualified and reliable team.",
    },
    {
      title: "What types of care services do you provide?",
      content:
        "We offer a wide range of care services, including personal care, companionship, medication management, meal preparation, and specialized care for conditions like dementia and Parkinson’s. Our services are tailored to meet the unique needs of each client.",
    },
    {
      title: "Can I customize the care plan?",
      content:
        "Absolutely! We provide personalized care plans based on a thorough assessment of your needs. Our team works closely with you and your family to ensure the care plan aligns with your preferences, schedule, and specific requirements.",
    },
    {
      title: "How do you ensure the safety of your clients?",
      content:
        "Safety is our top priority. We conduct comprehensive risk assessments, provide regular safeguarding training to our carers, and implement advanced care monitoring systems. Our caregivers are trained to handle emergencies and follow strict safety protocols.",
    },
    {
      title: "Do you offer 24/7 support?",
      content:
        "Yes, we provide 24/7 support to ensure your peace of mind. Whether it’s an urgent request or a general query, our team is available around the clock to assist you.",
    },
    {
      title: "What if my assigned caregiver is unavailable?",
      content:
        "In the rare case your assigned caregiver is unavailable, we will promptly arrange a qualified substitute who meets your specific care requirements. Your care continuity is our priority.",
    },
  ];

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView && { opacity: 1 }}
      transition={{ duration: 0.1 }}
      className="py-10 overflow-hidden my-10 lg:my-20"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-10 text-secondary-color">
              Frequently{" "}
              <span className="text-base-color">Asked Questions</span>
            </h3>
            <div className="flex flex-col gap-2">
              <div
                className="flex items-center gap-2"
                onClick={() => setActiveButton("general")}
              >
                {activeButton === "general" ? (
                  <div className="h-1 w-10 rounded-full bg-secondary-color"></div>
                ) : (
                  <div className="h-1 w-10 rounded-full bg-transparent"></div>
                )}
                <h3
                  className={`cursor-pointer text-lg md:text-xl text-base-color ${
                    activeButton === "general" && "font-bold"
                  }`}
                >
                  General
                </h3>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2">
            {activeButton === "general" ? (
              <div>
                {generalData.map((item, index) => (
                  <Accordion
                    key={index}
                    title={item.title}
                    content={item.content}
                  />
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </Container>
    </motion.section>
  );
};

export default FAQ;
