import React, { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-gray-800 text-white py-4">
            <div className="container mx-auto flex justify-between items-center px-4">
                <h1 className="text-2xl sm:text-3xl font-bold">Portfolio</h1>
                <button className="sm:hidden" onClick={toggleMenu}>
                    {/* Hamburger icon for mobile */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                <nav
                    className={`sm:hidden absolute top-16 inset-x-0 bg-gray-800 z-10 transition-all duration-500 ease-in-out transform ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}
                >
                    {isMenuOpen && (
                        <ul className="flex flex-col space-y-4 text-center">
                            <li>
                                <a href="#about" className="hover:text-gray-300 block py-2">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#skills" className="hover:text-gray-300 block py-2">
                                    Skills
                                </a>
                            </li>
                            <li>
                                <a href="#projects" className="hover:text-gray-300 block py-2">
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a href="#services" className="hover:text-gray-300 block py-2">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="#timeline" className="hover:text-gray-300 block py-2">
                                    Timeline
                                </a>
                            </li>
                            <li>
                                <a href="#testimonial" className="hover:text-gray-300 block py-2">
                                    Testimonial
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="hover:text-gray-300 block py-2">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Header;
