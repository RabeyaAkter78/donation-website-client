

"use client";

import { useEffect, useState } from "react";
import "antd/dist/reset.css";
import { Button, ConfigProvider, Drawer, Tooltip } from "antd";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import logo from "../../../../images/logo.png"
import Image from "next/image";


const NavBar = () => {
    const [drawerVisible, setDrawerVisible] = useState(false);
    // const [selected, setSelected] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setIsMobile(window.innerWidth < 768);

            const handleResize = () => {
                setIsMobile(window.innerWidth < 768);
            };

            window.addEventListener("resize", handleResize);

            return () => {
                window.removeEventListener("resize", handleResize);
            };
        }
    }, []);

    const labels = [
        { name: "Home", link: "/" },
        { name: "About", link: "/about-us " },
        { name: "Impact", link: "/impact" },
        { name: "Finance", link: "/ finance" },
    ];

    const handleMobileMenuClick = () => {
        setDrawerVisible(!drawerVisible);
    };

    const select = (index) => {
        // setSelected(index);
        if (isMobile) {
            setDrawerVisible(false);
        }
    };

    return (
        <ConfigProvider
            theme={{
                components: {
                    Button: {
                        contentFontSize: 20,
                        paddingBlock: 10,
                        borderRadius: 2,
                    },
                },
            }}
        >
            <div className=" w-[100%] ">
                <div className="container mx-auto flex items-center justify-center py-4 px-6 lg:px-8">
                    <div className="flex justify-between items-center gap-10 w-full h-full">
                        <Link href="/">
                            <Image
                                src={logo}
                                alt="logo"
                                height={0}
                                width={0}
                                className="lg:h-12 h-16 w-auto rounded-full"
                            />
                        </Link>
                        <div className="lg:hidden ml-auto">
                            <Button
                                icon={<RxHamburgerMenu className="text-black" />}
                                onClick={handleMobileMenuClick}
                            />
                        </div>
                        <div>
                            {labels.map((item, index) => (
                                <Link href={item.link} key={index}>
                                    <button
                                        className={`px-4 font-medium text-lg `}
                                    >
                                        {item.name}
                                    </button>
                                </Link>
                            ))}
                        </div>
                        <div className="hidden lg:flex items-center ml-auto space-x-4 mb-0">

                            <div className="flex justify-center items-center gap-2">
                                <Link href="/login">
                                    <button className=" border-2 text-black px-10 py-3 rounded-md shadow-lg">
                                        Sign In
                                    </button>
                                </Link>
                                <Link href="/signup">
                                    <button className=" bg-gradient-to-r from-red-900 to-red-700  text-white px-10 py-3 rounded-md shadow-lg">
                                        Join Us
                                    </button>
                                </Link>
                            </div>

                            {/* Sign in sign out */}
                            {/* {!session ? (
                <Link href="/sign-in">
                 <button className=" bg-gradient-to-r from-red-900 to-red-700  text-white px-10 py-3 rounded-md shadow-lg">Join Now</button>
                </Link>
              ) : (
                <Tooltip title={session.user?.name}>
                  <div className="flex items-center space-x-2">
                    <Image
                      height={5}
                      width={5}
                      src={session.user?.image || AllImages.UserImg}
                      alt="user Image"
                      className="h-10 w-10 border border-neutral-500 rounded-full cursor-pointer"
                      onClick={() => signOut()}
                    />
                    <span
                      className="font-medium text-lg cursor-pointer"
                      onClick={() => signOut()}
                    >
                      Logout
                    </span>
                  </div>
                </Tooltip>
              )} */}
                        </div>
                    </div>
                </div>

                {/* Drawer component */}
                <Drawer
                    title=""
                    placement="left"
                    onClose={() => setDrawerVisible(false)}
                    open={drawerVisible}
                >
                    <div className="flex flex-col items-center space-y-4">
                        <div className="flex flex-col items-center space-y-2 w-full">
                            {labels.map((item, index) => (
                                <Link href={item.link} key={index}>
                                    <button
                                        className={`px-4 font-medium text-lg`}
                                        onClick={() => select(index)}
                                    >
                                        {item.name}
                                    </button>
                                </Link>
                            ))}
                            <div className="flex justify-center items-center gap-2">
                                <Link href="/login">
                                    <button className=" border-2 text-black px-10 py-3 rounded-md shadow-lg">
                                        Sign In
                                    </button>
                                </Link>
                                <Link href="/signup">
                                    <button className=" bg-gradient-to-r from-red-900 to-red-700  text-white px-10 py-3 rounded-md shadow-lg">
                                        Join Us
                                    </button>
                                </Link>
                            </div>

                            {/* {!session ? (
                <Link href="sign-in">
                 <button className=" bg-gradient-to-r from-red-900 to-red-700  text-white px-10 py-3 rounded-md shadow-lg">Join Now</button>
                </Link>
              ) : (
                <Tooltip title={session.user?.name}>
                  <div className="flex items-center space-x-2">
                    <Image
                      height={5}
                      width={5}
                      src={session.user?.image || AllImages.UserImg}
                      alt="User Image"
                      className="h-10 w-10 border border-neutral-500 rounded-full cursor-pointer"
                      onClick={() => signOut()}
                    />
                    <span
                      className="font-medium text-lg cursor-pointer"
                      onClick={() => signOut()}
                    >
                      LogOut
                    </span>
                  </div>
                </Tooltip>
              )} */}
                        </div>
                    </div>
                </Drawer>
            </div>
        </ConfigProvider>
    );
};

export default NavBar;
