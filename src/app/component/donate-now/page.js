import React from 'react';
import { FaCross } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';

const DonateNow = () => {
    return (
        <div className='container mx-auto'>
            <div className='shadow-sm border rounded-2xl py-10 px-5'>
                <div className='border rounded-2xl p-5'>
                    <p className='text-neutral-400'>Enter Donation</p>
                    <div className=' flex justify-between items-center'>
                        <p className='text-2xl font-bold'>$1,200</p>
                        <FaX />
                    </div>
                </div>


                
            </div>
        </div>
    );
};

export default DonateNow;