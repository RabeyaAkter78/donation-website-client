"use client"

/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import SectionTitle from '../shared/SectionTitle/SectionTitle';
import CollectivePhilanThropy from '../shared/CollectivePhilanThropy/CollectivePhilanThropy';
import { Collapse } from 'antd';
import Movement from '../Movement/Movement';
import Link from 'next/link';
import GoBackButton from '../shared/GoBackButton/GoBackButton';

const HowItWorks = () => {
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
        <div className=''>
            <GoBackButton />
            <SectionTitle
                button={"How It Works"}
                title={"How It Works"}
                description={"We bring together communities to fund local projects solving long-term challenges."}
            />

            <div className='container mx-auto my-24 px-4 md:px-0'>
                <div>
                    <h1 className='text-3xl font-bold '>Step 1: Join the Movement</h1>
                    <p className='my-6 text-neutral-700'>Join the foundation by making a monthly pledge of at least $5.
                        This contribution funds various projects and grants you voting rights.</p>
                    <Link href='/signup'>
                        <button className=' border border-neutral-500 px-4 py-2 rounded-xl mb-16'>Join Us</button>
                    </Link>
                </div>
                <div>
                    <h1 className='text-3xl font-bold '>Step 2: Track Impact</h1>
                    <p className='my-6 text-neutral-700'>Members can track project progress and get real-time updates from the field.
                        You can view updates on ongoing projects with complete transparency.</p>
                    <Link href="/projects">
                        <button className=' border border-neutral-500 px-4 py-2 rounded-xl mb-16'>View Projects</button>
                    </Link>

                </div>
                <div>
                    <h1 className='text-3xl font-bold '>Step 3: Vote on Impact</h1>
                    <p className='my-6 text-neutral-700'>Voting sessions are called to approve key funding decisions. Every member has voting rights and can take part.</p>
                    <Link href=''>
                        <button className=' border border-neutral-500 px-4 py-2 rounded-xl mb-16'>Learn More About Voting</button>
                    </Link>
                </div>
                <div>
                    <h1 className='text-3xl font-bold '>Step 4: Financial Transparency</h1>
                    <p className='my-6 text-neutral-700'>All finances and transactions are accounted for in a public ledger.
                        Transparency is key, and every donation and funding decision is made visible to members.</p>
                    <Link href='/component/ledger'>
                    <button className=' border border-neutral-500 px-4 py-2 rounded-xl mb-16'>View Ledger</button>
                    </Link>
                </div>

            </div>




            <div className="bg-[#333333]">
                <div className="container mx-auto px-4 md:px-0">
                    <div className="flex flex-col justify-center items-center py-16">
                        <h1 className="text-xl md:text-4xl font-bold text-white">Join us to build a global community and tap into the enormous power of collective philanthropy.</h1>
                        <p className="text-neutral-200">Serve others, give generously, and spread love.</p>
                        <div className="flex flex-col md:flex-row justify-start items-center gap-4 mt-4">
                            <Link href="">
                                <button className=" border-2  px-6 py-3 rounded-md shadow-lg text-white">
                                    Join the Movement
                                </button>
                            </Link>
                            <Link href="">
                                <button className="flex justify-center items-center gap-2 bg-gradient-to-r from-red-900 to-red-700 text-white px-6 py-3 rounded-md shadow-lg">
                                    Make a One-time Donation
                                </button>
                            </Link>
                            <Link href="">
                                <button className="flex justify-center items-center gap-2 bg-red-50 text-red-500 px-6 py-3 rounded-md shadow-lg">
                                    Spread the Word
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

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

            <CollectivePhilanThropy />
        </div>
    );
};

export default HowItWorks;