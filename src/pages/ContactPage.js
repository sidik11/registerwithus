import React from 'react';
import Contactbanner from '../components/ContactUs/Contactbanner';
import Contactus from '../components/ContactUs/Contactus';
import Footer from '../components/Common/Footer';
import '../pages/Homepage.css'

const HomePage = () => {
    return (
        <>
            <Contactbanner />
            <Contactus />
            <Footer />
        </>
    );
};

export default HomePage;
