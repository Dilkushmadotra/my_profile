import React from 'react';
import Navigation from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import 'animate.css';
import AOS from 'aos';
import { Element } from 'react-scroll';

AOS.init({ duration: 1000 });

function App() {
  return (
    <>
      <Navigation />
      <Element name="hero"><Hero /></Element>
      <Element name="about"><About /></Element>
      <Element name="projects"><Projects /></Element>
      <Element name="contact"><Contact /></Element>
    </>
  );
}

export default App;
