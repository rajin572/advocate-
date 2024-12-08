// services.js (or similar component)

import React from "react";
import { ServiceCard } from "./ServiceCard";
import Container from "../ui/Container";
import AnimatedUnderline from "../ui/AnimatedUnderline";
import ServiceTitle from "./ServiceTitle";
import Revel from "../ui/Animation/Revel";
import { AllImages } from "../../../public/assets/AllImages";

const services = [
  {
    image: AllImages.personalCare,
    title: "Personal Care Support",
    defination: "Assistance with daily living activities",
    description:
      "Assistance with daily living activities to maintain independence and dignity.",
    servicesList: [
      "Personal hygiene (bathing, grooming)",
      "Dressing and undressing",
      "Toileting and continence care",
      "Mobility support",
      "Feeding assistance",
      "Skin and oral care",
    ],
    idealFor: [
      "Elderly individuals",
      "People with physical disabilities",
      "Recovering patients",
      "Those with limited mobility",
    ],
  },
  {
    image: AllImages.medicalAssistance,
    title: "Medical Assistance",
    defination: "Professional medical support at home",
    description:
      "Professional medical support at home, ensuring patients receive high-quality healthcare.",
    servicesList: [
      "Medication management",
      "Wound care",
      "Vital signs monitoring",
      "Post-hospital discharge care",
      "Chronic condition management",
      "Administering prescribed treatments",
      "Coordination with healthcare professionals",
    ],
    idealFor: [
      "Patients with chronic conditions",
      "Post-surgical recovery",
      "Individuals managing complex health needs",
      "Those requiring regular medical monitoring",
    ],
  },
  {
    image: AllImages.companionshipCare,
    title: "Companionship Care",
    defination: " Emotional and social support",
    description:
      "Providing emotional and social support to combat loneliness and isolation.",
    servicesList: [
      "Conversation and social interaction",
      "Accompanying to appointments",
      "Shared activities and hobbies",
      "Meal preparation and sharing",
      "Light housekeeping",
      "Mental stimulation activities",
      "Technology assistance",
    ],
    idealFor: [
      "Elderly living alone",
      "Individuals experiencing loneliness",
      "People with limited social networks",
      "Those needing mental stimulation",
    ],
  },
  {
    image: AllImages.dementiaCare,
    title: "Specialized Dementia Care",
    defination: "Tailored support for individuals with cognitive impairments",
    description:
      "Tailored support for individuals with cognitive impairments, ensuring safety and comfort.",
    servicesList: [
      "Memory care techniques",
      "Safe environment management",
      "Routine maintenance",
      "Cognitive stimulation activities",
      "Behavioral support",
      "Communication strategies",
      "Family counseling and support",
    ],
    idealFor: [
      "Alzheimer's patients",
      "Individuals with various forms of dementia",
      "Families needing specialized support",
      "Early to advanced stage cognitive impairment management",
    ],
  },
  {
    image: AllImages.respiteCare,
    title: "Respite Care",
    defination: "Temporary relief for primary caregivers",
    description:
      "Temporary relief for primary caregivers, ensuring continuous care without burnout.",
    servicesList: [
      "Short-term comprehensive care",
      "Overnight support",
      "Weekend care packages",
      "Flexible scheduling",
      "Full-day or half-day options",
      "Emergency care support",
    ],
    idealFor: [
      "Family caregivers needing a break",
      "Families managing long-term care",
      "Preventing caregiver burnout",
      "Providing temporary comprehensive support",
    ],
  },
];

const ServicesPage = () => {
  return (
    <div className="pt-16 sm:pt-20 lg:pt-24 xl:pt-28 pb-16 overflow-hidden">
      <Container>
        <ServiceTitle />
        <div className="grid lg:grid-cols-2 items-stretch justify-items-stretch gap-8">
          {services.map((service, index) => (
            <Revel key={index} duration={1.5} className="w-full p-2">
              <ServiceCard service={service} />
            </Revel>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ServicesPage;
