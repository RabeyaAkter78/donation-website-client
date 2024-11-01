import React from 'react';
import SectionTitle from '../shared/SectionTitle/SectionTitle';
import CollectivePhilanThropy from '../shared/CollectivePhilanThropy/CollectivePhilanThropy';

const PolicyPage = () => {
    return (
        <div>
            <SectionTitle
                button={"Our Policies"}
                title={"Policies"}
                description={"An open view of policies and programs voted on by our community. See what's proposed, enacted, and costs associated with each policy."}
            />

            <CollectivePhilanThropy />
        </div>
    );
};

export default PolicyPage;