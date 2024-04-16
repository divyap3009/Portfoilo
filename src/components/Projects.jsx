import React, { useState } from 'react';
import { motion } from 'framer-motion';
import projectsData from '../data/projects';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            // Clicked on the overlay, close the modal
            closeModal();
        }
    };

    return (
        <section id="projects" className="py-20 bg-gray-100">
            <div className="container mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8"
                >
                    Projects
                </motion.h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="bg-white p-6 rounded-lg shadow-md cursor-pointer"
                            onClick={() => openModal(project)}
                        >
                            <h3 className="text-xl font-bold mb-2 text-gray-900">{project.title}</h3>
                            <p className="text-gray-700">{project.description}</p>
                            <div className="mt-2">
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 inline-block hover:underline mr-4"
                                    >
                                        GitHub
                                    </a>
                                )}
                                {project.deployLink && (
                                    <a
                                        href={project.deployLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 inline-block hover:underline"
                                    >
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
                {selectedProject && (
                    <motion.div
                        className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
                        onClick={handleOverlayClick}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="bg-white p-6 rounded-lg shadow-lg max-w-xl overflow-y-auto">
                            <button onClick={closeModal} className="absolute top-0 right-0 mt-4 mr-4 text-gray-500 hover:text-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <h2 className="text-2xl font-bold mb-4 text-gray-900">{selectedProject.title}</h2>
                            <p className="text-gray-700">{selectedProject.description}</p>
                            <div className="mt-4">
                                {selectedProject.github && (
                                    <a
                                        href={selectedProject.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 inline-block hover:underline mr-4"
                                    >
                                        GitHub
                                    </a>
                                )}
                                {selectedProject.deployLink && (
                                    <a
                                        href={selectedProject.deployLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 inline-block hover:underline"
                                    >
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default Projects;
