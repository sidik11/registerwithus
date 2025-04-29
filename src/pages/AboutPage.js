import React from 'react';
import Abouthero from '../components/About/Abouthero';
import Aboutmain from '../components/About/Aboutmain';
import Missionvision from '../components/About/Missionvision';
import Whychooseus from '../components/About/Whychooseus';
import Footer from '../components/Common/Footer';

const AboutPage = () => {
    return (
        <>
            <Abouthero />
            <Aboutmain />
            <Missionvision />
            <Whychooseus />
            <Footer />
        </>
    );
};

export default AboutPage;
