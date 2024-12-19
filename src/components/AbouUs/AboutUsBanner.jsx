"use client";
import Image from "next/image";
import React, { Suspense, useEffect, useRef, useState } from "react";
import Container from "../ui/Container";
import { AllAboutUs } from "../../../public/assets/AllImages";
import { FaRegCirclePlay } from "react-icons/fa6";
import { FaRegPauseCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import Revel from "../ui/Animation/Revel";

const AboutUsBanner = () => {
  const [whoWeAreShowMore, setWhoWeAreShowMore] = useState(false);
  const [whatWeDoShowMore, setWhatWeDoShowMore] = useState(false);
  const [playVideo, setPlayVideo] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    if (playVideo) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
  }, [playVideo]);

  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.25, ease: "easeInOut" }}
        className="relative  h-full lg:h-[65vh] object-cover flex items-center justify-center select-none"
      >
        <Suspense>
          <Suspense>
            <video
              autoPlay
              ref={videoRef}
              muted
              loop
              className="w-full h-full object-cover"
            >
              <source src="/video/overview.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Suspense>
        </Suspense>
        <div className="absolute inset-0 bg-gradient-to-b from-[#D9D9D91A] via-[#D9D9D91A] to-[#1F0505DD]"></div>

        <div className="absolute w-full h-full z-10 flex items-end">
          <Container>
            <div className="flex justify-between items-center gap-2 mb-5">
              <div className="">
                <Revel>
                  <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-semibold text-start text-primary-color ">
                    About Us
                  </h1>
                </Revel>
              </div>

              {playVideo ? (
                <Revel>
                  <FaRegPauseCircle
                    onClick={() => setPlayVideo(false)}
                    className="lg:text-4xl md:text-3xl sm:text-2xl text-xl text-primary-color cursor-pointer"
                  />
                </Revel>
              ) : (
                <Revel>
                  <FaRegCirclePlay
                    onClick={() => setPlayVideo(true)}
                    className="lg:text-4xl md:text-3xl sm:text-2xl text-xl text-primary-color cursor-pointer"
                  />
                </Revel>
              )}
            </div>
          </Container>
        </div>
      </motion.div>
      <div className="overflow-hidden">
        <motion.div
          initial={{ y: 500, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="bg-secondary-color py-5 sm:py-8 lg:py-12 "
        >
          <Container>
            <div>
              <h3 className="text-primary-color xl:text-4xl sm:text-3xl text-2xl font-bold mb-5">
                AdvocateCare: Compassion, Every Step
              </h3>
              <p className="text-primary-color text-base sm:text-lg lg:text-xl">
                At Advocate,{" "}
                <span className="font-semibold">YOUR CARE IS OUR MISSION</span>{" "}
                means personalized home care, centered on your needs. Our
                promise to provide compassionate, professional carers who ensure
                you feel supported and comfortable. With dedicated AdvocateCare
                Representatives (ACRs) by your side, we empower you and your
                loved ones to navigate care with{" "}
                <span className="font-semibold italic">
                  trust, dignity, and peace of mind.
                </span>
              </p>
            </div>
          </Container>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUsBanner;
