import React from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Features from '../Components/Features';
import About from '../Components/About';
import Reviews from '../Components/Reviews';
import Contact from '../Components/Contact';
import PrincipalMessage from '../Components/PrincipalMessage';
import Footer from '../Components/Footer';
import FloatingCTA from '../Components/FloatingCTA';

const page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Reviews />
      <Contact />
      <PrincipalMessage />
      <Footer />
      <FloatingCTA />
    </>
  );
};

export default page;