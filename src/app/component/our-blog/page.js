import Image from 'next/image';
import React from 'react';
import img from "../../../images/img.png"
import user1 from "../../../images/user1.jpg"
import SectionTitle from '../shared/SectionTitle/SectionTitle';
import CollectivePhilanThropy from '../shared/CollectivePhilanThropy/CollectivePhilanThropy';
import GoBackButton from '../shared/GoBackButton/GoBackButton';
const articles = [
    {
        category: "Impact Stories",
        title: "Breaking down the Kwanda Project",
        description: "An in-depth look into the Kwanda Project, its goals, and how it is transforming communities. We discuss its impact and share insights from those involved.",
        author: {
            name: "Jessica Wills",
            publishedDate: "October 23rd, 2023"
        },
        buttonText: "Read the project",
        imageUrl: "/path/to/image1.png"
    },
    {
        category: "Project Insights",
        title: "How we evaluate projects at Kwanda and our basic criteria for funding",
        description: "Explore Kwanda's funding criteria and the principles guiding our selection process. Learn what we look for in impactful projects.",
        author: {
            name: "Jessica Wills",
            publishedDate: "October 20th, 2023"
        },
        buttonText: "Read the project",
        imageUrl: "/path/to/image2.png"
    },
    {
        category: "Impact Stories",
        title: "Breaking down the Kwanda Project",
        description: "An in-depth look into the Kwanda Project, its goals, and how it is transforming communities. We discuss its impact and share insights from those involved.",
        author: {
            name: "Jessica Wills",
            publishedDate: "October 23rd, 2023"
        },
        buttonText: "Read the project",
        imageUrl: "/path/to/image3.png"
    },
    {
        category: "Project Insights",
        title: "How we evaluate projects at Kwanda and our basic criteria for funding",
        description: "Explore Kwanda's funding criteria and the principles guiding our selection process. Learn what we look for in impactful projects.",
        author: {
            name: "Jessica Wills",
            publishedDate: "October 20th, 2023"
        },
        buttonText: "Read the project",
        imageUrl: "/path/to/image4.png"
    }
];

const OurBlogPage = () => {
    return (
        <div >
            <GoBackButton  />
            <SectionTitle button={"Our blog"} title={"Our Blogs"}
                description="Explore our latest articles and insights on impactful projects, funding criteria, and community stories. Stay informed with updates from our team and learn more about how we're making a difference." />


            <div className="max-w-4xl mx-auto py-8 px-4">




                {articles.map((article, index) => (
                    <div
                        key={index}
                        className="flex flex-col md:flex-row items-start md:items-center bg-neutral-100 p-6 rounded-lg shadow-md mb-6 gap-10"
                    >
                        <Image
                            src={img}
                            alt={article.title}
                            className="w-24 h-24 md:w-52 md:h-72 rounded-md object-cover "
                        />
                        <div className="flex-1">
                            <p className="text-red-500 font-semibold">{article.category}</p>
                            <h2 className="text-2xl font-bold text-gray-800 my-4">{article.title}</h2>
                            <p className="text-gray-600 mt-2">{article.description}</p>
                            <div className="mt-4 mb-8">
                                <div className="text-gray-500 text-sm  flex justify-start items-center gap-2 my-8">
                                    <Image
                                        src={user1}
                                        alt={article.title}
                                        className="w-10 h-10  rounded-full object-cover "
                                    />
                                    {article.author.name} • {article.author.publishedDate}
                                </div>
                                <button className=" border-2 border-neutral-600 px-4 py-2 rounded-lg ">
                                    {article.buttonText}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
                {/* Pagination */}
                <div className="flex justify-center mt-6 space-x-2">
                    <button className="text-gray-500 hover:text-gray-800">◀</button>
                    {[1, 2, 3, 4, 5, 6, 7].map((page) => (
                        <button
                            key={page}
                            className={`w-8 h-8 rounded-lg ${page === 2 ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700'
                                } hover:bg-gray-300`}
                        >
                            {page}
                        </button>
                    ))}
                    <button className="text-gray-500 hover:text-gray-800">▶</button>
                </div>
            </div>
            <CollectivePhilanThropy />
        </div>
    );
};

export default OurBlogPage;
