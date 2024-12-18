import Image from 'next/image';
import React from 'react';
import img from "../../../images/img.png"
import Link from 'next/link';
const DonationPage = () => {
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
        {
            "id": 3,
            "name": "Patricia Daley, +3 more",
            "description": "Donation to support African & Caribbean student refugees in Ukraine",
            "amount": "$5,220",
            "date": "7 Mar 2022",
            "imageUrl": "https://via.placeholder.com/64"
        },
        {
            "id": 4,
            "name": "Rise Up Bequia",
            "description": "Donation to assist with evacuation efforts in Saint Vincent and the Grenadines",
            "amount": "$5,220",
            "date": "19 Apr 2021",
            "imageUrl": "https://via.placeholder.com/64"
        },
        {
            "id": 5,
            "name": "Food For The Poor JA",
            "description": "Donation to support flooding recovery efforts in Jamaica",
            "amount": "$3,910",
            "date": "24 Nov 2020",
            "imageUrl": "https://via.placeholder.com/64"
        },
        {
            "id": 6,
            "name": "Feminist Coalition",
            "description": "Donation to support peaceful protests against police brutality in Nigeria",
            "amount": "$6,520",
            "date": "17 Oct 2020",
            "imageUrl": "https://via.placeholder.com/64"
        }
    ]

    return (
        <div>
            <div className="max-w-2xl mx-auto p-4">
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
                                <Link href="/component/project-details">
                                    <button className="mt-2 px-4 py-1 text-sm text-blue-500 border border-blue-500 rounded-md">
                                        View More
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-lg font-semibold">{donation.amount}</p>
                            <p className="text-gray-500 text-sm">{donation.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DonationPage;