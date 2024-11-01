"use client"
import React from 'react';
import SectionTitle from '../shared/SectionTitle/SectionTitle';
import CollectivePhilanThropy from '../shared/CollectivePhilanThropy/CollectivePhilanThropy';
import Image from 'next/image';
import img from "../../../images/img.png"
import { FaDollarSign } from 'react-icons/fa';
const FixedCosts = () => {
    const data = [
        {
            "id": 1,
            "status": "Enacted",
            "title": "Twitter",
            "costPerMonth": "$200K",
        },
        {
            "id": 2,
            "status": "Enacted",
            "title": "Grammarly",
            "costPerMonth": "$200K",
        },
        {
            "id": 3,
            "status": "Enacted",
            "title": "Facebook",
            "costPerMonth": "$200K",
        },
        {
            "id": 2,
            "status": "Enacted",
            "title": "Instagram",
            "costPerMonth": "$200K",
        }
    ]

    return (
        <div>
            <SectionTitle
                button={"Fixed Costs"}
                title={"Fixed Costs"}
                description={"Our fixed overheads, not including expenses that vary month-to-month or off-one costs."}
            />
            <div className='bg-red-50'>

                <div className='container mx-auto py-24'>
                    <div className=' bg-white flex justify-between items-center py-6 rounded-xl shadow-md px-4 mb-4'>
                        <p>All Costs</p>
                        <p className='flex justify-center items-center gap-2'><FaDollarSign></FaDollarSign> 755 /month</p>

                    </div>
                    {data.map((fixedCost) => (
                        <div
                            key={fixedCost.id}
                            className="flex items-center bg-white justify-between  p-4 rounded-lg shadow mb-4"
                        >
                            <div className="flex items-center gap-4">

                                <div>
                                    <div className='flex justify-start items-center gap-3 my-4'>
                                        <h3 className="font-semibold ">{fixedCost.title}</h3>
                                        <button className="mt-2 px-4 py-1 text-sm text-neutral-700 bg-neutral-300  rounded-md">
                                            Show Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                {/* Avatar */}
                                {/* <Image
                                    src={img}
                                    alt="Avatar"
                                    className="w-8 h-8 rounded-full border border-gray-300"
                                /> */}

                                <FaDollarSign className='border-2 border-black rounded-full p-1 h-8 w-8' />
                                {/* fixedCost Cost */}
                                <div className="text-right">
                                    <p className="text-lg font-semibold text-gray-700">{fixedCost.costPerMonth} / month</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <CollectivePhilanThropy />
        </div>
    );
};

export default FixedCosts;