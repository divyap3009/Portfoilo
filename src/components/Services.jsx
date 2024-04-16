import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
    // Define your services here
    const services = [
        {
            title: 'Web Development',
            description: 'Crafting modern and responsive websites tailored to your needs.',
        },
        {
            title: 'UI/UX Design',
            description: 'Creating intuitive and user-friendly interfaces for optimal user experience.',
        },
        {
            title: 'Mobile App Development',
            description: 'Building cross-platform mobile applications using React Native.',
        },
    ];

    return (
        <section id="services" className="py-20 bg-gray-100">
            <div className="container mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8"
                >
                    Services
                </motion.h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="bg-white p-6 rounded-lg shadow-md"
                        >
                            <h3 className="text-xl font-bold mb-2 text-gray-900">{service.title}</h3>
                            <p className="text-gray-700">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
