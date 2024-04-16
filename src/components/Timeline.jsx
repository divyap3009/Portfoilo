import React from 'react';
import { motion } from 'framer-motion';
import timelineData from '../data/timeline';

const Timeline = () => {
    return (
        <section id="timeline" className="py-20">
            <div className="container mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8"
                >
                    Timeline
                </motion.h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {timelineData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="bg-white p-6 rounded-lg shadow-md"
                        >
                            <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                            <p className="text-gray-700 mb-2">{item.date}</p>
                            <p className="text-gray-700">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Timeline;
