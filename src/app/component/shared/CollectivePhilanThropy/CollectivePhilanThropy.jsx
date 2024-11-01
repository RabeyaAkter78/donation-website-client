import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const CollectivePhilanThropy = () => {
    return (
        <div>
            <div className="bg-primaryColor">
                <div className="container mx-auto py-16 flex justify-between items-center text-white">
                    <p className="text-3xl">Need help or have a question?</p>
                    <button className="bg-white text-primaryColor px-6 py-2 rounded-xl">Contact Our Team</button>
                </div>
            </div>
            <div className="container mx-auto flex  flex-col justify-center items-center py-24 ">
                <p className="text-6xl font-bold text-center">EXPERIENCE THE POWER OF COLLECTIVE <span className="text-primaryColor">PHILANTHROPY</span></p>
                <p className="pt-6 pb-12">Already a member? <span className="text-primaryColor"><Link href="/login">Sign In</Link></span></p>
                <div className="flex flex-col md:flex-row justify-start items-center gap-4 mt-4">
                    <Link href="">
                        <button className=" border-2  px-6 py-3 rounded-md shadow-lg">
                            Join Us
                        </button>
                    </Link>
                    <Link href="">
                        <button className="flex justify-center items-center gap-2 bg-gradient-to-r from-red-900 to-red-700 text-white px-6 py-3 rounded-md shadow-lg">
                            Make a One-time Donation <FaArrowRight />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CollectivePhilanThropy;