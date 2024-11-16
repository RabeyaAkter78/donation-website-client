"use client"

import { useState } from "react";
import CollectivePhilanThropy from "../shared/CollectivePhilanThropy/CollectivePhilanThropy";
import SectionTitle from "../shared/SectionTitle/SectionTitle";
import img from "../../../images/img.png"
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import GoBackButton from "../shared/GoBackButton/GoBackButton";
const AllProject = () => {
    const data = [
        {
            "id": 1,
            "status": "In Progress",
            "title": "Water Well Project",
            "type": "Projects",
            "description": "Providing clean water access to rural communities.",
            "learnMore": "Learn More"
        },
        {
            "id": 2,
            "status": "Completed",
            "title": "Medical Aid Programme",
            "type": "Grants",
            "description": "Supplying medical aid to underserved areas.",
            "learnMore": "Learn More"
        },
        {
            "id": 3,
            "status": "In Progress",
            "title": "Education Fund",
            "type": "Projects",
            "description": "Funding education for children in need.",
            "learnMore": "Learn More"
        },
        {
            "id": 4,
            "status": "In Progress",
            "title": "Water Well Project",
            "type": "Projects",
            "description": "Providing clean water access to rural communities.",
            "learnMore": "Learn More"
        },
        {
            "id": 5,
            "status": "Completed",
            "title": "Medical Aid Programme",
            "type": "Grants",
            "description": "Supplying medical aid to underserved areas.",
            "learnMore": "Learn More"
        },
        {
            "id": 6,
            "status": "In Progress",
            "title": "Education Fund",
            "type": "Projects",
            "description": "Funding education for children in need.",
            "learnMore": "Learn More"
        },
    ]


    const [activeTab, setActiveTab] = useState('Projects');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

    // Filter data based on the active tab
    const filteredData = data.filter(item => item.type === activeTab);

    // Pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        setCurrentPage(1); // Reset to the first page on tab change
    };
    return (
        <div>
            <GoBackButton />
            <SectionTitle
                button={"Our Projects"}
                title={"Projects"}
                description={"All the contained impact projects we’ve completed."}

            />
            <div className="container mx-auto">
                <div className=" my-10">
                    {/* Tabs */}
                    <div className="flex gap-4 mb-10 border-b border-gray-200">
                        {['Type', 'Projects', 'Grants'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => handleTabClick(tab)}
                                className={`py-2 px-4 font-semibold ${activeTab === tab ? 'text-red-600 border-b-2 border-red-600' : 'text-gray-500'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Project List */}
                    <div className=" grid grid-cols-1 md:grid-cols-3 gap-5">
                        {currentItems.map((item) => (
                            <div key={item.id} className=" bg-white rounded-lg shadow">
                                <div className="relative">
                                    <div className="relative">
                                        <Image src={img} height={0} width={0} alt="img" className="object cover "></Image>
                                    </div>
                                    {/* Status and Title */}
                                    <div className="absolute top-0 p-2 flex items-center gap-2">
                                        <span
                                            className={`text-xs font-bold px-2 py-1 rounded ${item.status === 'In Progress'
                                                ? 'bg-yellow-100 text-yellow-800'
                                                : 'bg-green-100 text-green-800'
                                                }`}
                                        >
                                            {item.status}
                                        </span>

                                    </div>
                                </div>
                                <div className="p-5 ">
                                    <h3 className="font-semibold text-sm text-red-500">{item.title}</h3>
                                    <p className="text-gray-600 mt-2 h-20">{item.description}</p>
                                    <button className="flex justify-center items-center gap-2 mt-2 text-sm text-red-500 font-semibold">
                                        {item.learnMore} <GoArrowUpRight />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-center mt-6 space-x-2">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                            <button
                                key={pageNum}
                                onClick={() => setCurrentPage(pageNum)}
                                className={`px-3 py-1 rounded ${currentPage === pageNum
                                    ? 'bg-red-600 text-white'
                                    : 'bg-gray-200 text-gray-600'
                                    }`}
                            >
                                {pageNum}
                            </button>
                        ))}
                    </div>
                </div>
            </div>


            <CollectivePhilanThropy />
        </div>
    );
};

export default AllProject;