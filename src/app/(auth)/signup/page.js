'use client'

import Image from 'next/image';
import React from 'react';
import logo from "../../../images/logo.png"
import { Checkbox, ConfigProvider, Form, Input } from 'antd';
import Link from 'next/link';
const SignUp = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    return (
        <div className='my-20 md:my-40 '>


            <div className=' flex justify-center items-center '>
                <ConfigProvider
                    theme={{
                        components: {
                            Form: {
                                borderRadius: 0,
                            },
                            Input: {
                                borderRadius: 10,
                                hoverBorderColor: "red"
                            },
                            Checkbox: {
                                colorBgSolid: "red"
                            }
                        },
                    }}
                >
                    <div className='w-full md:w-1/4 px-5'>
                        <Form
                            name="contact"
                            initialValues={{ remember: false }}
                            onFinish={onFinish}
                            layout="vertical"
                            className=" py-10 mx-4 md:mx-0 px-6 md:px-10 rounded-2xl   "
                        >
                            <div className="mb-4 text-center">
                                <div className='my-10 flex flex-col justify-center items-center'>
                                    <Image src={logo} alt='logo ' height={0} width={0}></Image>
                                </div>
                                <div className='my-10 flex flex-col justify-center items-center'>
                                    <h1 className='text-3xl font-bold'>Introduce Yourself</h1>
                                    <p className='text-md text-neutral-500'>Greetings, Stranger!</p>
                                </div>
                            </div>
                            {/* <div className='flex flex-col md:flex-row justify-between items-center gap-2'>
                                <Form.Item
                                    name="frist-name"
                                    label={<p className="text-md">Frist Name</p>}
                                >
                                    <Input

                                        required
                                        style={{ padding: "6px", }}
                                        className=" text-md"
                                        placeholder="John"
                                    />
                                </Form.Item>
                                <Form.Item
                                    name="second-name"
                                    label={<p className=" text-md">Last Name</p>}
                                    style={{}}
                                >
                                    <Input

                                        required
                                        style={{ padding: "6px" }}
                                        className=" text-md"
                                        placeholder="Your Name"
                                    />
                                </Form.Item>
                            </div> */}
                            <Form.Item
                                name="name"
                                label={<p className="text-md">Name</p>}
                            >
                                <Input

                                    required
                                    style={{ padding: "6px", }}
                                    className=" text-md"
                                    placeholder="John Doe"
                                />
                            </Form.Item>
                            <Form.Item
                                name="email"
                                label={<p className=" text-md">Password</p>}
                                style={{}}
                            >
                                <Input
                                    required
                                    style={{ padding: "6px" }}
                                    className=" text-md"
                                    placeholder="jhondoe@gmail.com"
                                />
                            </Form.Item>

                            <Form.Item
                                name="password"
                                label={<p className=" text-md">Password</p>}
                                style={{}}
                            >
                                <Input
                                    required
                                    style={{ padding: "6px" }}
                                    className=" text-md"
                                    placeholder="********"
                                />
                            </Form.Item>
                            <Form.Item
                                name="country"
                                label={<p className=" text-md">Country</p>}
                                style={{}}
                            >
                                <Input
                                    required
                                    style={{ padding: "6px" }}
                                    className=" text-md"
                                    placeholder="United States"
                                />
                            </Form.Item>


                            <Form.Item
                                name="checkbox"
                            >
                                <Checkbox>I agree to Terms & Conditions</Checkbox>
                            </Form.Item>
                            <Form.Item
                                name="checkbox"
                            >
                                <Checkbox>Subscribe for latest updates</Checkbox>
                            </Form.Item>

                            <Form.Item className="text-center">
                                <button
                                    className="text-center w-full  p-2 font-bold text-2xl bg-gradient-to-r from-red-900 to-red-700  text-white px-10 py-2 rounded-md shadow-lg"
                                    htmlType="submit"
                                >
                                    SignUp
                                </button>
                            </Form.Item>
                        </Form>
                        <Link href="/login">
                            <p className='text-center my-10'> Already Have an Accaount? <span className='text-red-500 underline'>Login</span> </p>
                        </Link>
                    </div>
                </ConfigProvider>
            </div >


        </div >
    );
};

export default SignUp;