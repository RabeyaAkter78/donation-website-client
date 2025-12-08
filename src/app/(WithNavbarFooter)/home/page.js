"use client";

/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { FaUsers, FaHandsHelping, FaProjectDiagram } from "react-icons/fa";
import { LuPlayCircle } from "react-icons/lu";
import hero from "../../../images/hero.jpg";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
    const heroRef = useRef(null);
    const statsRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            gsap.from(".hero-content > *", {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.3,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top 80%", 
                },
            });

            gsap.from(".stats", {
                y: 80,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: statsRef.current,
                    start: "top 90%",
                },
            });

        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={heroRef} className="relative">

            <div className="relative h-screen w-full">
                <Image
                    src={hero}
                    alt="hero img"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>

            <div className="hero-content flex flex-col justify-center items-center absolute top-20 md:top-[40%] w-full px-4 text-center space-y-4">
                <span className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    25th Anniversary
                </span>
                <h1 className="text-2xl md:text-6xl font-bold text-white leading-tight">
                    Nothing Can Separate Us From the{" "}
                    <span className="text-primaryColor">Love of God</span>
                </h1>
                <p className="text-white text-base md:text-lg max-w-2xl">
                    Inspired by Romans 8:38-39, we are on a mission to spread Christ's love through acts of kindness.
                </p>
                <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-4">
                    <Link href="/component/how-it-works">
                        <button className="flex justify-center items-center gap-2 border-2 text-white px-6 py-3 rounded-md shadow-lg hover:scale-105 transition">
                            How Jesus Loves You Works <LuPlayCircle />
                        </button>
                    </Link>
                    <Link href="/signup">
                        <button className="bg-gradient-to-r from-red-900 to-red-700 text-white px-6 py-3 rounded-md shadow-lg hover:scale-105 transition">
                            Join Jesus Loves You
                        </button>
                    </Link>
                </div>
            </div>

            <div ref={statsRef} className="stats px-2 absolute bottom-0 w-full bg-red-700 text-white py-4 flex flex-col md:flex-row gap-5 justify-around items-center">

                <div className="flex justify-center items-center border p-3 rounded-xl gap-2 hover:scale-105 transition hover:shadow-lg shadow-red-900 ">
                    <FaUsers className="bg-white text-primaryColor p-2 h-10 w-10 rounded-xl" />
                    <span className="text-2xl font-bold">10,000+</span>
                    <span className="text-sm">Lives Impacted</span>
                </div>

                <div className="flex justify-center items-center border p-3 rounded-xl gap-2 hover:scale-105 transition hover:shadow-lg shadow-red-900">
                    <FaProjectDiagram className="bg-white text-primaryColor p-2 h-10 w-10 rounded-xl" />
                    <span className="text-2xl font-bold">50+</span>
                    <span className="text-sm">Projects</span>
                </div>

                <div className="flex justify-center items-center border p-3 rounded-xl gap-2 hover:scale-105 transition hover:shadow-lg shadow-red-900">
                    <FaHandsHelping className="bg-white text-primaryColor p-2 h-10 w-10 rounded-xl" />
                    <span className="text-2xl font-bold">300+</span>
                    <span className="text-sm">Volunteers United in Faith</span>
                </div>

            </div>
        </div>
    );
};

export default HomePage;
