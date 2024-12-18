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
            </div>
            {/*Todo: there will be some card */}
            <CollectivePhilanThropy />
        </div>
    );
};

export default ProjectDetails;