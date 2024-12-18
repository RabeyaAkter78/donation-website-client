/* eslint-disable react/no-unescaped-entities */
"use client";

import React from 'react';
const HowItWorks = () => {
    return (
        <div className='bg-[#fdf4f4]'>
            <div className='container mx-auto py-24 px-4'>
                <div div className='flex flex-col justify-center items-center'>
                    <p className='border px-4 py-2 rounded-xl mb-10'>How It Works</p>
                    <h1 className='text-3xl font-bold mb-10'>How It Works</h1>
                    <p className='text-neutral-500'>Donating is simple and impactful. Start by browsing through a variety of vetted causes that resonate with you, from education and healthcare to environmental conservation. Once you've selected a cause, making a donation is quick and secure; you can choose to give a one-time contribution or set up recurring donations. After your donation is processed, you’ll receive a confirmation email and updates on how your support is making a difference. Join a community of compassionate donors, share your favorite causes, and help spread the word to amplify the impact of giving. Together, we can create meaningful change!</p>

                    <div className="w-full md:max-w-2xl mx-auto md:p-6">
                        <div className="flex items-center justify-around bg-red-50 py-8">
                            <div className="flex flex-col items-center text-center">
                                <div className="bg-red-600 text-white rounded-md px-4 py-2 mb-2">
                                    <span className="text-xl">✔</span>
                                </div>
                                <h4 className="font-semibold text-lg">Step 1: Partner</h4>
                                <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur.</p>
                            </div>

                            <div className="w-16 border-t-2 border-red-600" />

                            <div className="flex flex-col items-center text-center">
                                <div className="bg-red-600 text-white rounded-md px-4 py-2  mb-2">
                                    <span className="text-xl">✔</span>
                                </div>
                                <h4 className="font-semibold text-lg">Step 2: Serve</h4>
                                <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur.</p>
                            </div>

                            <div className="w-16 border-t-2 border-red-600" />

                            <div className="flex flex-col items-center text-center">
                                <div className="bg-red-600 text-white rounded-md px-4 py-2  mb-2">
                                    <span className="text-xl">■</span>
                                </div>
                                <h4 className="font-semibold text-lg">Step 3: Transform</h4>
                                <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
