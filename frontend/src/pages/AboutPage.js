import React from 'react';
import Abouthero from '../components/About/Abouthero';
import Aboutmain from '../components/About/Aboutmain';
import OurApproach from '../components/About/OurApproach';
import Missionvision from '../components/About/Missionvision';
import WhoWeServe from '../components/About/WhoWeServe';
import CompanyHighlights from '../components/About/CompanyHighlights';
// import Whychooseus from '../components/About/Whychooseus';
import Footer from '../components/Common/Footer';

const AboutPage = () => {
    return (
        <>
            <Abouthero />
            <Aboutmain />
            <OurApproach />
            <Missionvision />
            <WhoWeServe />
            <CompanyHighlights />
            {/* <Whychooseus /> */}
            <Footer />
        </>
    );
};

export default AboutPage;
