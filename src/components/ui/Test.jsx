/* eslint-disable react/no-unescaped-entities */
// pages/index.js
import Image from "next/image";

export default function Test() {
  return (
    <div className="font-sans bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-blue-500 h-screen flex items-center justify-center text-white px-6">
        <Image
          src="/path-to-your-image.jpg" // Replace with your actual image path
          alt="Care Image"
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-0 -z-10"
        />
        <div className="text-center z-10">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Compassionate Care, Right Where You Feel Most Comfortable
          </h1>
          <p className="text-lg mb-6">
            Providing exceptional care in the comfort of your home.
          </p>
          <button className="bg-white text-blue-500 py-2 px-6 rounded-lg text-xl font-semibold hover:bg-gray-200 transition">
            Request Care Needs Assessment
          </button>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-white py-6 shadow-md">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6">
          <div>
            <h2 className="text-2xl font-semibold">Contact Us</h2>
            <p className="text-gray-600">
              We're here to help you with your care needs.
            </p>
          </div>
          <div className="flex space-x-6">
            <div className="text-lg">
              <p>
                Phone:{" "}
                <a href="tel:+01730859583" className="text-blue-500">
                  01730 859 583
                </a>
              </p>
              <p>
                Mobile:{" "}
                <a href="tel:+07853132204" className="text-blue-500">
                  07853 132 204
                </a>
              </p>
            </div>
            <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* CQC Registration Logo */}
      <section className="py-6 bg-gray-100">
        <div className="max-w-screen-xl mx-auto text-center">
          <p className="text-lg mb-2">
            Proudly registered with CQC (Care Quality Commission)
          </p>
          <Image
            src="/path-to-cqc-logo.png" // Replace with actual logo path
            alt="CQC Logo"
            width={200}
            height={100}
          />
        </div>
      </section>
    </div>
  );
}
