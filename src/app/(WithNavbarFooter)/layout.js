import React from 'react';
import NavBar from '../component/shared/Navbar/Navbar';
import Footer from '../component/shared/Footer/Footer';

const MainLayout = ({ children }) => {
    return (
        <div>
            <NavBar />
            {children}
            <Footer />
        </div>
    );
};

export default MainLayout;