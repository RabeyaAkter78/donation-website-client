import Link from 'next/link';
import React from 'react';

const MonthlyIncome = () => {
    return (
        <div className='container mx-auto'>
            <div className='mt-16 my-24 flex justify-between items-center p-5 border-2 rounded-3xl border-neutral-500'>
                <div>
                    <p>Monthly Income</p>
                    <p className='text-3xl font-bold'>$13,367 </p>
                </div>
                <div className="flex flex-col md:flex-row justify-start items-center gap-4 mt-4">
                    <Link href="">
                        <button className=" border-2  px-6 py-3 rounded-md shadow-lg">
                            View Ledger
                        </button>
                    </Link>
                    <Link href="">
                        <button className="flex justify-center items-center gap-2 bg-gradient-to-r from-red-900 to-red-700 text-white px-6 py-3 rounded-md shadow-lg">
                            Join Jesus Loves You
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MonthlyIncome;