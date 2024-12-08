"use client";
import React, { useState } from "react";
import Container from "../ui/Container";
import Image from "next/image";
import { AllAboutUs } from "../../../public/assets/AllImages";

const OurApproach = () => {
  const [ourMedicoVigilanceShow, setOurMedicoVigilanceShow] = useState(false);
  return (
    <div className="relative pb-12 sm:pb-20 text-base-color overflow-hidden">
      {/* <h2 className="lg:text-5xl sm:text-4xl text-3xl font-bold text-center mb-10">
        Our Approach: Bio Design <span className="font-skia">Interplay™</span>
      </h2>
      <Container>
        <div className="flex flex-col items-center gap-5 sm:gap-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center gap-10 mt-16">
            <div className=" w-full">
              <Image
                alt="about_us"
                src={AllAboutUs.ourApproach1}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full max-h-[400px] rounded-xl"
              />
            </div>
            <div className="w-full ">
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-base-color font-semibold mb-5">
                Closed Ended <span className="font-skia">Mapping™</span>:
              </h2>
              <p className="w-full text-base sm:text-lg lg:text-xl">
                Closed Ended <span className="font-skia">Mapping™</span> helps
                us start with a solid foundation, where we organize all the key
                details: your health records, medications, test
                results—everything that builds a clear picture of where you are
                today.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center gap-10 mt-5">
            <div className=" w-full order-first lg:order-last">
              <Image
                alt="about_us"
                src={AllAboutUs.ourApproach2}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full max-h-[400px] rounded-xl"
              />
            </div>
            <div className="w-full ">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-base-color  mb-5">
                Open Ended <span className="font-skia">Mapping™</span>:
              </h2>
              <p className="w-full text-base sm:text-lg lg:text-xl">
                Open Ended <span className="font-skia">Mapping™</span> lets us
                dig deeper, where our MedicoVigilance Representatives (MVRs)
                look ahead to identify potential challenges, allowing us to
                tailor support based on what’s most important to you.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center gap-10  mt-5">
            <div className=" w-full">
              <Image
                alt="about_us"
                src={AllAboutUs.ourApproach3}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full max-h-[400px] rounded-xl"
              />
            </div>
            <div className="w-full ">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-base-color  mb-5">
                Journey Mapping:
              </h2>
              <p className="w-full text-base sm:text-lg lg:text-xl">
                Journey Mapping ties it all together. With a clear path forward,
                we connect you to the right specialists, set up continuous
                monitoring, and ensure that every decision is guided and
                informed. This isn’t just healthcare—it’s a partnership where
                you’re never running alone. Together, we simplify the complex,
                allowing you to navigate healthcare confidently.
              </p>
            </div>
          </div>
        </div>
      </Container> */}
      {/* Our MedicoVigilance Representatives (MVRs)  */}
      <div className="pb-20 bg-[#FFF4F3] ">
        <Container>
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
            {/* Text Section */}
            <div className="">
              <h2 className="xl:text-4xl sm:text-3xl text2xl font-bold mb-5">
                Our MedicoVigilance{" "}
                <span className="font-skia">Representatives™</span> (MVRs)
              </h2>

              {/* Conditionally rendered text based on 'showMore' state */}
              <p className="text-[#4E4E4E] mb-4 text-base sm:text-lg text-justify">
                <span>
                  {ourMedicoVigilanceShow ? (
                    <>
                      <span>
                        Our MedicoVigilance{" "}
                        <span className="font-skia">Representatives™</span>{" "}
                        (MVRs) are highly experienced doctors, nurse
                        practitioners, and physician assistants dedicated to
                        ensuring that{" "}
                        <span className="font-semibold">
                          FOCUS IS <span className="font-skia">YOU™.</span>
                        </span>{" "}
                        MVRs serve as your personal healthcare advocates,
                        translating complex information, simplifying decisions,
                        and aligning your care with your unique needs. From
                        coordinating with specialists to managing insurance and
                        attending appointments, they ensure you’re never alone
                        in your healthcare journey. With decades of experience,
                        Clinivea’s MVRs bring{" "}
                        <span className="font-semibold italic">
                          Care, Clarity and Confidence
                        </span>{" "}
                        to every step—so you can make informed choices and feel
                        empowered.
                      </span>
                    </>
                  ) : (
                    <span>
                      Our MedicoVigilance{" "}
                      <span className="font-skia">Representatives™</span> (MVRs)
                      are highly experienced doctors, nurse practitioners, and
                      physician assistants dedicated to ensuring that{" "}
                      <span className="font-semibold">
                        FOCUS IS <span className="font-skia">YOU™.</span>
                      </span>{" "}
                    </span>
                  )}
                </span>{" "}
                <button
                  onClick={() => setOurMedicoVigilanceShow((prev) => !prev)}
                  className="text-secondary-color font-semibold hover:underline"
                >
                  {ourMedicoVigilanceShow ? "See Less..." : "See More..."}
                </button>
              </p>
            </div>

            {/* Image Section */}
            <div className="mt-6 lg:mt-0 justify-self-center lg:justify-self-end order-first lg:order-last">
              <Image
                src={AllAboutUs.medicoVigilance}
                alt="who-we-are"
                className="w-full max-h-[600px] lg:h-[450px] rounded-xl"
              />
            </div>
          </section>
        </Container>
      </div>
    </div>
  );
};

export default OurApproach;
