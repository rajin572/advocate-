import React from "react";
import Container from "../ui/Container";
import Image from "next/image";
import { AllAboutUs } from "../../../public/assets/AllImages";

const OurValues = () => {
  return (
    <div>
      <Container>
        {/*  Our Values */}
        {/* <div className="">
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
            <div className="">
              <h2 className="xl:text-4xl sm:text-3xl text2xl font-bold  mb-2">
                Our Values: Running Together Every Step of the Way
              </h2>
              <p className="text-base sm:text-lg text-justify text-[#4E4E4E] mb-5">
                At Clinivea, running together means our values are focused
                entirely on supporting you:
              </p>

              <div>
                <div className=" mb-4">
                  <p className="text-base-color text-base sm:text-lg lg:text-xl text-justify mb-2 font-semibold">
                    Patient-Centered Care
                  </p>
                  <p className="text-base sm:text-lg text-justify text-[#4E4E4E]">
                    You’re at the heart of everything we do. We’re here to
                    empower you to take charge of your health, confidently and
                    with the guidance you need.
                  </p>
                </div>
                <div className=" mb-4">
                  <p className="text-base-color text-base sm:text-lg lg:text-xl text-justify mb-2 font-semibold">
                    Proactive Vigilance
                  </p>
                  <p className="text-base sm:text-lg text-justify text-[#4E4E4E]">
                    We don’t just respond to health issues; we anticipate them.
                    Through continuous monitoring and personalized care
                    adjustments, we stay one step ahead to keep you on a steady,
                    healthy path.
                  </p>
                </div>
                <div className=" mb-4">
                  <p className="text-base-color text-base sm:text-lg lg:text-xl text-justify mb-2 font-semibold">
                    Seamless Integration
                  </p>
                  <p className="text-base sm:text-lg text-justify text-[#4E4E4E]">
                    Your health journey should be simple. By bringing together
                    your healthcare data, providers, and insights in one place,
                    we make sure everything is clear, accessible, and actionable
                    for you.
                    <br />
                    With Clinivea, you’re never navigating healthcare alone. We
                    run with you, every step of the way, so you can focus on
                    what matters most—your well-being.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 lg:mt-0 justify-self-center lg:justify-self-start order-first">
              <Image
                src={AllAboutUs.ourValues}
                alt="who-we-are"
                width={0}
                height={0}
                className="w-full h-[350px] sm:h-[450px] md:h-[500px] xl:h-[600px] rounded-xl"
              />
            </div>
          </section>
        </div> */}
        {/* Why Choose Us */}
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center gap-10  mt-5">
          <div className=" w-full order-first lg:order-last">
            <Image
              alt="about_us"
              src={AllAboutUs.whyChoseUs}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full max-h-[450px] rounded-xl"
            />
          </div>
          <div className="w-full">
            <h2 className="xl:text-4xl sm:text-3xl text2xl font-bold mb-5">
              Why Choose US:
            </h2>

            <p className="text-base sm:text-lg text-justify text-[#4E4E4E]">
              At Clinivea, <span className="font-skia">MedicoVigilance™</span>{" "}
              is our commitment to making healthcare truly personal. With a
              dedicated MedicoVigilance Representative (MVR) by your side, you
              have expert guidance and support at every step, from navigating
              treatment options to maximizing your healthcare benefits. Our Bio
              Design <span className="font-skia"> Interplay™</span> technology
              provides a complete, easy-to-understand view of your health,
              helping you make confident, informed decisions. With Clinivea,
              healthcare becomes seamless, supportive, and always centered on
              you—your well-being is our focus.
            </p>
          </div>
        </div>
        {/* Why Choose Us */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 lg:gap-20  py-10 mt-5">
          <div className=" w-fit order-first md:order-last">
            <Image
              alt="about_us"
              src={AllAboutUs.ourVision}
              width={0}
              height={0}
              sizes="100vw"
              className=" md:max-w-[250px] md:max-h-[200px] lg:max-w-[350px] lg:max-h-[320px] xl:max-w-[430px] xl:max-h-[400px]"
            />
          </div>
          <div className="w-full">
            <h2 className="xl:text-4xl sm:text-3xl text2xl font-bold mb-5">
              Our Value Framework:
            </h2>
            <p className="text-base sm:text-lg text-justify text-[#4E4E4E]">
              <span className="font-semibold">
                Our Value Framework - FOCUS IS{" "}
                <span className="font-skia">YOU™</span>
              </span>{" "}
              - empowering you to navigate your healthcare with{" "}
              <span className="font-semibold italic">
                Care, Clarity and{" "}
                <span className="font-skia">Confidence™.</span>
              </span>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OurValues;
