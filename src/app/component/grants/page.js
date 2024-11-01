import Image from 'next/image';
import React from 'react';
import img from "../../../images/img.png"
import SectionTitle from '../shared/SectionTitle/SectionTitle';
import CollectivePhilanThropy from '../shared/CollectivePhilanThropy/CollectivePhilanThropy';
const GrantPage = () => {
    const donations = [
        {
            "id": 1,
            "name": "Sudan Solidarity Collective, +1 more",
            "description": "Support for war-affected families in Sudan",
            "amount": "$1,300",
            "date": "27 Mar 2024",
            "imageUrl": "https://via.placeholder.com/64"
        },
        {
            "id": 2,
            "name": "Youth Link Networks",
            "description": "Donation to buy sewing machines and starter kits for 12 girls in Uganda",
            "amount": "$3,130",
            "date": "29 Jan 2023",
            "imageUrl": "https://via.placeholder.com/64"
        },

    ]

    return (
        <div >
            <div>
                <SectionTitle button={"Our Grants"}
                    title={"Grants"}
                    description={"All grants we've made to entrepreneurs solving for social impact."} />
            </div>
            <div className='bg-red-50 py-24'>
                <div className="max-w-2xl mx-auto  bg-white rounded-xl p-4">
                    {donations.map((donation) => (
                        <div
                            key={donation.id}
                            className="flex items-center justify-between border-b border-gray-200 py-4"
                        >
                            <div className="flex items-center gap-4">
                                {/* Display the donation image */}
                                <Image
                                    src={img}
                                    alt={donation.name}
                                    className="w-16 h-16 rounded-md object-cover"
                                />
                                <div>
                                    <h2 className="font-semibold text-lg">{donation.name}</h2>
                                    <p className="text-gray-600 text-sm">{donation.description}</p>
                                    <button className="mt-2 px-4 py-1 text-sm text-blue-500 border border-blue-500 rounded-md">
                                        View More
                                    </button>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-lg font-semibold">{donation.amount}</p>
                                <p className="text-gray-500 text-sm">{donation.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
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