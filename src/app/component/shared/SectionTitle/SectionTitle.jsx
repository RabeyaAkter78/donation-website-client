/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import img from "../../../../images/img.png";
const SectionTitle = ({ button, title, description }) => {
    return (
        <div className=''>
            <div className='max-w-screen-lg mx-auto px-4 md:px-0'>
                <div div className='flex flex-col justify-center items-center'>
                    <p className='border px-4 py-2 rounded-xl bg-primaryColor text-white'>{button}</p>
                    <h1 className='text-3xl md:text-6xl font-bold py-6 text-center'>{title}</h1>
                    <p className='text-neutral-500'>{description}</p>
                </div>
                <div className="relative mt-24 mb-12">

                    <div>
                        <Image src={img} alt="Image" width={100} height={100} className="object-cover w-full"></Image>
                    </div>
                    <p className="absolute top-0 left-0 m-6 p-2 bg-red-400 text-white rounded-3xl">In Progress</p>
                </div>



            </div>

        </div>
    );
};

export default SectionTitle;