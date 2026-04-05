import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/blocks/Hero';
import Stats from './components/blocks/Stats';
import About from './components/blocks/About';
import Gallery from './components/blocks/Gallery';
import Advantages from './components/blocks/Advantages';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Gallery />
        <Advantages />
      </main>
      <Footer />
    </div>
  );
}

export default App;