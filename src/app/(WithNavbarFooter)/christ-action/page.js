"use client";

/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import img from "../../../images/1.png";
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ChrisAction = () => {
    
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            // Timeline animation triggered by scroll
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 75%",   // when section enters viewport
                    end: "bottom 20%",
                    scrub: 1,           // smooth syncing with scroll
                }
            });

            tl.from(".hero-img", {
                x: -100,
                opacity: 0,
                scale: 0.9,
                duration: 1.2,
                ease: "power3.out",
            });

            tl.from(".hero-headline", {
                y: 80,
                opacity: 0,
                duration: 1.3,
                ease: "power3.out",
            }, "-=0.6");

            tl.from(".hero-text", {
                y: 60,
                opacity: 0,
                duration: 1.2,
                ease: "power2.out",
            }, "-=0.5");

            tl.from(".hero-buttons > *", {
                y: 40,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power2.out",
            }, "-=0.4");

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="my-24 px-4">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">

                    {/* IMAGE */}
                    <div>
                        <Image
                            src={img}
                            alt="hero image"
                            width={520}
                            height={520}
                            className="hero-img rounded-lg"
                        />
                    </div>

                    {/* TEXT */}
                    <div>
                        <h1 className="hero-headline text-3xl md:text-6xl font-bold mb-6 leading-tight">
                            Together, We <br />
                            Reflect <span className="text-primaryColor">Christ's Love</span> <br />
                            Through Action
                        </h1>

                        <p className="hero-text my-5 text-gray-600 text-lg leading-relaxed">
                            From feeding the hungry to sheltering the homeless,
                            we further the kingdom of Christ through acts of grace.
                        </p>

                        <div className="hero-buttons flex flex-col md:flex-row gap-4 mt-10">
                            <Link href="/component/why-we-exists">
                                <button className="border-2 px-6 py-3 rounded-md shadow-md hover:scale-105 transition">
                                    Learn More
                                </button>
                            </Link>

                            <Link href="/signup">
                                <button className="flex items-center gap-2 bg-gradient-to-r from-red-900 to-red-700 text-white px-6 py-3 rounded-md shadow-md hover:scale-105 transition">
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
