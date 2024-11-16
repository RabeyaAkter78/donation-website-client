import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const ProjectDetails = () => {
    return (
        <div className=' bg-[#fafafa]'>
            <div className='container mx-auto py-24'>
                <div className='flex justify-between items-center mb-16'  >
                    <div>
                        <button className='px-4 py-2 bg-primaryColor text-white rounded-xl'>Projects</button>
                        <h1 className='text-3xl font-bold my-5'>Recent Projects</h1>
                        <p className='text-neutral-500'>Donec ac odio tempor orci dapibus ultrices. Ut lectus arcu bibendum at varius vel pharetra vel. Enim sed faucibus turpis in eu mi bibendum.</p>
                    </div>
                    <Link href="/component/all-project">
                        <button className="flex justify-center items-center gap-2 bg-gradient-to-r from-red-900 to-red-700 text-white px-6 py-3 rounded-md shadow-lg">
                            View All Projects <FaArrowRight />
                        </button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default ProjectDetails;