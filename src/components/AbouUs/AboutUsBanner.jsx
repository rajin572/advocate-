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
        className="relative h-[65vh] flex items-center justify-center select-none"
      >
        <Suspense>
          <Suspense>
            <video
              autoPlay
              ref={videoRef}
              muted
              loop
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/video/about-us-banner.mp4" type="video/mp4" />
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
                  <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-semibold text-start text-secondary-color ">
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
          className="bg-[#DF3328] py-10 sm:py-12 lg:py-16 "
        >
          <Container>
            <h3 className="text-primary-color xl:text-4xl sm:text-3xl text-2xl font-bold mb-5">
              <span className="font-skia">MedicoVigilance™:</span> We Run
              Together
            </h3>
            <p className="text-primary-color text-base sm:text-lg lg:text-xl">
              At Clinivea,{" "}
              <span className="font-semibold">
                FOCUS IS
                <span className="font-skia"> YOU™</span>
              </span>{" "}
              means personalized care, every step of the way.{" "}
              <span className="font-skia">MedicoVigilance™</span>
              is our commitment to making sure you’re never alone in your
              healthcare journey. With dedicated MedicoVigilance Representatives
              (MVRs) by your side, we guide and empower you to make informed
              decisions with{" "}
              <span className="font-semibold italic">
                care, clarity and confidence.
              </span>
            </p>
          </Container>
        </motion.div>
      </div>
      {/* Who We Are  */}
      <div className="py-20">
        <Container>
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Text Section */}
            <div className="">
              <h2 className="lg:text-5xl sm:text-4xl text-3xl font-bold mb-4">
                Who We Are
              </h2>

              {/* Conditionally rendered text based on 'showMore' state */}
              <p className="text-[#4E4E4E] mb-4 text-base sm:text-lg text-justify">
                <span>
                  {whoWeAreShowMore ? (
                    <span>
                      At Clinivea,
                      <span className="font-medium">
                        {" "}
                        FOCUS IS <span className="font-skia"> YOU™ </span>
                      </span>{" "}
                      means we’re here for every step of your healthcare
                      journey. Our dedicated MedicoVigilance Representatives
                      (MVRs) who are doctors, physician assistants, and nurse
                      practitioners translate complex medical details,
                      coordinate care, and empower you to make informed choices
                      with{" "}
                      <span className="font-semibold italic">
                        care, clarity and confidence.
                      </span>{" "}
                      With Clinivea, you’re never alone.{" "}
                      <span className="font-medium">
                        {" "}
                        FOCUS IS <span className="font-skia"> YOU™ </span>
                      </span>{" "}
                      making healthcare truly about your needs.
                    </span>
                  ) : (
                    <span>
                      At Clinivea,
                      <span className="font-medium">
                        {" "}
                        FOCUS IS <span className="font-skia"> YOU™ </span>
                      </span>{" "}
                      means we’re here for every step of your healthcare
                      journey. Our dedicated MedicoVigilance Representatives
                      (MVRs) who are doctors, physician assistants, and nurse
                      practitioners translate complex
                    </span>
                  )}
                </span>{" "}
                <button
                  onClick={() => setWhoWeAreShowMore((prev) => !prev)}
                  className="text-secondary-color font-semibold hover:underline"
                >
                  {whoWeAreShowMore ? "See Less..." : "See More..."}
                </button>
              </p>
            </div>

            {/* Image Section */}
            <div className="mt-6 lg:mt-0 justify-self-center lg:justify-self-end w-full">
              <Image
                src={AllAboutUs.whoWeAre}
                alt="who-we-are"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full rounded"
              />
            </div>
          </section>
        </Container>
      </div>
      {/* What We Do  */}
      <div className="py-20 bg-[#FFF4F3]">
        <Container>
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Text Section */}
            <div className="">
              <h2 className="lg:text-5xl sm:text-4xl text-3xl font-bold mb-2">
                What We Do:
              </h2>
              <p className="mb-5 text-lg sm:text-xl lg:text-2xl font-medium">
                <span className="font-skia">MedicoVigilance™</span>
              </p>

              {/* Conditionally rendered text based on 'showMore' state */}
              <p className="text-[#4E4E4E] mb-4 text-base sm:text-lg text-justify">
                <span>
                  {whatWeDoShowMore ? (
                    <span>
                      <span>
                        We’re redefining healthcare with{" "}
                        <span className="font-skia">MedicoVigilance™ </span>—a
                        service dedicated to making healthcare clear, simple,
                        and empowering. Your MedicoVigilance Representative
                        (MVR) is your personal guide, helping you make confident
                        choices, handling all coordination, and advocating for
                        your needs every step of the way.
                        <ol type="1" className="list-decimal list-inside my-3">
                          <li className="mb-1">
                            <span className="font-semibold">
                              {" "}
                              Personalized Support & Clarity
                            </span>{" "}
                            - Your MVR knows your history, clarifies options,
                            and ensures every decision feels informed and
                            empowering.
                          </li>
                          <li className="mb-1">
                            <span className="font-semibold">
                              {" "}
                              Seamless Care Coordination
                            </span>{" "}
                            - From appointments to records, our Bio Design
                            Interplay™ technology organizes everything in one
                            place, so you can focus on feeling well.
                          </li>
                          <li className="mb-1">
                            <span className="font-semibold">
                              {" "}
                              Ongoing Advocacy & Empowerment
                            </span>{" "}
                            - Your MVR supports you through every process and
                            discussion, always prioritizing you.
                          </li>
                        </ol>
                        <span>
                          With Clinivea, the{" "}
                          <span className="font-medium">
                            FOCUS IS <span className="font-skia">YOU™</span>
                          </span>{" "}
                          - your healthcare journey is centered around your
                          well-being, simplifying each step towards a healthier
                          life.
                        </span>
                      </span>
                    </span>
                  ) : (
                    <span>
                      We’re redefining healthcare with{" "}
                      <span className="font-skia">MedicoVigilance™ </span>—a
                      service dedicated to making healthcare clear, simple, and
                      empowering. Your MedicoVigilance Representative (MVR) is
                      your personal guide, helping you make confident choices,
                      handling all coordination, and advocating for your needs
                      every step of the way.
                    </span>
                  )}
                </span>{" "}
                <button
                  onClick={() => setWhatWeDoShowMore((prev) => !prev)}
                  className="text-secondary-color font-semibold hover:underline"
                >
                  {whatWeDoShowMore ? "See Less..." : "See More..."}
                </button>
              </p>
            </div>

            {/* Image Section */}
            <div className="mt-6 lg:mt-0 justify-self-center lg:justify-self-start order-last lg:order-first w-full">
              <Image
                src={AllAboutUs.whatWeDo}
                alt="who-we-are"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full rounded"
              />
            </div>
          </section>
        </Container>
      </div>
    </div>
  );
};

export default AboutUsBanner;
