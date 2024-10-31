"use client"
import React from 'react';
import { Collapse } from 'antd';

const { Panel } = Collapse;

const FAQ = () => {
    return (
        <div className="bg-red-50  py-10 px-5">
            <div className='container mx-auto'>
            <div className="container mx-auto text-center mb-8">
                <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
                <p className="text-gray-500 mt-3">
                    Have questions? We're here to help. Here are some of the most common questions we get from our community.
                </p>
            </div>

            <Collapse accordion>
                <Panel header="Who can join?" key="1">
                    <p>
                        Anyone who shares our values and mission is welcome to join. Whether you’re looking to volunteer, donate, or simply stay informed,
                        our community is open to everyone.
                    </p>
                </Panel>
                <Panel header="How are donations used?" key="2">
                    <p>
                        Donations are carefully allocated to ensure maximum impact. Funds are used for community programs, outreach activities,
                        and resources for those in need. A detailed financial report is available on our website for transparency.
                    </p>
                </Panel>
                <Panel header="How can I volunteer?" key="3">
                    <p>
                        Volunteering with us is easy. You can sign up on our website, and our volunteer coordinators will reach out with information
                        on upcoming opportunities. We welcome volunteers with all kinds of skills and expertise.
                    </p>
                </Panel>
                <Panel header="What are the benefits of joining?" key="4">
                    <p>
                        Joining gives you access to a supportive community, resources for personal and professional growth, and the opportunity to make a
                        tangible impact. Plus, you’ll receive regular updates on the positive changes we’re making together.
                    </p>
                </Panel>
                <Panel header="Can I contribute without becoming a member?" key="5">
                    <p>
                        Absolutely! We welcome contributions from everyone, even if you're not a member. Donations, event participation, and spreading
                        the word about our mission are all ways you can support us without joining.
                    </p>
                </Panel>
            </Collapse>
            </div>
        </div>
    );
};

export default FAQ;
