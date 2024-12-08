"use client";

import Container from "../../ui/Container";
import {
  Button,
  Checkbox,
  ConfigProvider,
  Form,
  Input,
  Typography,
} from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";
import { AllImages } from "../../../../public/assets/AllImages";
import { buttonVariants } from "@/lib/variants";

const SignIn = () => {
  const navigate = useRouter();
  const onFinish = (values) => {
    // console.log("user:", values);
    navigate.push("/");
  };
  return (
    <div className="text-base-color">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center gap-10 min-h-screen py-10">
          <div className="">
            <Image
              src={AllImages.logo}
              alt="largeLogo"
              width={0}
              height={0}
              sizes="100vw"
              className="max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px] xl:max-w-[400px] mx-auto"
            />
          </div>
          <div className="w-full md:w-[80%] lg:w-full mx-auto">
            {/* -------- Sign In Page Header ------------ */}
            <div className="flex flex-col justify-center items-center">
              <div className="text-center mt-5 mb-8">
                <h1 className="text-3xl sm:text-4xl font-medium mb-4">
                  Login to Account!
                </h1>
                <p className="text-lg sm:text-xl mb-2 ">
                  Please enter your email and password to continue.
                </p>
              </div>
            </div>
            {/* -------- Form Start ------------ */}

            <Form
              layout="vertical"
              className="bg-transparent w-full"
              onFinish={onFinish}
            >
              <Typography.Title level={4} style={{ color: "#222222" }}>
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
                  className="py-2 px-3 text-xl bg-site-color border border-input-color text-base-color hover:bg-transparent hover:border-secoundary-color focus:bg-transparent focus:border-secoundary-color"
                />
              </Form.Item>
              <Typography.Title level={4} style={{ color: "#222222" }}>
                Password
              </Typography.Title>
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Password is Required",
                  },
                ]}
                name="password"
                className="text-base-color"
              >
                <Input.Password
                  placeholder="Enter your password"
                  className="py-2 px-3 text-xl bg-site-color border border-input-color text-base-color hover:bg-transparent hover:border-secoundary-color focus:bg-transparent focus:border-secoundary-color"
                />
              </Form.Item>
              <div className="flex justify-between items-center mt-10">
                <Checkbox className="">Remember password</Checkbox>
                <Link
                  href="/forget-password"
                  className="text-[#F5382C] underline"
                >
                  Forgot Password?
                </Link>
              </div>

              <Form.Item>
                <ConfigProvider
                  theme={{
                    components: {
                      Button: {
                        defaultHoverBg: "#013564",
                        defaultHoverColor: "#F3F3F3",
                      },
                    },
                  }}
                >
                  <motion.button
                    variants={buttonVariants}
                    whileTap="tap"
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 7,
                    }}
                    className="w-full py-3 border border-secondary-color hover:border-secondary-color text-xl text-primary-color bg-secondary-color font-semibold rounded-2xl mt-8"
                    htmltype="submit"
                  >
                    Sign In
                  </motion.button>
                </ConfigProvider>
              </Form.Item>
            </Form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SignIn;
