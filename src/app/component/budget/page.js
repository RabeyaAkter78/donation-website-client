"use client"
import React from 'react';
import SectionTitle from '../shared/SectionTitle/SectionTitle';
import CollectivePhilanThropy from '../shared/CollectivePhilanThropy/CollectivePhilanThropy';
import Image from 'next/image';
import img from "../../../images/img.png"
import { FaArrowRight, FaDollarSign } from 'react-icons/fa';
const Budget = () => {
    const data = [
        {
            "id": 1,
            "status": "Enacted",
            "title": "Unplanned Costs",
            "policyCost": "$100-$200K",
            "avatar": "https://via.placeholder.com/32",
            "costPerMonth": "$200K",
        },
        {
            "id": 2,
            "status": "Enacted",
            "title": "Fixed Costs",
            "policyCost": "$100-$200K",
            "avatar": "https://via.placeholder.com/32",
            "costPerMonth": "$200K",
        }
    ]

    return (
        <div>
            <SectionTitle
                button={"Our Budget"}
                title={"Budget"}
                description={"This page shows our monthly budget and how it is allocated. Expect minor discrepancies due to currency conversion."}
            />
            <div className='bg-red-50'>

                <div className='container mx-auto py-24'>

                    <div className="w-full  bg-white rounded-lg shadow-md p-6 mb-4">
                        <div className="flex justify-between py-2 border-b border-gray-200">
                            <span className="text-gray-700 font-medium">Monthly Income:</span>
                            <span className="text-gray-900 font-semibold">1,238</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-gray-200">
                            <span className="text-gray-700 font-medium">Allocated:</span>
                            <span className="text-gray-900 font-semibold">$14,132</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-gray-200">
                            <span className="text-gray-700 font-medium">Unallocated:</span>
                            <span className="text-gray-900 font-semibold">$10,272</span>
                        </div>
                    </div>
                    <div className="flex justify-between bg-white rounded-lg shadow-md p-6 mb-4">
                        <span className="text-gray-700 font-medium">Monthly Costs:</span>
                        <span className="text-gray-900 font-semibold">$755</span>
                    </div>
                    <div>
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


                                    <FaDollarSign className='border-2 border-black rounded-full p-1 h-8 w-8' />
                                    <div className="text-right">
                                        <p className="text-lg font-semibold text-gray-700">{fixedCost.costPerMonth} / month</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                        <p className='text-center'>The rest of the financial data is available to villagers only.      </p>
                        <button className='px-4 py-1 border-2 rounded-xl border-neutral-400 flex justify-center items-center gap-2'>Login <FaArrowRight />
                        </button>

                    </div>

                </div>

            </div>

            <CollectivePhilanThropy />
        </div>
    );
};

export default Budget; 