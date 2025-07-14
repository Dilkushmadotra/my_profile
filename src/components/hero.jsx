import React from 'react';
import { FaGithub, FaLinkedin, FaDownload, FaInstagram } from 'react-icons/fa';
import './Hero.css';
import myImage from '../assets/me.jpg';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.section 
      className="hero d-flex flex-column align-items-center justify-content-center text-center"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="image-wrapper mb-4">
        <div className="glow-border">
          <img src={myImage} alt="Dilkush" className="hero-img" />
        </div>
      </div>
      <div>
        <h1 className="display-4 fw-bold animate__animated animate__fadeInDown">Hi, I'm Dilkush</h1>
        <p className="lead animate__animated animate__fadeIn animate__delay-1s">
          Full-Stack Developer | Tech Enthusiast | Problem Solver
        </p>
        <div className="d-flex justify-content-center gap-3 my-3 flex-wrap animate__animated animate__fadeInUp animate__delay-2s">
          <a href="https://github.com" className="btn btn-outline-light rounded-4 px-4 py-2" target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub
          </a>
          <a href="https://linkedin.com" className="btn btn-outline-light rounded-4 px-4 py-2" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
          <a href="https://instagram.com/dilkush_ror" className="btn btn-outline-light rounded-4 px-4 py-2" target="_blank" rel="noopener noreferrer">
            <FaInstagram /> Instagram
          </a>
          <a href="/re.pdf" download className="btn btn-primary rounded-4 px-4 py-2">
            <FaDownload /> Resume
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
