import React from 'react';
import Hero from '../components/Home/Hero';
import Card from '../components/Home/Card';
import Counter from '../components/Home/Counter';
import Services from '../components/Home/Services';
import Taskey from '../components/Home/Taskey';
import Blogs from '../components/Home/Blogs';
import Clients from '../components/Home/Clients';
import RegisterWithUs from '../components/Home/RegisterWithUs';
import WhatClientSays from '../components/Home/WhatClientSays';
import Footer from '../components/Common/Footer';
import '../pages/Homepage.css'

const HomePage = () => {
    return (
        <>
            <Hero />
            <Card />
            <Counter />
            <Services />
            <Taskey />
            <Blogs />
            <Clients />
            <RegisterWithUs />
            <WhatClientSays />
            <Footer />
        </>
    );
};

export default HomePage;
