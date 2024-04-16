import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import testimonialData from '../data/testimonials';

const Testimonial = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex === testimonialData.length - 1 ? 0 : prevIndex + 1));
        }, 5000); // Change testimonial every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="testimonial" className="py-20 bg-gray-100">
            <div className="container mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8"
                >
                    Testimonials
                </motion.h2>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="max-w-xl mx-auto">
                    {testimonialData.map((testimonial, index) => (
                        <motion.div key={index} className={`text-center mb-8 ${index === activeIndex ? 'opacity-100' : 'opacity-0 hidden sm:block'}`}>
                            <p className="text-lg sm:text-xl text-gray-800 mb-4">{testimonial.quote}</p>
                            <p className="text-gray-600">{testimonial.author}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonial;
