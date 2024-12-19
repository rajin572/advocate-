/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { Suspense, useRef } from "react";
import Container from "../ui/Container";
import { AllImages } from "../../../public/assets/AllImages";
import { FaStar } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import TestimonialCard from "../ui/Testimonial/TestimonialCard";
import { motion, useInView } from "framer-motion";
import AnimatedUnderline from "../ui/AnimatedUnderline";
import Revel from "../ui/Animation/Revel";

const testimonials = [
  {
    id: 1,
    image: AllImages.testimonia1, // Replace with your actual image path
    name: "Laura S.",
    role: "Family Member",
    message:
      "Navigating my husband's chronic illness felt overwhelming until we found the right care. The caregivers have been with us every step of the way, ensuring we make informed decisions about his care.",
  },
  {
    id: 2,
    image: AllImages.testimonia2, // Replace with your actual image path
    name: "Sarah M.",
    role: "Home Care Specialist",
    message:
      "Providing care at home has been a rewarding experience. It's great to see families feel empowered and supported. Our services ensure patients are treated with dignity and respect, improving their quality of life.",
  },
  {
    id: 3,
    image: AllImages.testimonia3, // Replace with your actual image path
    name: "John D.",
    role: "Caregiver",
    message:
      "As a caregiver, I feel supported knowing that I have all the resources I need to care for my patient. The care plan and regular follow-ups ensure we're providing the best possible support.",
  },
  {
    id: 4,
    image: AllImages.testimonia4, // Replace with your actual image path
    name: "Emily R.",
    role: "Home Care Manager",
    message:
      "Managing home care services has been incredibly fulfilling. Our team works hard to ensure the comfort and safety of patients. It's wonderful to see the positive impact our care has on both patients and their families.",
  },
];

const Testimonial = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const videoRefs = useRef([]);

  const handlePlay = (index) => {
    // Pause all other videos
    videoRefs.current.forEach((video, i) => {
      if (i !== index && video) {
        video.pause();
      }
    });
  };
  return (
    <motion.div ref={ref} className="py-16 select-none overflow-hidden">
      <div className="mb-20">
        <Container>
          <div>
            <Revel delay={0}>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-bold text-secondary-color text-start">
                Testimonials or Reviews
              </h1>
            </Revel>
            <Revel delay={0.1}>
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-base-color w-full sm:w-[90%] lg:w-[80%]  xl:w-[80%] mt-7 text-start">
                At Advocate, we take pride in providing compassionate care that
                empowers individuals to live with dignity and independence. Your
                health, comfort, and happiness are at the heart of everything we
                do.
              </p>
            </Revel>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
            {[
              "/video/wayneTestimonial.mp4",
              "/video/andrewTestimonial.mp4",
            ].map((src, index) => (
              <Revel key={index} delay={0.1}>
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  controls
                  controlsList="nodownload"
                  className="w-full h-full rounded-lg"
                  onPlay={() => handlePlay(index)}
                >
                  <source src={src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Revel>
            ))}
          </div>
        </Container>
      </div>
      <div>
        <div className="mb-14 sm:mb-16 lg:mb-20">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[45px] font-semibold text-secondary-color mb-2 text-center">
            What Our Clients Say
          </h1>
          <AnimatedUnderline className="mx-auto" />
        </div>
      </div>
      <Container>
        <div className="relative">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="hidden lg:block w-full lg:w-1/5 min-h-[687px] bg-[#19363D]"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-[95%] mx-auto block lg:absolute lg:top-[50%] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%] lg:max-h-[450px]"
          >
            <Swiper
              slidesPerView={1}
              effect={"fade"}
              loop={true}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 1,
                },
                1024: {
                  slidesPerView: 1,
                },
              }}
              modules={[EffectFade, Navigation]}
              className="mySwiper px-5 md:px-10"
            >
              {testimonials.map((item) => (
                <SwiperSlide key={item.id}>
                  <TestimonialCard item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Custom Navigation Buttons */}
            <div className="custom-prev absolute top-[50%] left-4 z-10 cursor-pointer text-[#19363D] text-2xl bg-[#D3EBE7] rounded py-1 px-2 -ml-3 md:ml-0">
              <GoArrowLeft />
            </div>
            <div className="custom-next absolute top-[50%] right-4 z-10 cursor-pointer text-[#19363D] text-2xl bg-[#D3EBE7] rounded py-1 px-2 -mr-3 md:mr-0">
              <GoArrowRight />
            </div>
          </motion.div>
        </div>
      </Container>
    </motion.div>
  );
};

export default Testimonial;
