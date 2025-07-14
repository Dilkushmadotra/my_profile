import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaGlobe, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.section className="section-wrapper border-top"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="section-card text-center rounded-4 p-4 glass-card">
        <h2 className="mb-4 animate__animated animate__fadeIn">Contact</h2>
        <div className="row justify-content-center">
          <div className="col-md-6 text-start">
            <ul className="list-unstyled fs-5">
              <li className="mb-3 d-flex align-items-center"><FaPhoneAlt className="me-3 text-info" /> +91 9588732288</li>
              <li className="mb-3 d-flex align-items-center"><FaEnvelope className="me-3 text-warning" /> dilkushmadota5@gmail.com</li>
              <li className="mb-3 d-flex align-items-center"><FaGlobe className="me-3 text-success" /> www.dilkush.com</li>
              <li className="mb-3 d-flex align-items-center"><FaMapMarkerAlt className="me-3 text-danger" /> Morkhi(jind),Haryana India</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
