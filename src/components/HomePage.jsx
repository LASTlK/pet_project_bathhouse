import React from 'react';
import Hero from './blocks/Hero';
import Stats from './blocks/Stats';
import About from './blocks/About';
import Gallery from './blocks/Gallery';
import Advantages from './blocks/Advantages';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Stats />
      <div id="about-us">
        <About />
      </div>
      <Gallery />
      <div id="contacts">
        <Advantages />
      </div>
    </>
  );
};

export default HomePage;