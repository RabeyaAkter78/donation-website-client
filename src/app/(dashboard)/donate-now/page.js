import Link from 'next/link';
import React from 'react';
import { FaApple, FaCreditCard, FaCross, FaGoogle, FaPaypal } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';

const DonateNow = () => {
    return (
        <div className='max-w-screen-lg mx-auto my-20 px-4  md:px-0'>
            <div className='shadow-sm border rounded-2xl py-10 px-5 my-20'>
                <div className='border rounded-2xl p-5'>
                    <p className='text-neutral-400'>Enter Donation</p>
                    <div className=' flex justify-between items-center'>
                        <p className='text-2xl font-bold'>$1,200</p>
                        <FaX />
                    </div>
                </div>
                <div className='flex flex-col md:flex-row justify-between items-center gap-5 mt-4 mb-6'>
                    <div className='w-full border px-6 py-2 rounded-3xl'>
                        $50
                    </div>
                    <div className='w-full border px-6 py-2 rounded-3xl'>
                        $100
                    </div>
                    <div className='w-full border px-6 py-2 rounded-3xl'>
                        $150
                    </div>
                    <div className='w-full border px-6 py-2 rounded-3xl'>
                        $500
                    </div>
                    <div className='w-full border px-6 py-2 rounded-3xl'>
                        $800
                    </div>
                    <div className='w-full border px-6 py-2 rounded-3xl'>
                        $1000
                    </div>
                </div>
                <div className='my-6'>
                    <p className='text-2xl font-bold my-3'>Payment Method</p>
                    <div className='p-5 border border-neutral-400 rounded-2xl mb-5'>
                        <div className='flex justify-start items-center gap-2 '>
                            <FaApple></FaApple>
                            <p className='font-bold '> Apple Pay</p>
                        </div>
                    </div>

                    <div className='p-5 border border-neutral-400 rounded-2xl mb-5'>
                        <div className='flex justify-start items-center gap-2 '>
                            <FaGoogle />
                            <p className='font-bold '> Google Pay</p>
                        </div>
                    </div>
                    <div className='p-5 border border-neutral-400 rounded-2xl mb-5'>
                        <div className='flex justify-start items-center gap-2 '>
                            <FaPaypal />
                            <p className='font-bold '> Paypal</p>
                        </div>
                    </div>
                    <div className='p-5 border border-neutral-400 rounded-2xl mb-5'>
                        <div className='flex justify-start items-center gap-2 '>
                            <FaCreditCard />
                            <p className='font-bold '>Credit Crad</p>
                        </div>
                    </div>
                </div>

                <div className='my-6'>
                    <p className='text-xl font-semibold'>Overview</p>
                    <div className='flex justify-between items-center '>
                        <p>Your donation</p>
                        <p>$ 1,200.00</p>
                    </div>
                    <div className='flex justify-between items-center '>
                        <p>Additional Taxes</p>
                        <p>$ 0</p>
                    </div>
                    <div className='flex justify-between items-center '>
                        <p>Total</p>
                        <p>$ 0</p>
                    </div>
                </div>
                <Link href=''>
                    <button className='py-2 w-full rounded-2xl bg-primaryColor text-white'> Donate Now</button>
                </Link>

            </div>
        </div>
    );
};

export default DonateNow;