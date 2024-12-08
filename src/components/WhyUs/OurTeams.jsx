"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { allIcons, AllImages } from "../../../public/assets/AllImages";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import Image from "next/image";
import Container from "../ui/Container";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdWork,
} from "react-icons/md";
import { BsPersonVcardFill } from "react-icons/bs";
import Link from "next/link";
import AnimatedUnderline from "../ui/AnimatedUnderline";

const caregivers = [
  {
    id: 1,
    image: AllImages.team1, // Using AllImages.profile to refer to the image
    name: "Sarah Ahmed",
    designation: "Lead Caregiver",
    experience: 8,
  },
  {
    id: 2,
    image: AllImages.team2, // Using another image from AllImages
    name: "Mohammad Rahman",
    designation: "Senior Caregiver",
    experience: 5,
  },
  {
    id: 3,
    image: AllImages.team3, // Using another image from AllImages
    name: "Nabila Khan",
    designation: "Home Health Aide",
    experience: 3,
  },
  {
    id: 4,
    image: AllImages.team4, // Using AllImages.profile again
    name: "Imran Ali",
    designation: "Personal Care Assistant",
    experience: 4,
  },
  {
    id: 5,
    image: AllImages.team1, // Using a different image
    name: "Leila Smith",
    designation: "Care Coordinator",
    experience: 6,
  },
  {
    id: 6,
    image: AllImages.team2, // Using a different image
    name: "James Patterson",
    designation: "Certified Nursing Assistant",
    experience: 7,
  },
  {
    id: 7,
    image: AllImages.team3, // Using a different image
    name: "Emily Carter",
    designation: "Caregiver",
    experience: 2,
  },
  {
    id: 8,
    image: AllImages.team4, // Using a different image
    name: "Daniel Wilson",
    designation: "Personal Support Worker",
    experience: 5,
  },
];

const OurTeams = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <motion.div ref={ref} className="overflow-hidden pt-14 sm:pt-16 lg:pt-20 ">
      <Container>
        <div className="mb-10">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[40px] font-semibold text-secondary-color text-center mb-2">
            Meet the Team
          </h1>
          <AnimatedUnderline className="mx-auto" />
        </div>

        <motion.div
          animate={isInView ? { y: 0, opacity: 1 } : { y: 400, opacity: 0 }}
          transition={{ duration: 1.5 }}
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
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1400: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
              }}
              modules={[Navigation]}
              className="mySwiper  py-10"
            >
              {caregivers.map((caregiver, i) => (
                <SwiperSlide key={i}>
                  <div className="max-w-xs mx-auto rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                    {/* Image Section */}

                    <Image
                      src={caregiver.image} // Replace with your image path
                      alt={caregiver.name} // Dynamic alt text for accessibility
                      className="rounded-t-lg w-full h-72 object-cover "
                    />

                    {/* Card Content */}
                    <div className="p-6">
                      <h3 className="text-xl  font-semibold text-base-color mb-2">
                        {caregiver.name}
                      </h3>
                      <div className="flex items-center gap-1  mb-2">
                        <BsPersonVcardFill className="text-secondary-color size-4" />
                        <p className="text-gray-600 text-sm ">
                          {caregiver.designation}
                        </p>
                      </div>
                      <div className="flex items-center gap-1  mb-5">
                        <MdWork className="text-secondary-color size-4" />
                        <p className="text-gray-600 text-sm">
                          {caregiver.experience} years of experience.
                        </p>
                      </div>
                      <div className="flex items-center justify-center gap-7 mb-0">
                        <div className="">
                          <Link href="">
                            <Image
                              src={allIcons.insta}
                              alt="play_store"
                              width={0}
                              height={0}
                              sizes="100vw"
                              className="h-[20px] w-[20px] hover:scale-110 duration-300"
                            />
                          </Link>
                        </div>
                        <div className="">
                          <Link href="">
                            <Image
                              src={allIcons.linkedIn}
                              alt="play_store"
                              width={0}
                              height={0}
                              sizes="100vw"
                              className="h-[20px] w-[20px] hover:scale-110 duration-300"
                            />
                          </Link>
                        </div>
                        <div className="">
                          <Link href="">
                            <Image
                              src={allIcons.facebook}
                              alt="play_store"
                              width={0}
                              height={0}
                              sizes="100vw"
                              className="h-[20px] w-[20px] hover:scale-110 duration-300"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Custom Navigation Buttons */}
            <div className="select-none custom-prev absolute top-[0%] right-28 z-10 cursor-pointer text-secondary-color bg-highlight-color rounded-full p-1 -mt-[20px]">
              <MdKeyboardArrowLeft className="size-8" />
            </div>
            <div className="select-none custom-next absolute top-[0%] right-10 z-10 cursor-pointer text-secondary-color bg-highlight-color rounded-full p-1 -mt-[20px]">
              <MdKeyboardArrowRight className="size-8" />
            </div>
          </div>
        </motion.div>
      </Container>
    </motion.div>
  );
};

export default OurTeams;
