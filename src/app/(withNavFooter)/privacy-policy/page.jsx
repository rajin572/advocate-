/* eslint-disable react/no-unescaped-entities */
import Container from "@/components/ui/Container";
import { Divider } from "antd";
import React from "react";

export const metadata = {
  title: "Privacy Policy",
};
export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen my-10 md:my-16">
      <Container>
        <div>
          <h1 className="text-secondary-color text-4xl md:text-4xl lg:text-5xl font-semibold mt-14">
            Privacy Policy
          </h1>
          <Divider className="bg-secondary-color my-10" />
          <div className="md:text-lg lg:text-xl border border-secondary-color p-6 rounded-xl mb-5">
            <p className="text-secondary-color text-xl sm:text-2xl lg:text-3xl mb-5 text-justify leading-relaxed">
              Introduction:
            </p>
            <p className="text-base-color text-justify leading-relaxed mb-3">
              At Advocate, your privacy is critically important to us. We are
              committed to protecting the confidentiality and security of your
              personal and health-related information. This Privacy Policy
              outlines how we collect, use, disclose, and safeguard your
              information when you use our services.
            </p>
            <p className="text-base-color text-justify leading-relaxed">
              By accessing or using our services, you consent to the collection
              and use of your personal data as described in this policy.
            </p>
          </div>
          {/* Information We Collect */}
          <div className="md:text-lg lg:text-xl border border-secondary-color p-6 rounded-xl mb-5">
            <div>
              <p className="text-secondary-color text-xl sm:text-2xl lg:text-3xl mb-5 text-justify leading-relaxed">
                Information We Collect:
              </p>
              <p className="text-base-color text-justify leading-relaxed mb-3">
                We collect several types of information to provide and improve
                our services, including:
              </p>
              <p className="text-base-color text-justify leading-relaxed">
                Personal Information:
              </p>
              <ul className="text-base-color text-justify leading-relaxed list-disc list-inside">
                <li>Full name, date of birth, gender</li>
                <li>
                  Contact information, such as email address, phone number, and
                  home address
                </li>
                <li>Payment information (for paid services)</li>
                <li>Emergency contact information</li>
              </ul>
            </div>
            <div className="my-10">
              <p className="text-secondary-color text-xl sm:text-2xl lg:text-3xl mb-5 text-justify leading-relaxed">
                Healthcare Information:
              </p>
              <ul className="text-base-color text-justify leading-relaxed list-disc list-inside">
                <li>
                  Medical history, medications, and health concerns (as provided
                  by you)
                </li>
                <li>Healthcare provider information</li>
                <li>Insurance details</li>
                <li>
                  Appointment details and communications related to your care
                </li>
              </ul>
            </div>
            <div className="my-5">
              <p className="text-secondary-color text-xl sm:text-2xl lg:text-3xl mb-5 text-justify leading-relaxed">
                Technical Information:
              </p>
              <ul className="text-base-color text-justify leading-relaxed list-disc list-inside">
                <li>
                  IP addresses, browser type, and usage data for website
                  functionality and improvement
                </li>
                <li>Cookies to store and track your preferences</li>
              </ul>
            </div>
          </div>
          {/* How We Use Your Information */}
          <div className="md:text-lg lg:text-xl border border-secondary-color p-6 rounded-xl mb-5">
            <p className="text-secondary-color text-xl sm:text-2xl lg:text-3xl mb-5 text-justify leading-relaxed">
              How We Use Your Information
            </p>
            <p className="text-base-color text-justify leading-relaxed mb-3">
              We use the information we collect for the following purposes:
            </p>
            <p className="text-base-color text-justify leading-relaxed mb-3">
              <span className="font-semibold">Service Provision:</span> To
              connect you with professional carers, assist in care coordination,
              and manage appointments.
            </p>
            <p className="text-base-color text-justify leading-relaxed">
              <span className="font-semibold">Communication:</span> To send
              appointment reminders, care updates, and important notifications.
            </p>
            <p className="text-base-color text-justify leading-relaxed">
              <span className="font-semibold">Billing:</span> To process
              payments for services and manage subscriptions.
            </p>
            <p className="text-base-color text-justify leading-relaxed">
              <span className="font-semibold">Service Improvement:</span> To
              enhance the functionality of our platform and improve your
              experience.
            </p>
          </div>
          {/* Sharing Your Information */}
          <div className="md:text-lg lg:text-xl border border-secondary-color p-6 rounded-xl mb-5">
            <p className="text-secondary-color text-xl sm:text-2xl lg:text-3xl mb-5 text-justify leading-relaxed">
              Sharing Your Information
            </p>
            <p className="text-base-color text-justify leading-relaxed mb-3">
              We may share your personal and healthcare information in the
              following ways:
            </p>
            <p className="text-base-color text-justify leading-relaxed mb-3">
              <span className="font-semibold">With Your Consent:</span> We share
              information with care providers, insurance companies, or family
              members only with your explicit consent.
            </p>
            <p className="text-base-color text-justify leading-relaxed">
              <span className="font-semibold">Service Providers:</span> We may
              share information with trusted third parties (e.g., payment
              processors) to facilitate services.
            </p>
            <p className="text-base-color text-justify leading-relaxed">
              <span className="font-semibold">Legal Compliance:</span> We may
              disclose information if required by law or to comply with legal
              processes.
            </p>
          </div>
          {/* Data Security */}
          <div className="md:text-lg lg:text-xl border border-secondary-color p-6 rounded-xl mb-5">
            <p className="text-secondary-color text-xl sm:text-2xl lg:text-3xl mb-5 text-justify leading-relaxed">
              Data Security
            </p>
            <p className="text-base-color text-justify leading-relaxed mb-3">
              We employ robust safeguards to protect your personal data from
              unauthorized access and ensure confidentiality. While we strive to
              secure your data, no method of transmission over the internet is
              completely secure.
            </p>
          </div>
          {/* Your Rights */}
          <div className="md:text-lg lg:text-xl border border-secondary-color p-6 rounded-xl mb-5">
            <p className="text-secondary-color text-xl sm:text-2xl lg:text-3xl mb-5 text-justify leading-relaxed">
              Your Rights
            </p>
            <ul className="text-base-color text-justify leading-relaxed list-disc list-inside">
              <li>Access your personal and care-related information.</li>
              <li>
                Request corrections to inaccurate or incomplete information.
              </li>
              <li>Withdraw consent for data usage.</li>
              <li>Delete your account at any time.</li>
            </ul>
          </div>
          {/* Changes to This Policy */}
          <div className="md:text-lg lg:text-xl border border-secondary-color p-6 rounded-xl mb-5">
            <p className="text-secondary-color text-xl sm:text-2xl lg:text-3xl mb-5 text-justify leading-relaxed">
              Changes to This Policy
            </p>
            <p className="text-base-color text-justify leading-relaxed mb-3">
              We may update this Privacy Policy periodically. Any changes will
              be communicated on our website with an updated "Effective Date."
            </p>
          </div>
          {/* Contact Us */}
          <div className="md:text-lg lg:text-xl border border-secondary-color p-6 rounded-xl mb-5">
            <p className="text-secondary-color text-xl sm:text-2xl lg:text-3xl mb-5 text-justify leading-relaxed">
              Contact Us:
            </p>
            <p className="text-base-color text-justify leading-relaxed mb-3">
              If you have any questions or concerns about this Privacy Policy,
              please contact us:
            </p>
            <ul className="text-base-color text-justify leading-relaxed list-disc list-inside">
              <li>Email: support@advocatecare.com</li>
              <li>Phone: 01730 859 583</li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}
