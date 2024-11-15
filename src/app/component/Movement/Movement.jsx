import Link from "next/link";

const Movement = () => {
    return (
        <div className="bg-[#333333] ">
            <div className="container mx-auto ">
                <div className="flex flex-col justify-center items-center py-16">
                    <h1 className="text-4xl font-bold text-white">Become Part of the Movement</h1>
                    <p className="text-neutral-200">Serve others, give generously, and spread love.</p>
                    <div className="flex flex-col md:flex-row justify-start items-center gap-4 mt-4">

                        <Link href="/donate-now">
                            <button className="flex justify-center items-center gap-2 bg-gradient-to-r from-red-900 to-red-700 text-white px-6 py-3 rounded-md shadow-lg">
                                Donate
                            </button>
                        </Link>
                        <Link href="/signup">
                            <button className="flex justify-center items-center gap-2 bg-white text-red-500 px-6 py-3 rounded-md shadow-lg">
                                Partner With Us
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Movement;