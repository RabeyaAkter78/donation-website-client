"use client"

/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import SectionTitle from '../shared/SectionTitle/SectionTitle';
import CollectivePhilanThropy from '../shared/CollectivePhilanThropy/CollectivePhilanThropy';
import { Collapse } from 'antd';
import Image from 'next/image';
import location from "../../../images/location.png"
import education from "../../../images/education.png"
import health from "../../../images/health.png"
import cloud from "../../../images/cloud.png"
import agriculture from "../../../images/agriculture.png"
import growth from "../../../images/growth.png"





const WhatWeFound = () => {
    const faqData = [
        {
            question: "Who can join?",
            answer: "Anyone who shares our values and mission is welcome to join. Whether you’re looking to volunteer, donate, or simply stay informed, our community is open to everyone."
        },
        {
            question: "Who's behind the foundation?",
            answer: "Our foundation is led by a dedicated team of professionals and volunteers who are passionate about making a difference. Learn more about our team and their backgrounds on our 'About Us' page."
        },
        {
            question: "How can I learn more about your governance and legal structure?",
            answer: "We prioritize transparency in our operations. Detailed information about our governance model, legal status, and guiding principles can be found in our Annual Report and on our Governance page."
        },
        {
            question: "Is Jesus Loves You Foundation a registered charity?",
            answer: "Yes, we are a registered charity. Our registration details and compliance information are available on our website to ensure full transparency for our donors and members."
        },
        {
            question: "How does the foundation select and vet project partners?",
            answer: "We have a rigorous vetting process to ensure that all project partners align with our mission and values. This includes background checks, impact assessments, and ongoing monitoring to ensure accountability."
        },
        {
            question: "How does the foundation ensure transparent fund and project management?",
            answer: "Our financial reports and project updates are publicly accessible. We use third-party audits and regular reporting to maintain transparency and accountability in fund management."
        },
        {
            question: "Can members contribute skills or expertise beyond financial contributions?",
            answer: "Absolutely! We welcome members to share their skills and expertise. Whether it's through volunteering, mentoring, or offering specialized services, your contributions are invaluable."
        },
        {
            question: "Is there a minimum commitment period for membership?",
            answer: "No, we understand that circumstances change. While we encourage ongoing commitment, members are free to adjust their participation level at any time."
        },
        {
            question: "How does the foundation evaluate project impact over time?",
            answer: "We conduct regular assessments of each project’s impact through metrics such as community feedback, milestones achieved, and measurable outcomes to ensure our goals are met."
        },
        {
            question: "How much of my contribution goes to projects vs. operations?",
            answer: "A significant portion of donations goes directly to projects, with a smaller percentage allocated for operational expenses. We publish an annual breakdown for full transparency."
        },
        {
            question: "Can I choose to support specific types of projects or geographic areas?",
            answer: "Yes, we provide options for donors who wish to target specific projects or regions. This allows you to contribute to causes or communities that are particularly meaningful to you."
        },
        {
            question: "How does the foundation ensure diversity across different regions?",
            answer: "We aim to support projects across diverse communities, regardless of location. We prioritize regions based on need and ensure equitable distribution of resources."
        },
        {
            question: "How does the foundation handle project failures?",
            answer: "In the event of a project setback, we conduct a thorough review to learn from the experience. We apply these lessons to future projects to enhance our impact and resilience."
        },
        {
            question: "Can members propose projects for consideration?",
            answer: "Yes, members are encouraged to propose projects aligned with our mission. Our team reviews each proposal carefully to assess feasibility and potential impact."
        },
        {
            question: "Can I increase or decrease my monthly contribution?",
            answer: "Of course! You can adjust your monthly contributions as needed. We appreciate any level of support you’re able to provide to further our mission."
        },
        {
            question: "Can I contribute without becoming a member?",
            answer: "Absolutely! We welcome contributions from everyone, even if you're not a member. Donations, event participation, and spreading the word about our mission are all ways you can support us without joining."
        },
    ];

    const { Panel } = Collapse;
    return (
        <div>
            <div className='container mx-auto'>
                <SectionTitle button={"What We Fund"}
                    title={"What We Fund"}
                    description={"We fund enterprises and solutions initiated and established by local entrepreneurs—those close to the problem. The local entrepreneurs we fund solve important problems more effectively and sustainably than existing approaches."} />
            </div>
            {/* faq: */}
            <div className=''>
                <div className='bg-red-50'>
                    <div className=' container mx-auto py-24'>
                        <div className="container mx-auto text-center mb-8 ">
                            <div className='flex justify-center items-center mb-5'>
                                <h2 className=" text-xl border border-neutral-600 rounded-xl w-16">FAQ</h2>
                            </div>
                            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
                            <p className="text-gray-500 mt-3">
                                Have questions? We're here to help. Here are some of the most common questions we get from our community.
                            </p>
                        </div>
                        <Collapse accordion>
                            {faqData.map((item, index) => (
                                <Panel header={item.question} key={index + 1}>
                                    <p>{item.answer}</p>
                                </Panel>
                            ))}
                        </Collapse>
                    </div>
                </div>
                {/* location: */}
                <div className=' py-24 container mx-auto'>
                    <h1 className='text-2xl md:text-6xl py-24 font-bold text-center'>Operational Regions</h1>
                    <Image src={location} alt='location' className='h-full w-full object-cover'>

                    </Image>
                </div>
                <div className=' py-24 container mx-auto'>
                    <h1 className='text-2xl md:text-6xl py-24 font-bold text-center'>Target Areas</h1>
                    {/* <Image src={"location"} alt='location' className='h-full w-full object-cover'>
                    </Image> */}

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                        <div className='p-5 border-2 border-neutral-500 rounded-xl'>
                            <Image src={education} alt='location' className='h-16 w-20 object-cover'>
                            </Image>
                            <h1 className='text-4xl font-bold my-2'>Education</h1>
                            <p className='text-neutral-400  my-2'>Solutions that are expanding access and quality of education.</p>
                        </div>
                        <div className='p-5 border-2 border-neutral-500 rounded-xl'>
                            <Image src={health} alt='location' className='h-16 w-20 object-cover'>
                            </Image>
                            <h1 className='text-4xl font-bold my-2'>health</h1>
                            <p className='text-neutral-400  my-2'>Solutions that are expanding access and quality in healthcare.</p>
                        </div>
                        <div className='p-5 border-2 border-neutral-500 rounded-xl'>
                            <Image src={agriculture} alt='location' className='h-16 w-20 object-cover'>
                            </Image>
                            <h1 className='text-4xl font-bold my-2'>Agriculture</h1>
                            <p className='text-neutral-400  my-2'>Solutions aimed at building sustainable food futures.</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 my-12'>
                        <div className='p-5 border-2 border-neutral-500 rounded-xl'>
                            <Image src={growth} alt='location' className='h-16 w-20 object-cover'>
                            </Image>
                            <h1 className='text-4xl font-bold my-2'>Equity</h1>
                            <p className='text-neutral-400  my-2'>Solutions that are creating equity and inclusion for marginalized communities.</p>
                        </div>
                        <div className='p-5 border-2 border-neutral-500 rounded-xl'>
                            <Image src={cloud} alt='location' className='h-16 w-20 object-cover'>
                            </Image>
                            <h1 className='text-4xl font-bold my-2'>Infrastructure</h1>
                            <p className='text-neutral-400  my-2'>Technology and infrastructure solutions that help communities reach their full potential.</p>
                        </div>

                    </div>
                </div>




            </div>
            <CollectivePhilanThropy />
        </div>
    );
};

export default WhatWeFound; 