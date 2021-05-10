import React from 'react';

import NavBar from '@common/NavBar';

import Hero from '@sections/Hero';
import About from '@sections/About';
import Skills from '@sections/Skills';
import Projects from '@sections/Projects';
import Footer from '@sections/Footer';

const Home: React.FC = () => (
  <>
    <NavBar />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Footer />
  </>
);

export default Home;
