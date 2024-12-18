import Image from 'next/image';
import React from 'react';
import hero from "../../../images/hero.jpg";
import { MdOutlineArrowOutward } from "react-icons/md";
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
const Projects = () => {
    const projects = [
        {
            "id": 1,
            "image": "https://example.com/images/project1.jpg",
            "title": "Clean Water for All",
            "subtitle": "Providing sustainable clean water solutions",
            "details": "This project aims to provide sustainable, long-term clean water solutions in rural areas across developing regions. By building wells and filtration systems, we can ensure communities have access to safe drinking water.",
            "location": "Sub-Saharan Africa",
            "goalAmount": 50000,
            "raisedAmount": 32000,
            "donors": 120,
            "endDate": "2024-12-31",
            "status": "Ongoing"
        },
        {
            "id": 2,
            "image": "https://example.com/images/project2.jpg",
            "title": "Education for Refugee Children",
            "subtitle": "Creating educational opportunities for displaced children",
            "details": "This initiative supports the education of children in refugee camps by providing them with school supplies, learning materials, and temporary classrooms. With your support, we aim to give these children a brighter future.",
            "location": "Middle East",
            "goalAmount": 75000,
            "raisedAmount": 45000,
            "donors": 200,
            "endDate": "2024-11-15",
            "status": "Ongoing"
        },
        {
            "id": 3,
            "image": "https://example.com/images/project3.jpg",
            "title": "Emergency Relief for Natural Disasters",
            "subtitle": "Delivering aid to communities impacted by disasters",
            "details": "Our disaster relief team is providing immediate assistance to areas affected by recent natural disasters. From food and shelter to medical supplies, every donation goes directly toward helping people rebuild their lives.",
            "location": "Global",
            "goalAmount": 100000,
            "raisedAmount": 87000,
            "donors": 300,
            "endDate": "2024-10-10",
            "status": "Urgent"
        },
        {
            "id": 4,
            "image": "https://example.com/images/project4.jpg",
            "title": "Renewable Energy in Rural Areas",
            "subtitle": "Bringing sustainable energy solutions to underserved communities",
            "details": "This project aims to provide solar panels and other renewable energy solutions to rural areas without electricity. Access to reliable power will help improve education, healthcare, and economic opportunities.",
            "location": "Latin America",
            "goalAmount": 60000,
            "raisedAmount": 27000,
            "donors": 150,
            "endDate": "2025-01-15",
            "status": "Ongoing"
        },
        {
            "id": 5,
            "image": "https://example.com/images/project4.jpg",
            "title": "Renewable Energy in Rural Areas",
            "subtitle": "Bringing sustainable energy solutions to underserved communities",
            "details": "This project aims to provide solar panels and other renewable energy solutions to rural areas without electricity. Access to reliable power will help improve education, healthcare, and economic opportunities.",
            "location": "Latin America",
            "goalAmount": 60000,
            "raisedAmount": 27000,
            "donors": 150,
            "endDate": "2025-01-15",
            "status": "Ongoing"
        },
        {
            "id": 6,
            "image": "https://example.com/images/project4.jpg",
            "title": "Renewable Energy in Rural Areas",
            "subtitle": "Bringing sustainable energy solutions to underserved communities",
            "details": "This project aims to provide solar panels and other renewable energy solutions to rural areas without electricity. Access to reliable power will help improve education, healthcare, and economic opportunities.",
            "location": "Latin America",
            "goalAmount": 60000,
            "raisedAmount": 27000,
            "donors": 150,
            "endDate": "2025-01-15",
            "status": "Ongoing"
        }
    ];

    return (
        <div className=' bg-[#fafafa]'>
            <div className='container mx-auto py-24 px-4'>
                <div className='flex flex-col md:flex-row justify-between items-center mb-16'>
                    <div>
                        <button className='px-4 py-2 bg-primaryColor text-white rounded-xl'>Projects</button>
                        <h1 className='text-3xl font-bold my-5'>Recent Projects</h1>
                        <p className='text-neutral-500'>Donec ac odio tempor orci dapibus ultrices. Ut lectus arcu bibendum at varius vel pharetra vel. Enim sed faucibus turpis in eu mi bibendum.</p>
                    </div>
                    <Link href="/component/all-project">
                        <button className="flex justify-center items-center gap-2 bg-gradient-to-r from-red-900 to-red-700 text-white px-6 py-3 rounded-md shadow-lg mt-10 md:mt-0">
                            View All Projects <FaArrowRight />
                        </button>
                    </Link>
                </div>
                <div className=' grid grid-cols-1 md:grid-cols-3 gap-5'>
                    {projects.map((project) => <div key={project.id}>
                        <div className='mb-10 md:h-[450px] shadow-md'>
                            <Image
                                src={hero}
                                alt="hero img"
                                className="h-44 w-full object-cover"
                            />
                            <div className='p-5 '>
                                <p className='text-primaryColor my-5'>{project.title}</p>
                                <p className='font-bold text-xl my-5'>{project.subtitle}</p>
                                <p className='text-neutral-500  line-clamp-2 mb-5'>{project.details}</p>
                                <Link href="/component/project-details">
                                    <button className='text-primaryColor flex justify-center items-center gap-2 mt-5'>Learn More<MdOutlineArrowOutward /></button>
                                </Link>
                            </div>
                        </div>
                    </div>)}
                </div>

            </div>
        </div>
    );
};

export default Projects; 