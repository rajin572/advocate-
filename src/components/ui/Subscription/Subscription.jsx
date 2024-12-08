"use client";
import { useInView } from "framer-motion";
import SubscriptionCard from "./SubscriptionCard";
import { useRef } from "react";

const plans = [
  {
    plan: "Explore",
    price: "$0",
    features: [
      "Limited Care Coordination",
      "1:1 Audio conference with MVR for general support ",
      "Appointment reminders",
      "Basic insurance assistance",
    ],
  },
  {
    plan: "Essential",
    price: "$49.95",
    features: [
      "Personalized Care Coordination",
      "1:1 Video or Audio conference with dedicated MVR",
      "Virtual or In-Person Appointment Attendance",
      "Insurance advocacy & Bill Management and Payment Assistance",
    ],
  },
  {
    plan: "Premium",
    price: "$99.95",
    features: [
      "Personalized Care Coordination",
      "1:1 Video or Audio conference with dedicated MVR",
      "Virtual or In-Person Appointment Attendance",
      "Insurance advocacy & Bill Management and Payment Assistance",
    ],
  },
];

const Subscription = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center items-center md:items-stretch  gap-5"
    >
      {plans.map((plan, index) => {
        const initialMotion =
          index === 0
            ? {
                opacity: 0,
                x: -200,
                transition: {
                  duration: 3,
                },
              }
            : index === 2
            ? {
                opacity: 0,
                x: 200,
                transition: {
                  duration: 3,
                },
              }
            : {
                opacity: 0,
                y: 200,
                transition: {
                  duration: 3,
                },
              };

        const visibleMotion = {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            type: "spring",
            // stiffness: 110,

            duration: 3,
            delay: 0.2,
          },
        };

        return (
          <SubscriptionCard
            key={index}
            plan={plan}
            index={index}
            isInView={isInView}
            initialMotion={initialMotion}
            visibleMotion={visibleMotion}
          />
        );
      })}
    </div>
  );
};

export default Subscription;
