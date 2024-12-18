import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import GoBackButton from '../shared/GoBackButton/GoBackButton';
import SectionTitle from '../shared/SectionTitle/SectionTitle';
import CollectivePhilanThropy from '../shared/CollectivePhilanThropy/CollectivePhilanThropy';

const ProjectDetails = () => {
    return (
        <div className=' bg-[#fafafa]'>
            <div className='container mx-auto py-24'>
                <GoBackButton />
                <SectionTitle button={"Project Details"}
                    title={"Helping rural family farms in Sierra Leone earn income"}
                    description={"An open view of policies and programs voted on by our community. See what's proposed, enacted, and costs associated with each policy."}
                />
                <div className='max-w-screen-lg mx-auto'>
                    <p className='text-neutral-500 border-b border-b-neutral-500 py-4'>Payout date: 27 Mar 2022</p>
                    <p className='text-neutral-500'>
                        Fund capital used
                    </p>
                    <p className='text-neutral-500 text-md md:text-4xl font-bold'>
                        $10,000
                    </p>
                    <div className='w-full flex justify-beween items-center gap-3'>
                        <Link href="/signup">
                            <button className='px-10 py-2 rounded-full bg-primaryColor text-white'>Join to Contribute</button>
                        </Link>
                        <Link href="/donate-now">
                            <button className='px-10 py-2 rounded-full border'>Donate to jesus loves you</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='container mx-auto'>
                <div className="flex flex-col md:flex-row justify-start items-center gap-4 mt-4">
                    <Link href="">
                        <button className=" border-2  px-6 py-3 rounded-md shadow-lg">
                            Join Us
                        </button>
                    </Link>
                    <Link href="">
                        <button className="flex justify-center items-center gap-2 bg-gradient-to-r from-red-900 to-red-700 text-white px-6 py-3 rounded-md shadow-lg">
                            Make a One-time Donation <FaArrowRight />
                        </button>
                    </Link>
                </div>
            </div>
            <CollectivePhilanThropy />
        </div>
    );
};

export default ProjectDetails;