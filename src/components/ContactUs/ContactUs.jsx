/* eslint-disable react/no-unescaped-entities */
"use client";
import Container from "../ui/Container";
import { Checkbox, Form, Input, Typography } from "antd";
import { buttonVariants } from "@/lib/variants";
import Image from "next/image";
import { allIcons } from "../../../public/assets/AllImages";
import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiPhoneCall } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import AnimatedUnderline from "../ui/AnimatedUnderline";
import { toast } from "sonner";
import { contactUs } from "@/app/actions/ContactUs";

const ContactUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [form] = Form.useForm();
  const TextArea = Input.TextArea;
  const iframeSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51568.197885735746!2d-115.20764229540139!3d36.11755643298104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c4383428d4eb%3A0x43e2195d0c26834c!2sLas%20Vegas%20Strip%2C%20NV%2C%20USA!5e0!3m2!1sen!2sbd!4v1733224046577!5m2!1sen!2sbd";

  const onFinish = async (values) => {
    const toastId = toast.loading("Message Sending...");

    try {
      const data = await contactUs({ ...values });
      if (data.success) {
        toast.success("Message Send Successfully", {
          id: toastId,
          duration: 2000,
        });
        form.resetFields(); // Reset the form fields after successful submission
      } else {
        toast.error(data.error, {
          id: toastId,
          duration: 2000,
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong", {
        id: toastId,
        duration: 2000,
      });
    }
  };
  return (
    <motion.div ref={ref} className="py-20 overflow-hidden">
      <div>
        <div className="mb-5">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[45px] font-semibold text-secondary-color mb-2 text-center">
            Contact Us
          </h1>
          <AnimatedUnderline className="mx-auto" />
        </div>
        <p className="text-xl sm:text-2xl lg:text-3xl text-center text-base-color mb-16">
          A Advocate expert will reach out to discuss your needs.
        </p>
      </div>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-3 items-center">
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -200, opacity: 0 }}
            transition={{ duration: 1 }}
            className="w-full h-full flex lg:justify-center lg:items-center mb-10 mt-0 lg:mb-0 lg:-mt-20"
          >
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl  text-base-color mb-10">
                Let's Chat
              </h1>
              <div className="flex items-center gap-3 mb-3">
                <FiPhoneCall className="text-secondary-color text-lg  sm:text-xl lg:text-3xl" />
                <p className="text-base-color sm:text-lg lg:text-xl">
                  +1 (212) 444-3956
                </p>
              </div>
              <div className="flex items-center gap-3">
                <TfiEmail className="text-secondary-color text-lg  sm:text-xl lg:text-3xl" />
                <p className="text-base-color sm:text-lg lg:text-xl">
                  clients@advocate.com
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: 200, opacity: 0 }}
            transition={{ duration: 1 }}
            className=""
          >
            <Form
              form={form}
              layout="vertical"
              className=""
              onFinish={onFinish}
            >
              {/* Full Name Input */}
              <div>
                <Typography.Title level={5} style={{ color: "#222222" }}>
                  Full Name
                </Typography.Title>
                <Form.Item
                  name="name"
                  className="text-base-color"
                  rules={[
                    {
                      required: true,
                      message: "Full Name is Required",
                    },
                  ]}
                >
                  <Input
                    placeholder="Enter your full name"
                    className="py-2 px-3 text-lg bg-[#F7F8F8] border-2 border-[#E6E7E6] text-base-color "
                  />
                </Form.Item>
              </div>
              {/* Email Input */}
              <div>
                <Typography.Title level={5} style={{ color: "#222222" }}>
                  Email
                </Typography.Title>
                <Form.Item
                  name="email"
                  className="text-base-color"
                  rules={[
                    {
                      required: true,
                      message: "Email is Required",
                    },
                  ]}
                >
                  <Input
                    placeholder="Enter your email"
                    className="py-2 px-3 text-lg bg-[#F7F8F8] border-2 border-[#E6E7E6] text-base-color "
                  />
                </Form.Item>
              </div>
              {/* subject Input */}
              <div>
                <Typography.Title level={5} style={{ color: "#222222" }}>
                  Subject
                </Typography.Title>
                <Form.Item
                  name="subject"
                  className="text-base-color"
                  rules={[
                    {
                      required: true,
                      message: "Subject is Required",
                    },
                  ]}
                >
                  <Input
                    placeholder="Enter your Subject"
                    className="py-2 px-3 text-lg bg-[#F7F8F8] border-2 border-[#E6E7E6] text-base-color "
                  />
                </Form.Item>
              </div>
              {/* Message Input */}
              <div>
                <Typography.Title level={5} style={{ color: "#222222" }}>
                  Message
                </Typography.Title>
                <Form.Item
                  name="message"
                  className="text-base-color"
                  rules={[
                    {
                      required: true,
                      message: "Message is Required",
                    },
                  ]}
                >
                  <TextArea
                    placeholder="Enter your Message"
                    rows={4}
                    className="py-2 px-3 text-lg bg-[#F7F8F8] border-2 border-[#E6E7E6] text-base-color "
                  />
                </Form.Item>
              </div>
              {/* <div className="flex justify-start items-center mt-10">
                <Form.Item
                  name="agreement"
                  valuePropName="checked"
                  rules={[
                    {
                      validator: (_, value) =>
                        value
                          ? Promise.resolve()
                          : Promise.reject(
                              new Error(
                                "Please agree to the terms and conditions"
                              )
                            ),
                    },
                  ]}
                >
                  <Checkbox>
                    I agree to Clinivea's{" "}
                    <Link href="/terms-of-use" className="text-secondary-color">
                      Terms of Use
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/privacy-policy"
                      className="text-secondary-color"
                    >
                      Privacy Policy
                    </Link>
                  </Checkbox>
                </Form.Item>
              </div> */}

              <Form.Item className="lg:col-span-2">
                <motion.button
                  variants={buttonVariants}
                  whileTap="tap"
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 7,
                  }}
                  className="w-full py-3 border border-secondary-color hover:border-secondary-color text-xl text-primary-color bg-secondary-color font-semibold rounded-lg"
                  htmltype="submit"
                >
                  Submit
                </motion.button>
              </Form.Item>
            </Form>
          </motion.div>
        </div>
        <div className="rounded-lg overflow-hidden mt-10">
          <div
            style={{
              width: "100%",
              height: "450px",
            }}
          >
            <iframe
              title="Magnetic Plus Location"
              src={iframeSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </Container>
    </motion.div>
  );
};

export default ContactUs;
