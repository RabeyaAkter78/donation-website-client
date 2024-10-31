import React from 'react';

const TransparentFinance = () => {
    const finance = [
        {
            "_id": "1",
            "monthlyIncome": 15000,
            "monthlyCosts": 9000,
            "cashOnHand": 30000,
            "descriptions": [
                "This month, we achieved significant growth in our revenue streams.",
                "Expenses were kept under control, allowing for increased savings.",
                "Current cash reserves provide a solid foundation for future investments."
            ]
        },
        {
            "_id": "2",
            "monthlyIncome": 22000,
            "monthlyCosts": 12000,
            "cashOnHand": 50000,
            "descriptions": [
                "Strong sales in our online platform contributed to higher income.",
                "Marketing expenses rose this month due to an advertising campaign.",
                "A healthy cash flow ensures we can handle unexpected expenses."
            ]
        },
        {
            "_id": "3",
            "monthlyIncome": 18000,
            "monthlyCosts": 10000,
            "cashOnHand": 25000,
            "descriptions": [
                "Recurring subscriptions and services are stabilizing our monthly income.",
                "Operational costs decreased due to efficiency improvements.",
                "Our cash on hand allows us to explore new business opportunities."
            ]
        }
    ]


    return (
        <div className='bg-[#fcf4f4]'>
            <div className='container mx-auto py-24'>
                <h1 className='text-4xl font-bold'>Open and Transparent Finances</h1>
                <p className='text-neutral-500 mt-5 mb-16'>Transforming Financial Data into Trustworthy Insights</p>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                    <div className=' border-2 border-neutral-500 p-5 rounded-2xl bg-white'>
                        <p className='text-neutral-800'>Monthly Income:</p>
                        <p className='text-2xl md:text-6xl font-bold text-primaryColor my-2'>$14,000 </p>
                        <p className='text-neutral-500'>Recurring subscriptions and services are stabilizing our monthly income.</p>
                    </div>
                    <div className=' border-2 border-neutral-500 p-5 rounded-2xl bg-white'>
                        <p className='text-neutral-800'>Monthly Costs:</p>
                        <p className='text-2xl md:text-6xl font-bold text-primaryColor my-2'>$7,000 </p>
                        <p className='text-neutral-500'>Operational costs decreased due to efficiency improvements..</p>
                    </div>
                    <div className=' border-2 border-neutral-500 p-5 rounded-2xl bg-white'>
                        <p className='text-neutral-800'>Cash on Hand: </p>
                        <p className='text-2xl md:text-6xl font-bold text-primaryColor my-2'>$50,000 </p>
                        <p className='text-neutral-500'>Our cash on hand allows us to explore new business opportunities.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TransparentFinance;