"use client";
import { AllBlogs } from "../../../public/assets/AllImages";
import Container from "../ui/Container";
import { GoClock } from "react-icons/go";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import Link from "next/link";
import BlogCard from "../ui/Blog/BlogCard";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedUnderline from "../ui/AnimatedUnderline";

const blogData = [
  {
    image: AllBlogs.blog1,
    date: "June 23; 2024",
    title:
      "Clinivea’s MVR helped Sarah find the right oncologist, coordinated her appointments, and explained every step of her treatment plan. ",
  },
  {
    image: AllBlogs.blog2,
    date: "June 23; 2024",
    title:
      "Clinivea’s MVR helped Sarah find the right oncologist, coordinated her appointments, and explained every step of her treatment plan. ",
  },
  {
    image: AllBlogs.blog1,
    date: "June 23; 2024",
    title:
      "Clinivea’s MVR helped Sarah find the right oncologist, coordinated her appointments, and explained every step of her treatment plan. ",
  },
  {
    image: AllBlogs.blog2,
    date: "June 23; 2024",
    title:
      "Clinivea’s MVR helped Sarah find the right oncologist, coordinated her appointments, and explained every step of her treatment plan. ",
  },
  {
    image: AllBlogs.blog1,
    date: "June 23; 2024",
    title:
      "Clinivea’s MVR helped Sarah find the right oncologist, coordinated her appointments, and explained every step of her treatment plan. ",
  },
  {
    image: AllBlogs.blog2,
    date: "June 23; 2024",
    title:
      "Clinivea’s MVR helped Sarah find the right oncologist, coordinated her appointments, and explained every step of her treatment plan. ",
  },
];

const RecentVlog = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <motion.div ref={ref} className="py-16 select-none overflow-hidden">
      <div>
        <div className="">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[45px] font-semibold text-secondary-color mb-2 text-center">
            Recent Blogs
          </h1>
          <AnimatedUnderline className="mx-auto" />
        </div>
      </div>
      <Container>
        <motion.div
          initial={{ y: 300, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 300, opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="relative">
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 2.5,
                  spaceBetween: 20,
                },
              }}
              modules={[Navigation]}
              className="mySwiper  py-20  px-2"
            >
              {blogData.map((item, i) => (
                <SwiperSlide key={i}>
                  <BlogCard item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Custom Navigation Buttons */}
            <div className="custom-prev absolute top-[100%] right-28 z-10 cursor-pointer text-secondary-color bg-[#E6E7E6] rounded-full p-1 -mt-[40px]">
              <MdKeyboardArrowLeft className="size-8" />
            </div>
            <div className="custom-next absolute top-[100%] right-10 z-10 cursor-pointer text-secondary-color bg-[#E6E7E6] rounded-full p-1 -mt-[40px]">
              <MdKeyboardArrowRight className="size-8" />
            </div>
          </div>
        </motion.div>
      </Container>
    </motion.div>
  );
};

export default RecentVlog;
