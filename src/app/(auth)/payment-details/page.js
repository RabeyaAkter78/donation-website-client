'use client'

import Image from 'next/image';
import React from 'react';
import logo from "../../../images/logo.png"
import { Checkbox, ConfigProvider, Form, Input } from 'antd';
import Link from 'next/link';
const PaymentDetails = () => {
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
                    <div className='w-full md:w-1/4 mx-5'>
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
                                    <h1 className='text-3xl font-bold'>Payment Details</h1>
                                    <p className='text-red-500'>You’ll be charged $5 on this day every month.</p>
                                </div>
                            </div>
                            <Form.Item
                                name="donation"
                                label={<p className=" text-md">Enter Donation</p>}
                            >
                                <Input

                                    required
                                    style={{ padding: "6px" }}
                                    className=" text-md"
                                    placeholder="$ 0.00"
                                />
                            </Form.Item>
                            <div className='flex justify-between items-center gap-3'>
                                <div>
                                    <Form.Item
                                        name="expiration date"
                                        label={<p className=" text-md">Expiration Date</p>}
                                        style={{}}
                                    >
                                        <Input
                                            required
                                            style={{ padding: "6px" }}
                                            className=" text-md"
                                            placeholder="MM/YY"
                                        />
                                    </Form.Item>
                                </div>
                                <div>
                                    <Form.Item
                                        name="expiration date"
                                        label={<p className=" text-md">Security Code</p>}
                                        style={{}}
                                    >
                                        <Input
                                            required
                                            style={{ padding: "6px" }}
                                            className=" text-md"
                                            placeholder="CVC"
                                        />
                                    </Form.Item>
                                </div>
                            </div>
                            <div className='justify-between items-center gap-3'>
                                <div>
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
                                </div>

                            </div>
                            <p className='pb-5'>By providing your card details, you allow Jesus Loves You to charge your card for future payments in accordance with their terms.</p>

                            <Form.Item className="text-center">
                                <button
                                    className="text-center w-full  p-2 font-bold text-2xl bg-gradient-to-r from-red-900 to-red-700  text-white px-10 py-2 rounded-md shadow-lg"
                                    type="submit"
                                >
                                    Join Jesus Loves You
                                </button>
                            </Form.Item>
                        </Form>

                    </div>
                </ConfigProvider>
            </div>
        </div>
    );
};

export default PaymentDetails;