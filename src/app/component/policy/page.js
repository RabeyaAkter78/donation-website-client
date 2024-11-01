"use client"
import React from 'react';
import SectionTitle from '../shared/SectionTitle/SectionTitle';
import CollectivePhilanThropy from '../shared/CollectivePhilanThropy/CollectivePhilanThropy';
import Image from 'next/image';
import img from "../../../images/img.png"
import { FaDollarSign } from 'react-icons/fa';
const PolicyPage = () => {
    const data = [
        {
            "id": 1,
            "status": "Enacted",
            "title": "Donation Programme",
            "policyCost": "$100-$200K",
            "avatar": "https://via.placeholder.com/32"
        },
        {
            "id": 2,
            "status": "Enacted",
            "title": "Donation Programme",
            "policyCost": "$100-$200K",
            "avatar": "https://via.placeholder.com/32"
        }
    ]

    return (
        <div>
            <SectionTitle
                button={"Our Policies"}
                title={"Policies"}
                description={"An open view of policies and programs voted on by our community. See what's proposed, enacted, and costs associated with each policy."}
            />
            <div className='bg-red-50'>

                <div className='container mx-auto py-24'>
                    <div className=' bg-white flex justify-between items-center py-6 rounded-xl shadow-md px-4 mb-4'>
                        <p>Policy</p>
                        <p>Policy Cost</p>

                    </div>
                    {data.map((policy) => (
                        <div
                            key={policy.id}
                            className="flex items-center bg-white justify-between  p-4 rounded-lg shadow mb-4"
                        >
                            <div className="flex items-center gap-4">

                                {/* Policy Title */}
                                <div>
                                    {/* Status Indicator */}
                                    <div className="flex  items-center gap-2">
                                        <span className="bg-green-500 w-2.5 h-2.5 rounded-full"></span>
                                        <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded">
                                            {policy.status}
                                        </span>

                                    </div>
                                    <div className='flex justify-start items-center gap-3 my-4'>
                                        <h3 className="font-semibold ">{policy.title}</h3>
                                        <button className="mt-2 px-4 py-1 text-sm text-neutral-700 bg-neutral-300  rounded-md">
                                            View Policy
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
                                {/* Policy Cost */}
                                <div className="text-right">
                                    <p className="text-lg font-semibold text-gray-700">{policy.policyCost}</p>
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

export default PolicyPage;