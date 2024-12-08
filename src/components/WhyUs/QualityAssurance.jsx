"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Container from "../ui/Container";
import Revel from "../ui/Animation/Revel";

const qualityAssurance = [
  {
    title: "Quality Assurance Commitment",
    points: [
      "Fully CQC registered and regulated",
      "Rigorous staff selection process",
      "Mandatory enhanced DBS checks for all caregivers",
      "Minimum qualification requirements",
      "Continuous professional development",
    ],
  },
  {
    title: "Client-Centered Care",
    points: [
      "Personalized care plans",
      "Monthly comprehensive care reviews",
      "24/7 support and communication",
      "Transparent reporting",
      "Family involvement guaranteed",
    ],
  },
  {
    title: "Safety and Protection",
    points: [
      "Comprehensive risk assessments",
      "Regular safeguarding training",
      "Strict confidentiality protocols",
      "Advanced care monitoring systems",
      "Immediate incident response procedures",
    ],
  },
  {
    title: "Continuous Improvement",
    points: [
      "Annual external quality audits",
      "Staff performance evaluations",
      "Client satisfaction surveys",
      "Innovative care technology integration",
      "Responsive feedback mechanisms",
    ],
  },
];

const QualityAssurance = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <motion.div
      ref={ref}
      className="overflow-hidden py-14 sm:py-16 lg:py-20 mt-10 bg-highlight-color"
    >
      <Container>
        <div className=" mt-10">
          <div className="mb-10 sm:mb-12 lg:mb-16">
            <Revel delay={0}>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[40px] font-semibold text-secondary-color mb-7">
                Quality Assurance Commitment
              </h1>
            </Revel>
            <Revel delay={0}>
              <p className="text-sm lg:text-base xl:text-lg text-base-color w-full sm:w-[90%] lg:w-[80%]  xl:w-[80%] text-start">
                At Advocate, we uphold the highest care standards with fully
                CQC-registered caregivers, thorough background checks, and
                strict qualifications. We offer personalized care plans, 24/7
                support, and focus on safety, confidentiality, and continuous
                improvement to ensure the best outcomes for our clients.
              </p>
            </Revel>
          </div>
          <div className="px-10 sm:ps-12 lg:ps-14 border-s border-secondary-color w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
              {qualityAssurance.map((item, index) => (
                <div key={index} className=" mb-10">
                  <Revel delay={0.1}>
                    <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-base-color ">
                      {item.title}
                    </h2>
                  </Revel>
                  <ul className="text-sm lg:text-base  text-base-color w-full sm:w-[90%] lg:w-[80%]  xl:w-[80%] mt-3 text-start list-disc list-inside">
                    {item.points.map((point, index) => (
                      <Revel key={index} delay={0.2}>
                        <li className="list-disc list-inside space-y-2">
                          {point}
                        </li>
                      </Revel>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </motion.div>
  );
};

export default QualityAssurance;
