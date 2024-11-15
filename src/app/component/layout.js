import React from 'react';
import NavBar from './shared/Navbar/Navbar';
import Footer from './shared/Footer/Footer';

const ComponentLayout = ({ children }) => {
    return (
        <div>
            <NavBar />
            {children}
            <Footer />
        </div>
    );
};

export default ComponentLayout;