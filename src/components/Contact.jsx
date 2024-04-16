import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            // Simulate form submission delay
            await new Promise((resolve) => setTimeout(resolve, 2000));
            // Once submitted successfully, you can send the form data to a backend server here
            console.log(formData);
            setSubmitSuccess(true);
        } catch (error) {
            console.error('Form submission error:', error);
        }
        setIsSubmitting(false);
    };

    return (
        <section id="contact" className="py-20 bg-gray-100">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8">Contact Me</h2>
                {submitSuccess ? (
                    <p className="text-green-600 mb-4">Message sent successfully!</p>
                ) : (
                    <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                        <div className="mb-6">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Your Email"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your Message"
                                rows="4"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className={`bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-all duration-300 ${
                                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
};

export default Contact;
