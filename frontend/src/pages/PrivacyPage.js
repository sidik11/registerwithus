import React from 'react';
// import Abouthero from '../components/About/Abouthero';
import PrivacyHead from '../components/Privacy/PrivacyHead';
import PrivacyPolicy from '../components/Privacy/PrivacyPolicy';
import Footer from '../components/Common/Footer';

const PrivacyPage = () => {
    return (
        <>
            {/* <Abouthero /> */}
            <PrivacyHead />
            <PrivacyPolicy />
            <Footer />
        </>
    );
};

export default PrivacyPage;
