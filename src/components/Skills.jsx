import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skills = ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind CSS'];

    return (
        <section id="skills" className="py-20">
            <div className="container mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8"
                >
                    Skills
                </motion.h2>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-gray-200 p-4 rounded-lg shadow-md"
                        >
                            <p className="text-lg text-gray-800">{skill}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
