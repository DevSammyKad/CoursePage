import React from 'react';
import Navbar from '../components/Navbar';

import Footer from '../components/Footer';
import Hero from '../components/Hero';
import WhyUs from '../components/WhyUs';
import PopularCourses from '../components/PopularCourses';
import FeedBack from '../components/FeedBack';
import Cta from '../components/Cta';

const Home = () => {
  return (
    <div>
      <Hero />
      <WhyUs />
      <PopularCourses />
      <FeedBack />
      <Cta />
    </div>
  );
};

export default Home;
