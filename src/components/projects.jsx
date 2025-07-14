import React, { useState } from 'react';
import { Card, Modal } from 'react-bootstrap';
import { motion } from 'framer-motion';
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.jpg';

const projects = [
  {
    title: 'AI Career Advisor',
    description: 'Smart React + Gemini AI app that guides students in career selection.',
    image: project1,
    tech: 'React.js, Gemini API, Bootstrap'
  },
  {
    title: 'Finance Tracker',
    description: 'Full-featured React app to track expenses, income, and budgets.',
    image: project2,
    tech: 'React.js, Context API, Chart.js, Bootstrap'
  },
  {
    title: 'School Dashboard',
    description: 'Student-teacher dashboard with full management features.',
    image: project3,
    tech: 'React.js, MongoDB, Node.js, Express, Bootstrap'
  }
];

const Projects = () => {
  const [show, setShow] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  const handleShow = (project) => {
    setActiveProject(project);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <motion.section className="section-wrapper border-top"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="section-card rounded-4 p-4 glass-card">
        <h2 className="text-center mb-4 animate__animated animate__fadeIn">Projects</h2>
        <div className="row g-4">
          {projects.map((project, idx) => (
            <div className="col-md-4" key={idx}>
              <Card className="h-100 bg-dark text-white shadow glass-card rounded-4">
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <button 
                    onClick={() => handleShow(project)} 
                    className="mt-auto view-project-btn"
                  >
                    View Project
                  </button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {activeProject && (
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>{activeProject.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={activeProject.image} alt={activeProject.title} className="img-fluid mb-3 rounded-4" />
            <p><strong>Description:</strong> {activeProject.description}</p>
            <p><strong>Tech Used:</strong> {activeProject.tech}</p>
          </Modal.Body>
        </Modal>
      )}
    </motion.section>
  );
};

export default Projects;
