"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { FaArrowRight, FaStar } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import user1 from "../../../images/user1.jpg"
import user2 from "../../../images/user2.jpg"
import user3 from "../../../images/user3.jpg"
const testimonials = [
    {
        "_id": "1",
        "name": "Verimillion D. White",
        "image": user1,
        "location": "United States",
        "testimonial": "The service provided has transformed my experience. I felt valued and supported throughout the entire process.",
        "additionalComments": "Their team is incredibly responsive and attentive. I highly recommend them to anyone looking for quality assistance."
    },
    {
        "_id": "2",
        "name": "Mai Sakurajima",
        "image": user2,
        "location": "United States",
        "testimonial": "I appreciate how transparent they are with their processes. It’s refreshing to see a company prioritize honesty.",
        "additionalComments": "The results I received exceeded my expectations, and I will definitely be coming back for future needs."
    },
    {
        "_id": "3",
        "name": "Alex Johnson",
        "image": user3,
        "location": "United States",
        "testimonial": "The experience was seamless from start to finish. I felt supported at every step and truly valued as a customer.",
        "additionalComments": "They have set a new standard for what customer service should be. I am very impressed!"
    },
    {
        "_id": "4",
        "name": "Alex Johnson",
        "image": user3,
        "location": "United States",
        "testimonial": "The experience was seamless from start to finish. I felt supported at every step and truly valued as a customer.",
        "additionalComments": "They have set a new standard for what customer service should be. I am very impressed!"
    }
];

const Testimonials = () => {
    return (
        <div className="container mx-auto py-10">
            <div className='flex justify-between items-center mb-16'  >
                <div>
                    <button className='px-4 py-2 bg-primaryColor text-white rounded-xl'>Testimopnials </button>
                    <h1 className='text-3xl font-bold my-5'>What Our Community Says</h1>
                    <p className='text-neutral-500'>Donec ac odio tempor orci dapibus ultrices. Ut lectus arcu bibendum at varius vel pharetra vel. Enim sed faucibus turpis in eu mi bibendum.</p>
                </div>

            </div>
            <Swiper
                slidesPerView={1}
                spaceBetween={20}
                pagination={{ clickable: true }}
                modules={[Pagination]}
                className="mySwiper"
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {testimonials.map((testimonial) => (
                    <SwiperSlide key={testimonial._id}>
                        <div className="p-6 bg-neutral-50 shadow-md rounded-lg h-80">
                            <div className="flex justify-start items-center mb-4 text-[#f59e0b]">
                                {Array(5).fill().map((_, i) => (
                                    <FaStar key={i} />
                                ))}
                            </div>
                            <p className="italic text-gray-700 mb-4">{testimonial.testimonial}</p>
                            <p className="text-gray-600 text-sm mb-4">{testimonial.additionalComments}</p>
                            <div className="flex justify-start items-center gap-5 mt-10">
                                <div>
                                    <Image
                                        src={testimonial.image}
                                        alt="User"
                                        width={40}
                                        height={40}
                                        className="h-16 w-16 rounded-full"
                                    />
                                </div>
                                <div>
                                    <p className="font-semibold">{testimonial.name}</p>
                                    <p className="text-gray-500 text-sm">{testimonial.location}</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Testimonials;
