/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import React from 'react';
import img from "../../../images/img.png"
import Link from 'next/link';
import { LuPlayCircle } from 'react-icons/lu';
import { FaArrowRight } from 'react-icons/fa';
const ChrisAction = () => {
    return (
        <div className='my-24 px-4'>
            <div className='container mx-auto'>
                <div className='flex flex-col md:flex-row justify-between items-center gap-5'>
                    <Image
                        src={img}
                        alt="hero img"
                        height={0}
                        width={0}
                        className="h-48 md:h-[500px]  "
                    />
                    <div>
                        <h1 className='text-3xl md:text-6xl font-bold mb-10'>Together, We <br></br> Reflect <span className='text-primaryColor '>Christ's Love</span>  <br></br> Through Action</h1>
                        <p className='my-5'>From feeding the hungry to sheltering the homeless, we further the  <br></br> kingdom of Christ through acts of grace.</p>
                        <div className="flex flex-col md:flex-row justify-start items-center gap-4 mt-20">
                            <Link href="/component/why-we-exists">
                                <button className=" border-2  px-6 py-3 rounded-md shadow-lg">
                                    leran More
                                </button>
                            </Link>
                            <Link href="/signup">
                                <button className="flex justify-center items-center gap-2 bg-gradient-to-r from-red-900 to-red-700 text-white px-6 py-3 rounded-md shadow-lg">
                                    Join The Movement <FaArrowRight />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChrisAction;