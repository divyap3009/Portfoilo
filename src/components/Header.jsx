import React from 'react';

const Header = () => {
    return (
        <header className="bg-gray-800 text-white py-4">
            <div className="container mx-auto flex justify-between items-center px-4">
                <h1 className="text-2xl font-bold">Portfolio</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <a href="#about" className="hover:text-gray-300">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#skills" className="hover:text-gray-300">
                                Skills
                            </a>
                        </li>
                        <li>
                            <a href="#projects" className="hover:text-gray-300">
                                Projects
                            </a>
                        </li>
                        <li>
                            <a href="#services" className="hover:text-gray-300">
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="#timeline" className="hover:text-gray-300">
                                Timeline
                            </a>
                        </li>
                        <li>
                            <a href="#testimonial" className="hover:text-gray-300">
                                Testimonial
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:text-gray-300">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
