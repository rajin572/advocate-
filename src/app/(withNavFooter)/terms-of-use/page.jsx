/* eslint-disable react/no-unescaped-entities */
import Container from "@/components/ui/Container";
import { Divider } from "antd";
import React from "react";

export const metadata = {
  title: "Terms of Use",
};

export default function TermsOfUse() {
  return (
    <div className="min-h-screen my-10 md:my-16">
      <Container>
        <div>
          <h1 className="text-secondary-color text-4xl md:text-4xl lg:text-5xl font-semibold mt-14">
            Terms of Use
          </h1>
          <Divider className="bg-[#1A1A1A] my-10" />
          {/* Introduction: */}
          <div className="md:text-lg lg:text-xl border border-secondary-color p-6 rounded-xl mb-5">
            <p className="text-base-color text-xl sm:text-2xl lg:text-3xl mb-5 text-justify leading-relaxed">
              Introduction:
            </p>
            <p className="text-base-color text-justify leading-relaxed mb-3">
              These Terms and Conditions ("Terms") govern your use of Advocate's
              services, including our website, mobile applications, and any
              other related services. By accessing or using Advocate, you agree
              to be bound by these Terms.
            </p>
            <p className="text-base-color text-justify leading-relaxed">
              If you do not agree with any part of these Terms, please refrain
              from using our services.
            </p>
          </div>
          {/* Use of Services & Eligibility: */}
          <div className="md:text-lg lg:text-xl border border-secondary-color p-6 rounded-xl mb-5">
            <div>
              <p className="text-base-color text-xl sm:text-2xl lg:text-3xl mb-5 text-justify leading-relaxed">
                Use of Services:
              </p>
              <p className="text-base-color text-justify leading-relaxed mb-3">
                Advocate provides home care services designed to support your
                health, comfort, and independence. Our services are not a
                replacement for medical care, and our carers are not authorized
                to diagnose, treat, or prescribe medications.
              </p>
            </div>
            <div className="my-10">
              <p className="text-base-color text-xl sm:text-2xl lg:text-3xl mb-5 text-justify leading-relaxed">
                Eligibility:
              </p>
              <p className="text-base-color text-justify leading-relaxed mb-3">
                You must be at least 18 years of age to use Advocate's services.
                By creating an account, you confirm that the information you
                provide is accurate and complete.
              </p>
            </div>
          </div>
          {/* Fees and Payment */}
          <div className="md:text-lg lg:text-xl border border-secondary-color p-6 rounded-xl mb-5">
            <p className="text-base-color text-xl sm:text-2xl lg:text-3xl mb-5 text-justify leading-relaxed">
              Fees and Payment
            </p>
            <p className="text-base-color text-justify leading-relaxed mb-5">
              Advocate offers various service plans, some of which require
              payment. By selecting a paid service, you agree to pay the
              applicable fees as described on our website.
            </p>
            <p className="text-base-color text-justify leading-relaxed mb-3">
              Subscription Terms:
            </p>
            <p className="text-base-color text-justify leading-relaxed mb-3">
              <span className="font-semibold">Billing:</span> Subscription fees
              are billed monthly or annually in advance, depending on your
              selected plan.
            </p>
            <p className="text-base-color text-justify leading-relaxed">
              <span className="font-semibold">Refund Policy:</span> Refunds are
              not provided for partial months of service or unused features.
            </p>
            <p className="text-base-color text-justify leading-relaxed">
              <span className="font-semibold">Cancellation:</span> You may
              cancel your subscription at any time. Cancellation will take
              effect at the end of the current billing cycle.
            </p>
          </div>
          {/* Client Responsibilities */}
          <div className="md:text-lg lg:text-xl border border-secondary-color p-6 rounded-xl mb-5">
            <p className="text-base-color text-xl sm:text-2xl lg:text-3xl mb-5 text-justify leading-relaxed">
              Client Responsibilities
            </p>
            <p className="text-base-color text-justify leading-relaxed mb-3">
              <span className="font-semibold">Accurate Information:</span> You
              agree to provide accurate and up-to-date information during
              account registration and throughout your use of our services.
            </p>
            <p className="text-base-color text-justify leading-relaxed">
              <span className="font-semibold">Appropriate Use:</span> Advocate's
              services are designed for personal care and support. Misuse of
              services for any unlawful or unauthorized purposes is strictly
              prohibited.
            </p>
          </div>
          {/* Limitation of Services */}
          <div className="md:text-lg lg:text-xl border border-secondary-color p-6 rounded-xl mb-5">
            <p className="text-base-color text-xl sm:text-2xl lg:text-3xl mb-5 text-justify leading-relaxed">
              Limitation of Services
            </p>
            <p className="text-base-color text-justify leading-relaxed mb-3">
              Advocate provides non-medical care services. We do not offer
              medical diagnosis, treatment, or emergency services. Always
              consult qualified healthcare professionals for medical advice and
              assistance.
            </p>
          </div>
          {/* Intellectual Property */}
          <div className="md:text-lg lg:text-xl border border-secondary-color p-6 rounded-xl mb-5">
            <p className="text-base-color text-xl sm:text-2xl lg:text-3xl mb-5 text-justify leading-relaxed">
              Intellectual Property
            </p>
            <p className="text-base-color text-justify leading-relaxed mb-3">
              All content on Advocate's website and materials, including text,
              graphics, and software, is the property of Advocate and is
              protected by intellectual property laws. Unauthorized use of our
              content is prohibited.
            </p>
          </div>
          {/* Termination */}
          <div className="md:text-lg lg:text-xl border border-secondary-color p-6 rounded-xl mb-5">
            <p className="text-base-color text-xl sm:text-2xl lg:text-3xl mb-5 text-justify leading-relaxed">
              Termination
            </p>
            <p className="text-base-color text-justify leading-relaxed mb-3">
              Advocate reserves the right to suspend or terminate your access to
              our services at any time if you violate these Terms or engage in
              inappropriate or unlawful activities.
            </p>
          </div>
          {/* Limitation of Liability */}
          <div className="md:text-lg lg:text-xl border border-secondary-color p-6 rounded-xl mb-5">
            <p className="text-base-color text-xl sm:text-2xl lg:text-3xl mb-5 text-justify leading-relaxed">
              Limitation of Liability
            </p>
            <p className="text-base-color text-justify leading-relaxed mb-3">
              Advocate is not liable for any damages or losses resulting from
              your use of our services. Our services are provided "as-is" and
              "as-available," without any guarantees or warranties.
            </p>
          </div>
          {/* Changes to Terms */}
          <div className="md:text-lg lg:text-xl border border-secondary-color p-6 rounded-xl mb-5">
            <p className="text-base-color text-xl sm:text-2xl lg:text-3xl mb-5 text-justify leading-relaxed">
              Changes to Terms
            </p>
            <p className="text-base-color text-justify leading-relaxed mb-3">
              Advocate reserves the right to modify these Terms at any time.
              Changes will be communicated through our website or other
              channels. Continued use of our services constitutes acceptance of
              the updated Terms.
            </p>
          </div>
          {/* Contact Us */}
          <div className="md:text-lg lg:text-xl border border-secondary-color p-6 rounded-xl mb-5">
            <p className="text-base-color text-xl sm:text-2xl lg:text-3xl mb-5 text-justify leading-relaxed">
              Contact Us
            </p>
            <p className="text-base-color text-justify leading-relaxed mb-3">
              If you have any questions about these Terms, please contact us at:
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
