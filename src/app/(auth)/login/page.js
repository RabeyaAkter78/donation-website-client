'use client'

import Image from 'next/image';
import React from 'react';
import logo from "../../../images/logo.png"
import { Checkbox, ConfigProvider, Form, Input } from 'antd';
import Link from 'next/link';
const Login = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    return (
        <div className=' my-40 '>


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
                    <div className='w-1/4'>
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
                                    <h1 className='text-3xl font-bold'>Welcome Back</h1>
                                    <p>Greetings, Stranger!</p>
                                </div>
                            </div>
                            <Form.Item
                                name="name"
                                label={<p className=" text-md">Full Name</p>}
                                style={{}}
                            >
                                <Input

                                    required
                                    style={{ padding: "6px" }}
                                    className=" text-md"
                                    placeholder="Your Name"
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
                            <div className='flex justify-between items-center'>
                                <Form.Item
                                    name="checkbox"
                                    style={{}}
                                >
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>
                                <Link href="/forgot-password">
                                    <p className="text-red-500 font-bold">Forgot Password</p>
                                </Link>
                            </div>
                            <Form.Item className="text-center">
                                <button
                                    className="text-center w-full  p-2 font-bold text-2xl bg-gradient-to-r from-red-900 to-red-700  text-white px-10 py-2 rounded-md shadow-lg"
                                    htmlType="submit"
                                >
                                    Login
                                </button>
                            </Form.Item>
                        </Form>
                        <Link href="/signup">
                            <p className='text-center my-10'> Dont Have a Accaount? <span className='text-red-500 underline'>SignUp</span> </p>
                        </Link>
                    </div>
                </ConfigProvider>
            </div>


        </div>
    );
};

export default Login;