import React from 'react';

import NavBar from '@common/NavBar';

import Hero from '@sections/Hero';
import About from '@sections/About';

const Home: React.FC = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
    </>
  );
};

export default Home;
