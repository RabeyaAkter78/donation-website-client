'use client'


/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import SectionTitle from '../shared/SectionTitle/SectionTitle';
import CollectivePhilanThropy from '../shared/CollectivePhilanThropy/CollectivePhilanThropy';
import { Collapse } from 'antd';
import TransparentFinance from '@/app/(WithNavbarFooter)/finance/page';

const WhyWeExists = () => {
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
            <SectionTitle button={"Why We Exist"}
                title={"Why We Exist"}
                description={"The reasons and mission behind why the Jesus Loves You Foundation exists."}
            />
            <div className='container mx-auto'>
                <h1 className='text-4xl font-bold pb-6'> 1. Helping the marginalized communities</h1>
                <div className='mt-6 mb-16'>
                    <p className='font-bold'>1. Helping the marginalized communities </p>
                    <p className='text-neutral-600'>An explanation of the importance of helping marginalized and underserved communities. </p>
                    <p className='font-bold'>2. Solving systemic issues </p>
                    <p className='text-neutral-600'>How the foundation aims to solve systemic issues that create barriers for growth and development. </p>
                    <p className='font-bold'>3. Spreading the love of Christ</p>
                    <p className='text-neutral-600'>A focus on spreading the message of love, compassion, and support through tangible acts of service. </p>
                </div>
                <h1 className='text-4xl font-bold pb-6'>Our Progress</h1>
                <div className='mt-6 mb-16'>
                    <p className='text-neutral-600'>- Total Active Members: 1,238 </p>
                    <p className='text-neutral-600'>- - Monthly Income: $14,132 </p>
                    <p className='text-neutral-600'>-- Cash Distributed: $159,052 </p>
                </div>
                <button className='text-neutral-600 border border-neutral-700 px-4 py-2 rounded-xl'>View Ledger</button>

            </div>




            {/*  */}

            <div>
                <div className='container mx-auto py-24'>
                    <h1 className='text-4xl font-bold text-center'>Where we are today?</h1>
                    <p className='text-neutral-500 mt-5 mb-16 text-center'>Transforming Financial Data into Trustworthy Insights</p>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                        <div className=' border-2 border-neutral-500 p-5 rounded-2xl bg-white'>
                            <p className='text-neutral-800'>Total Philanthropists:</p>
                            <p className='text-2xl md:text-6xl font-bold text-primaryColor my-2'>$14,000<span className='text-neutral-600 text-xl'>Active</span></p>
                            <button className='text-neutral-500 border border-neutral-500 px-4 py-2 rounded-xl my-2'>View Village</button>
                        </div>
                        <div className=' border-2 border-neutral-500 p-5 rounded-2xl bg-white'>
                            <p className='text-neutral-800'>Monthly Income::</p>
                            <p className='text-2xl md:text-6xl font-bold text-primaryColor my-2'>$13,367 <span className='text-neutral-600 text-xl'>/m</span></p>
                            <button className='text-neutral-500 border border-neutral-500 px-4 py-2 rounded-xl my-2'>View Ledger</button>
                        </div>
                        <div className=' border-2 border-neutral-500 p-5 rounded-2xl bg-white'>
                            <p className='text-neutral-800'>Capital Deployed::</p>
                            <p className='text-2xl md:text-6xl font-bold text-primaryColor my-2'>$159,023</p>
                            <button className='text-neutral-500 border border-neutral-500 px-4 py-2 rounded-xl my-2'>View Projects</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* faq */}

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

export default WhyWeExists;