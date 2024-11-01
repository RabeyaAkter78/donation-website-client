'use client'

import React from 'react';
import SectionTitle from '../shared/SectionTitle/SectionTitle';
import CollectivePhilanThropy from '../shared/CollectivePhilanThropy/CollectivePhilanThropy';

const Ledger = () => {
    return (
        <div>
            <SectionTitle button={"Our Ledger"}

                title={"Ledger"}
                description={"The ledger shows our latest 100 financial transactions. Metrics are rounded to the nearest integer."}
            />



            <div className="bg-pink-50 min-h-screen flex flex-col items-center py-24">
                {/* Financial Metrics */}
                <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 mb-4">
                    <div className="flex justify-between py-2 border-b border-gray-200">
                        <span className="text-gray-700 font-medium">Active Members:</span>
                        <span className="text-gray-900 font-semibold">1,238</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                        <span className="text-gray-700 font-medium">Monthly Income:</span>
                        <span className="text-gray-900 font-semibold">$14,132</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                        <span className="text-gray-700 font-medium">Cash on Hand:</span>
                        <span className="text-gray-900 font-semibold">$10,272</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                        <span className="text-gray-700 font-medium">Monthly Costs:</span>
                        <span className="text-gray-900 font-semibold">$755</span>
                    </div>
                    <div className="flex justify-between py-2">
                        <span className="text-gray-700 font-medium">Cash Distributed:</span>
                        <span className="text-gray-900 font-semibold">$159,052</span>
                    </div>
                </div>

                {/* Real-Time Transactions */}
                <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 mb-4">
                    <h2 className="text-gray-700 font-medium mb-4">Real-Time Transactions</h2>

                    <div className="space-y-4">
                        {/* Transaction 1 */}
                        <div className="flex items-center justify-between py-2">
                            <div>
                                <p className="text-sm text-gray-500">Oct 17</p>
                                <p className="text-gray-700 font-medium">Subscription to Figma</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <button className="bg-gray-200 text-sm text-gray-600 px-2 py-1 rounded">See more</button>
                                <span className="text-red-500 font-semibold">- $36.00</span>
                            </div>
                        </div>

                        {/* Transaction 2 */}
                        <div className="flex items-center justify-between py-2">
                            <div>
                                <p className="text-sm text-gray-500">Oct 14</p>
                                <p className="text-gray-700 font-medium">Contributions & Donations</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <button className="bg-gray-200 text-sm text-gray-600 px-2 py-1 rounded">Show Line Items</button>
                                <span className="text-green-500 font-semibold">+ $1,966.26</span>
                            </div>
                        </div>

                        {/* Transaction 3 */}
                        <div className="flex items-center justify-between py-2">
                            <div>
                                <p className="text-sm text-gray-500">Oct 14</p>
                                <p className="text-gray-700 font-medium">Meta Advertising Costs</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <button className="bg-gray-200 text-sm text-gray-600 px-2 py-1 rounded">See more</button>
                                <span className="text-red-500 font-semibold">- $913.57</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Login Prompt */}
                <div className="w-full max-w-md text-center text-gray-600 text-sm mt-4">
                    The rest of the financial data is available to villagers only.
                    <button className="ml-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm">Login →</button>
                </div>
            </div>

            <CollectivePhilanThropy />
        </div>
    );
};

export default Ledger;