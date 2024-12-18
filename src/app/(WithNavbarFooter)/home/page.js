/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { FaUsers, FaHandsHelping, FaProjectDiagram } from "react-icons/fa";
import hero from "../../../images/hero.jpg";
import Link from "next/link";
import { LuPlayCircle } from "react-icons/lu";
const HomePage = () => {
    return (
        <div className="relative">
            <div className="relative h-screen w-full">
                <Image
                    src={hero}
                    alt="hero img"
                    layout="fill"
                    objectFit="cover"
                    className="h-screen object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>

            <div className="flex flex-col justify-center items-center absolute top-20 md:top-[40%] w-full px-4 text-center space-y-4">
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
                        <button className="flex justify-center items-center gap-2 border-2 text-white px-6 py-3 rounded-md shadow-lg">
                            How Jesus Loves You Works <LuPlayCircle />
                        </button>
                    </Link>
                    <Link href="/signup">
                        <button className="bg-gradient-to-r from-red-900 to-red-700 text-white px-6 py-3 rounded-md shadow-lg">
                            Join Jesus Loves You
                        </button>
                    </Link>
                </div>
            </div>

            <div className="px-2 absolute bottom-0 w-full bg-red-700 text-white py-4 flex flex-col md:flex-row gap-5 justify-around items-center">

                <div className="flex justify-center items-center border p-3 rounded-xl gap-2">
                    <FaUsers className="bg-white text-primaryColor p-2 h-10 w-10 rounded-xl" />
                    <span className="text-2xl font-bold">10,000+</span>
                    <span className="text-sm">Lives Impacted</span>
                </div>
                <div className="flex justify-center items-center border p-3 rounded-xl gap-2">
                    <FaProjectDiagram className="bg-white text-primaryColor p-2 h-10 w-10 rounded-xl" />
                    <span className="text-2xl font-bold">50+</span>
                    <span className="text-sm">Projects</span>
                </div>
                <div className="flex justify-center items-center border p-3 rounded-xl gap-2">
                    <FaHandsHelping className="bg-white text-primaryColor p-2 h-10 w-10 rounded-xl" />
                    <span className="text-2xl font-bold">300+</span>
                    <span className="text-sm">Volunteers United in Faith</span>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
