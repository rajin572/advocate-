import Image from "next/image";
import React from "react";
import { allIcons } from "../../../public/assets/AllImages";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedNumber from "../ui/AnimatedCount";

const intro = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.2,
      staggerChildren: 0.5,
      delayChildren: 0.4,
    },
  },
};

const introChildren = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, type: "spring", bounce: 0.4 },
  },
};

const StateCard = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <motion.div
      ref={ref}
      variants={intro}
      initial="hidden"
      animate={isInView ? "visible" : ""}
      className="grid grid-cols-1 sm:grid-cols-3 justify-items-center gap-5 my-16 overflow-hidden py-16"
    >
      {/* card 1  */}
      <motion.div
        variants={introChildren}
        className="bg-white w-full  flex flex-col justify-center items-center sm:justify-start sm:items-start py-4 sm:py-6 lg:py-8 px-3 sm:px-4 lg:px-5 border border-[#E6E7E6] shadow shadow-[#00000040] rounded-3xl"
      >
        <Image
          src={allIcons.resultIcon1}
          alt="Profile"
          width={0}
          height={0}
          className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mb-5"
        />
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-base-color mb-3">
          <AnimatedNumber value={87} duration={3000} />%
        </h3>
        <p className="text-[#6B6B6B] text-xl sm:text-2xl lg:text-3xl">
          Clients report lower healthcare costs.
        </p>
      </motion.div>
      {/* card 2  */}
      <motion.div
        variants={introChildren}
        className="bg-white w-full  flex flex-col justify-center items-center sm:justify-start sm:items-start py-4 sm:py-6 lg:py-8 px-3 sm:px-4 lg:px-5 border border-[#E6E7E6] shadow shadow-[#00000040] rounded-3xl"
      >
        <Image
          src={allIcons.resultIcon2}
          alt="Profile"
          width={0}
          height={0}
          className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mb-5"
        />
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-base-color mb-3">
          <AnimatedNumber value={92} duration={3000} />%
        </h3>
        <p className="text-[#6B6B6B] text-xl sm:text-2xl lg:text-3xl">
          Clients gain control over healthcare.
        </p>
      </motion.div>
      {/* card 3  */}
      <motion.div
        variants={introChildren}
        className="bg-white w-full  flex flex-col justify-center items-center sm:justify-start sm:items-start py-4 sm:py-6 lg:py-8 px-3 sm:px-4 lg:px-5 border border-[#E6E7E6] shadow shadow-[#00000040] rounded-3xl"
      >
        <Image
          src={allIcons.resultIcon3}
          alt="Profile"
          width={0}
          height={0}
          className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mb-5"
        />
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-base-color mb-3">
          <AnimatedNumber value={96} duration={3000} />%
        </h3>
        <p className="text-[#6B6B6B] text-xl sm:text-2xl lg:text-3xl">
          Client satisfaction rate for MVR services.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default StateCard;
