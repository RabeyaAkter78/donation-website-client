"use client";

import { useEffect, useState } from "react";
import "antd/dist/reset.css";
import { Button, ConfigProvider, Drawer, Menu, Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../../images/logo.png";

const NavBar = () => {
    const [drawerVisible, setDrawerVisible] = useState(false);
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

    const aboutMenu = [
        { key: "1", label: <Link href="/component/how-it-works">How Jesus Loves You Works</Link> },
        { key: "2", label: <Link href="/component/why-we-exists">Why We Exists</Link> },
        { key: "3", label: <Link href="/component/what-we-found">Wht We Fund</Link> },
        { key: "3", label: <Link href="">Startegic Roadmap</Link> },
        { key: "3", label: <Link href="/component/our-blog">Our Blogs</Link> },
    ];
    const impactMenu = [
        { key: "1", label: <Link href="/component/all-project">Projects</Link> },
        { key: "2", label: <Link href="/component/grants">Grants</Link> },
        { key: "3", label: <Link href="/component/donation">Donations</Link> },
    ];
    const financeMenu = [
        { key: "1", label: <Link href="/component/ledger">Finance Reports</Link> },
        { key: "2", label: <Link href="">Donor List</Link> },
        { key: "3", label: <Link href="">Financial Policies</Link> },
    ];

    const labels = [
        { name: "Home", link: "/" },
        { name: "Donate", link: "/donate-now" },
        {
            name: "About",
            isDropdown: true,
            dropdown: (
                <Dropdown
                    menu={{ items: aboutMenu }}
                    trigger={["hover"]}

                >
                    <a className="cursor-pointer ">
                        <Space>
                            About
                            <DownOutlined />
                        </Space>
                    </a>
                </Dropdown>
            ),
        },
        {
            name: "Impact",
            isDropdown: true,
            dropdown: (
                <Dropdown
                    menu={{ items: impactMenu }}
                    trigger={["hover"]}
                >
                    <a className="cursor-pointer">
                        <Space>
                            Impact
                            <DownOutlined />
                        </Space>
                    </a>
                </Dropdown>
            ),
        },
        {
            name: "Finance",
            isDropdown: true,
            dropdown: (
                <Dropdown
                    menu={{ items: financeMenu }}
                    trigger={["hover"]}
                >
                    <a className="cursor-pointer">
                        <Space>
                            Finance
                            <DownOutlined />
                        </Space>
                    </a>
                </Dropdown>
            ),
        },
    ];

    const handleMobileMenuClick = () => {
        setDrawerVisible(!drawerVisible);
    };

    const select = (index) => {
        if (isMobile) {
            setDrawerVisible(false);
        }
    };

    return (
        <ConfigProvider>
            <div className="w-[100%]">
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

                        {isMobile && (
                            <div className="ml-auto lg:hidden">
                                <Button
                                    icon={<RxHamburgerMenu className="text-black" />}
                                    onClick={handleMobileMenuClick}
                                />
                            </div>
                        )}

                        {!isMobile && (
                            <div className="hidden lg:flex justify-center items-center gap-10 font-semibold ">
                                {labels.map((item, index) => (
                                    <div key={index}>
                                        {item.isDropdown ? (
                                            item.dropdown
                                        ) : (
                                            <Link className="" href={item.link}>
                                                <button className="  ">
                                                    {item.name}
                                                </button>
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}

                        {!isMobile && (
                            <div className="hidden lg:flex items-center ml-auto space-x-4">
                                <Link href="/login">
                                    <button className="border-2 text-black px-10 py-3 rounded-md shadow-lg">
                                        Sign In
                                    </button>
                                </Link>
                                <Link href="/signup">
                                    <button className="bg-gradient-to-r from-red-900 to-red-700 text-white px-10 py-3 rounded-md shadow-lg">
                                        Join Us
                                    </button>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>

                {isMobile && (
                    <Drawer
                        title="Menu"
                        placement="left"
                        onClose={() => setDrawerVisible(false)}
                        open={drawerVisible}
                    >
                        <div className="flex flex-col items-center space-y-4">
                            {labels.map((item, index) => (
                                <div key={index}>
                                    {item.isDropdown ? (
                                        <Dropdown
                                            menu={
                                                item.name === "About"
                                                    ? { items: aboutMenu }
                                                    : { items: financeMenu }
                                            }
                                            trigger={["click"]}

                                        >
                                            <Link
                                                className="font-medium text-lg"
                                                onClick={(e) => e.preventDefault()}
                                            >
                                                {item.name}
                                            </Link>
                                        </Dropdown>
                                    ) : (
                                        <Link href={item.link}>
                                            <button
                                                className="px-4 font-medium text-lg"
                                                onClick={() => select(index)}
                                            >
                                                {item.name}
                                            </button>
                                        </Link>
                                    )}
                                </div>
                            ))}
                            <div className="flex justify-center items-center gap-2">
                                <Link href="/login">
                                    <button className="border-2 text-black px-10 py-3 rounded-md shadow-lg">
                                        Sign In
                                    </button>
                                </Link>
                                <Link href="/signup">
                                    <button className="bg-gradient-to-r from-red-900 to-red-700 text-white px-10 py-3 rounded-md shadow-lg">
                                        Join Us
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </Drawer>
                )}
            </div>
        </ConfigProvider>
    );
};

export default NavBar;
