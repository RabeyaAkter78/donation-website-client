/* eslint-disable react/no-unescaped-entities */

const SectionTitle = ({ button, title, description }) => {
    return (
        <div className=''>
            <div className='container mx-auto py-24'>
                <div div className='flex flex-col justify-center items-center'>
                    <p className='border px-4 py-2 rounded-xl bg-primaryColor text-white'>{button}</p>
                    <h1 className='text-3xl md:text-6xl font-bold py-6'>{title}</h1>
                    <p className='text-neutral-500'>{description}</p>
                </div>
            </div>

        </div>
    );
};

export default SectionTitle;