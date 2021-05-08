import React from 'react';

import NavBar from '@common/NavBar';

import Hero from '@sections/Hero';
import About from '@sections/About';
import Footer from '@sections/Footer';

const Home: React.FC = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Footer />
    </>
  );
};

export default Home;
