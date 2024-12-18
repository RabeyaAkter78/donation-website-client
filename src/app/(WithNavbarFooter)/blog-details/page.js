import CollectivePhilanThropy from '@/app/component/shared/CollectivePhilanThropy/CollectivePhilanThropy';
import GoBackButton from '@/app/component/shared/GoBackButton/GoBackButton';
import SectionTitle from '@/app/component/shared/SectionTitle/SectionTitle';
import Link from 'next/link';
import React from 'react';

const BlogDetailsPage = () => {
    return (
        <div className=' bg-[#fafafa]'>
            <div className='container mx-auto py-24'>
                <GoBackButton />
                <SectionTitle button={"Blog Details"}
                    title={"Helping rural family farms in Sierra Leone earn income"}
                    description={"An open view of policies and programs voted on by our community. See what's proposed, enacted, and costs associated with each policy."}
                />
                <div className='max-w-screen-lg mx-auto'>
                    <div className='my-10 bg-neutral-100 p-6'>

                        <h1 className='text-xl font-medium'> Refugee Survival, a Challenge</h1>
                        <p className='text-neutral-600 my-5'>Uganda is one of the leading refugee-hosting countries with over 1.5M refugees whose sole survival is dependent on handouts. The World Food Program gives refugees $5.4 per head or equivalent in food rations per month, barely enough to sustain. As a result, many refugees are left in vulnerable situations with no additional means to supplement. This situation is exacerbated for women-led households and urban refugees. For example, 81% of the refugees in Uganda are women and children, and 64% of the homes are women-led (UNHCR 2020). As for urban refugees, Kampala alone has over 80,000 refugees who don't receive any aid, according to the refugee policy.</p>
                        <p className='text-neutral-600 my-5'>Uganda is one of the leading refugee-hosting countries with over 1.5M refugees whose sole survival is dependent on handouts. The World Food Program gives refugees $5.4 per head or equivalent in food rations per month, barely enough to sustain. As a result, many refugees are left in vulnerable situations with no additional means to supplement. This situation is exacerbated for women-led households and urban refugees. For example, 81% of the refugees in Uganda are women and children, and 64% of the homes are women-led (UNHCR 2020). As for urban refugees, Kampala alone has over 80,000 refugees who don't receive any aid, according to the refugee policy.</p>
                        <p className='text-neutral-600 my-5'>Uganda is one of the leading refugee-hosting countries with over 1.5M refugees whose sole survival is dependent on handouts. The World Food Program gives refugees $5.4 per head or equivalent in food rations per month, barely enough to sustain. As a result, many refugees are left in vulnerable situations with no additional means to supplement. This situation is exacerbated for women-led households and urban refugees. For example, 81% of the refugees in Uganda are women and children, and 64% of the homes are women-led (UNHCR 2020). As for urban refugees, Kampala alone has over 80,000 refugees who don't receive any aid, according to the refugee policy.</p>
                    </div>
                </div>
            </div>
        <CollectivePhilanThropy></CollectivePhilanThropy>

        </div>
    );
};

export default BlogDetailsPage;