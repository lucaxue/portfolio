import React from 'react';

import NavBar from '@common/NavBar';

import Hero from '@sections/Hero';
import About from '@sections/About';
import Projects from '@sections/Projects';
import Footer from '@sections/Footer';

const Home: React.FC = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </>
  );
};

export default Home;
