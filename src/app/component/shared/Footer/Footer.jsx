"use client";
import React, { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { Button, ConfigProvider, Form, Input } from "antd";
import Link from "next/link";
import dynamic from "next/dynamic";
import Image from "next/image";
import logo from "../../../../images/logo.png"
import { Color } from "antd/es/color-picker";
function Footer() {
    const [selected, setSelected] = useState(null);
    const [form] = Form.useForm();
    const labels = [
        { name: "Join Us", link: "" },
        { name: "Donate", link: "" },
        { name: "Our Blog", link: "/component/our-blog " },
        { name: "Faqs", link: "" },
        { name: "How it works", link: "" },
        { name: "Why we exist", link: "/component/why-we-exists" },
        { name: "What we fund", link: "/component/what-we-found " },
    ];
    const impact = [
        { name: "Projects", link: "/component/all-project" },
        { name: "Grants", link: "/component/grants" },
        { name: "Donations", link: "/component/donation" },
        { name: "Privacy", link: "" },
        { name: "How it works", link: "" },
        { name: "Terms & Conditions", link: "" },
    ];
    const finance = [
        { name: "Open Ledger", link: "/component/ledger" },
        { name: "Budgets", link: "/component/budget" },
        { name: "Running Costs", link: "/component/fixed-costs" },
        { name: "Policies", link: "/component/policy" },
    ];

    const onFinish = async (values) => {
        const { email } = values;
        // console.log(values);
        form.resetFields();
    };

    const onFinishFailed = (errorInfo) => {
        // console.log("Failed:", errorInfo);
    };

    return (
        <div className="">
            <ConfigProvider
                theme={{
                    components: {
                        Form: {
                            itemMarginBottom: 20,
                        },
                        Input: {
                            borderRadius: 5,
                        },
                        "Button": {
                            "defaultBg": "#d22f2f",
                            "defaultBorderColor": "#d22f2f",
                            "defaultColor": "rgb(255,255,255)"
                        }
                    },
                }}
            >
                <div className="container mx-auto">
                    <div className=" py-10  flex flex-col lg:flex-row justify-between lg:items-center gap-5 px-5">
                        <div className="">
                            <Image
                                src={logo}
                                alt="logo"
                                height={0}
                                width={0}
                                className="w-24 h-24 rounded-full mb-5"
                            />

                            <Form
                                form={form}
                                name="basic"
                                labelCol={{ xs: 24, sm: 24, md: 24 }}
                                wrapperCol={{ xs: 24, sm: 24, md: 24 }}
                                style={{ maxWidth: "100%", width: "100%" }}
                                initialValues={{ remember: true }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                autoComplete="off"
                            >
                                <Form.Item
                                    name="email"
                                    rules={[
                                        { required: true, message: "Please input your Email!" },
                                    ]}
                                >
                                    <div className="flex justify-start items-center gap-2">
                                        <Input placeholder="Email" />
                                        <Button block htmlType="submit" className="bg-red-500 text-white px-4 py-2 rounded-xl">
                                            Subscribe
                                        </Button>
                                    </div>
                                </Form.Item>


                            </Form>

                        </div>

                        <div className="flex flex-col justify-start items-start">
                            <p className="text-xl font-semibold">Get Involved </p>
                            {labels.map((item, index) => (
                                <Link href={item.link} key={index}>
                                    <button
                                        className={`  py-1 md:text-lg ${selected === index
                                            ? "border-0 border-b-2 border-green-700"
                                            : ""
                                            }`}
                                    >
                                        {item.name}
                                    </button>
                                </Link>
                            ))}
                        </div>

                        <div className="flex flex-col justify-start items-start">
                            <p className="text-xl font-semibold">Impact</p>
                            {impact.map((item, index) => (
                                <Link href={item.link} key={index}>
                                    <button
                                        className={`  py-1 md:text-lg ${selected === index
                                            ? "border-0 border-b-2 border-green-700"
                                            : ""
                                            }`}
                                    >
                                        {item.name}
                                    </button>
                                </Link>
                            ))}
                        </div>
                        <div className="flex flex-col justify-start items-start">
                            <p className="text-xl font-semibold">Finance</p>
                            {finance.map((item, index) => (
                                <Link href={item.link} key={index}>
                                    <button
                                        className={`  py-1 md:text-lg ${selected === index
                                            ? "border-0 border-b-2 border-green-700"
                                            : ""
                                            }`}
                                    >
                                        {item.name}
                                    </button>
                                </Link>
                            ))}
                        </div>

                    </div>
                </div>
                <hr />
                <div className="flex justify-between items-center container mx-auto text-neutral-400">
                    <div className="flex flex-col gap-5 justify-center items-start">

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 justify-center">
                            <FaFacebookF className="w-5 h-5 " />
                            <FaTwitter className="w-5 h-5 " />
                            <FaLinkedinIn className="w-5 h-5 " />
                            <BsInstagram className="w-5 h-5 " />
                        </div>
                    </div>
                    <p className="text-center my-5  pb-5">
                        Copyright 2024© Jesus Loves You, All Rights Reserved.
                    </p>
                </div>

                {/* <BackTop /> */}
            </ConfigProvider>
        </div>
    );
}

// export default Footer;
export default dynamic(() => Promise.resolve(Footer), {
    ssr: false,
});
