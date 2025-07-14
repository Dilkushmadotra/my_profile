import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section className="section-wrapper"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="section-card text-center rounded-4 p-4 glass-card">
        <h2 className="mb-4 animate__animated animate__zoomIn">About Me</h2>
        <p className="lead">
          I'm a passionate full-stack developer with experience in building dynamic web applications using React, Node.js, and MongoDB. I love solving real-world problems with clean and scalable code.
        </p>
      </div>
    </motion.section>
  );
};

export default About;
