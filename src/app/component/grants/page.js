'use client'
import Image from 'next/image';
import React, { act, useState } from 'react';
import img from "../../../images/img.png"
import SectionTitle from '../shared/SectionTitle/SectionTitle';
import CollectivePhilanThropy from '../shared/CollectivePhilanThropy/CollectivePhilanThropy';
import { GoArrowUpRight } from 'react-icons/go';
import Link from 'next/link';
const GrantPage = () => {
    const data = [
        {
            "id": 1,
            "status": "In Progress",
            "title": "Water Well Project",
            "type": "grants",
            "description": "Providing clean water access to rural communities.",
            "learnMore": "Learn More"
        },

    ]
    const [activeTab, setActiveTab] = useState('Grants');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;
    // Filter data based on the active tab
    const filteredData = data.filter(item => item.type === activeTab);
    // Pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const donations = [
        {
            "id": 1,
            "name": "Aime Rebecca",
            "location": "Sudan",
            "focus": "Education",
            "description": "Support for war-affected families in Sudan",
            "amount": "$1,300",
            "date": "27 Mar 2024",
            "imageUrl": "https://via.placeholder.com/64"
        },
        {
            "id": 2,
            "name": "Ernest Nartey-Tetteh",
            "location": "Uganda",
            "focus": "Health",
            "description": "Donation to buy sewing machines and starter kits for 12 girls in Uganda",
            "amount": "$3,130",
            "date": "29 Jan 2023",
            "imageUrl": "https://via.placeholder.com/64"
        },

    ]

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        setCurrentPage(1);
    };

    return (
        <div >
            <div>
                <SectionTitle button={"Our Grants"}
                    title={"Grants"}
                    description={"All grants we've made to entrepreneurs solving for social impact."} />
            </div>

            <div className="container mx-auto">
                <div className=" my-10">
                    <div className="flex justify-between items-center  bg-neutral-200 py-2 px-3 w-72 mx-auto rounded-xl   ">
                        <p className="mt-3 font-semibold"> Type</p>
                        {['Projects', 'Grants'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => handleTabClick(tab)}
                                className={` py-3 px-4 font-semibold ${activeTab === tab ? 'bg-white rounded-xl' : 'text-gray-500'
                                    }`}
                            >
                                {tab === "Projects" ? <Link href="/projects">Projects</Link> : "Grants"}
                            </button>
                        ))}

                    </div>



                    {
                        activeTab === 'Grants' ?
                            <div className="max-w-2xl mx-auto  bg-white rounded-xl p-4">
                                {donations.map((donation) => (
                                    <div
                                        key={donation.id}
                                        className="flex items-center justify-between border-b border-gray-200 py-4"
                                    >
                                        <div className="flex items-center gap-4">
                                            <Image
                                                src={img}
                                                alt={donation.name}
                                                className="w-16 h-16 rounded-md object-cover"
                                            />
                                            <div>
                                                <h2 className="font-semibold text-lg">{donation.name}</h2>
                                                <p className="text-gray-600 text-sm">{donation.description}</p>
                                                <div className='flex justify-start items-center gap-2'>
                                                    <button className="mt-2 px-4 py-1 text-sm bg-neutral-200 rounded-md">
                                                        Location :{donation.location}
                                                    </button>
                                                    <button className="mt-2 px-4 py-1 text-sm bg-neutral-200 rounded-md">
                                                        Focus: {donation.focus}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-lg font-semibold">{donation.amount}</p>
                                            <p className="text-gray-500 text-sm">{donation.date}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            :
                            null

                    }



                </div>
            </div>


            <div className='bg-red-50 py-24'>

                <div className="container mx-auto text-center text-gray-600 text-sm mt-4">
                    The rest of the financial data is available to villagers only.
                    <button className="ml-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm">Login →</button>
                </div>
            </div>
            <CollectivePhilanThropy />
        </div>
    );
};

export default GrantPage;