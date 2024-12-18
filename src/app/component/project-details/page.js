/* eslint-disable react/no-unescaped-entities */
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
                <div className='max-w-screen-lg mx-auto px-4 md:px-0'>
                    <div>
                        <p className='text-neutral-500 border-b border-b-neutral-500 py-4'>Payout date: 27 Mar 2022</p>
                        <p className='text-neutral-500'>
                            Fund capital used
                        </p>
                        <p className='text-neutral-500 text-md md:text-4xl font-bold'>
                            $10,000
                        </p>
                        <div className='w-full flex flex-col md:flex-row justify-beween items-center gap-3'>
                            <Link href="/signup">
                                <button className='px-10 py-2 rounded-full bg-primaryColor text-white'>Join to Contribute</button>
                            </Link>
                            <Link href="/donate-now">
                                <button className='px-10 py-2 rounded-full border'>Donate to jesus loves you</button>
                            </Link>
                        </div>
                    </div>
                    <div className='my-10 bg-neutral-100 '>
                        <h1 className='text-xl font-semibold border-b p-6'>Relevant Data </h1>
                        <div className='flex justify-between items-center border-b p-6'>
                            <h3>Region</h3>
                            <p>Sierra Leone</p>
                        </div>
                        <div className='flex justify-between items-center border-b p-6'>
                            <h3>Sector</h3>
                            <p>Agriculture</p>
                        </div>
                        <div className='flex justify-between items-center border-b p-6'>
                            <h3>Farms Enrolled</h3>
                            <p>30</p>
                        </div>
                    </div>
                    <div className='my-10 bg-neutral-100 p-6'>
                        <p>About</p>
                        <h1 className='text-xl font-medium'> Refugee Survival, a Challenge</h1>
                        <p className='text-neutral-600 my-5'>Uganda is one of the leading refugee-hosting countries with over 1.5M refugees whose sole survival is dependent on handouts. The World Food Program gives refugees $5.4 per head or equivalent in food rations per month, barely enough to sustain. As a result, many refugees are left in vulnerable situations with no additional means to supplement. This situation is exacerbated for women-led households and urban refugees. For example, 81% of the refugees in Uganda are women and children, and 64% of the homes are women-led (UNHCR 2020). As for urban refugees, Kampala alone has over 80,000 refugees who don't receive any aid, according to the refugee policy.</p>
                        <p className='text-neutral-600 my-5'>Uganda is one of the leading refugee-hosting countries with over 1.5M refugees whose sole survival is dependent on handouts. The World Food Program gives refugees $5.4 per head or equivalent in food rations per month, barely enough to sustain. As a result, many refugees are left in vulnerable situations with no additional means to supplement. This situation is exacerbated for women-led households and urban refugees. For example, 81% of the refugees in Uganda are women and children, and 64% of the homes are women-led (UNHCR 2020). As for urban refugees, Kampala alone has over 80,000 refugees who don't receive any aid, according to the refugee policy.</p>
                        <p className='text-neutral-600 my-5'>Uganda is one of the leading refugee-hosting countries with over 1.5M refugees whose sole survival is dependent on handouts. The World Food Program gives refugees $5.4 per head or equivalent in food rations per month, barely enough to sustain. As a result, many refugees are left in vulnerable situations with no additional means to supplement. This situation is exacerbated for women-led households and urban refugees. For example, 81% of the refugees in Uganda are women and children, and 64% of the homes are women-led (UNHCR 2020). As for urban refugees, Kampala alone has over 80,000 refugees who don't receive any aid, according to the refugee policy.</p>
                    </div>
                </div>

            </div>

            <CollectivePhilanThropy />
        </div>
    );
};

export default ProjectDetails;