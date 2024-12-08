"use client";

import Image from "next/image";
import React from "react";

import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { AllImages } from "../../../public/assets/AllImages";

export function ServiceCard({ service }) {
  return (
    <CardContainer className="inter-var place-self-start">
      <CardBody
        className=" relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1]   
      !w-full lg:h-[750px] xl:h-[690px] rounded-xl p-8 border  "
      >
        <CardItem
          translateZ="30"
          className="text-lg sm:text-xl lg:text-2xl font-bold text-secondary-color dark:text-white"
        >
          {service?.title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="40"
          className="text-neutral-500 text-sm mt-2 dark:text-neutral-300"
        >
          {service?.defination}
        </CardItem>
        <CardItem translateZ="50" className="w-full mt-4">
          <Image
            src={service?.image}
            height="1000"
            width="1000"
            className="lg:h-[250px] w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex flex-col ">
          <CardItem translateZ="40" className="py-5">
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold uppercase tracking-wider text-secondary-color mb-1">
                  Key Services:
                </h4>
                <ul className="grid lg:grid-cols-2 gap-x-5 space-y-1">
                  {service?.servicesList?.map((service, idx) => (
                    <li
                      key={idx}
                      className="text-sm list-disc list-inside text-base-color"
                    >
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardItem>
          <CardItem translateZ="30" className="pb-3">
            <div>
              <h4 className="font-semibold uppercase tracking-wider text-secondary-color mb-1">
                Ideal For
              </h4>
              <div className="flex flex-wrap gap-2">
                {service?.idealFor?.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full text-xs bg-highlight-color text-secondary-color"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
