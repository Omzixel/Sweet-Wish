import React, { useState } from 'react';
import {Link} from 'react-router-dom'

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(prevState => !prevState);
    };

    // Close mobile menu when the component is mounted
    React.useEffect(() => {
        setIsMobileMenuOpen(false);
    }, []);

    return (
        <nav className="text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <a href="/"><div className="text-2xl font-bold text-pink-500">Slatka Želja</div></a>

                <div className="md:hidden">
                    <button onClick={toggleMobileMenu} className="text-pink-500 hover:text-pink-300 focus:outline-none transition">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>

                <div className="hidden md:flex space-x-4 text-black">
                    <Link to="/" className="hover:text-pink-300">Početna</Link>
                    <Link to="/products" className="hover:text-pink-300">Proizvodi</Link>
                    <Link to="/about" className="hover:text-pink-300">O nama</Link>
                    <Link to="/contact" className="hover:text-pink-300">Kontakt</Link>
                </div>

                {isMobileMenuOpen && (
                    <div className="md:hidden absolute top-16 right-4 bg-white border rounded-md shadow-md">
                        <Link to="/" className="bg-gray-500 block px-4 py-2 hover:text-pink-100">Početna</Link>
                        <Link to="/products" className="bg-gray-500 block px-4 py-2 hover:text-pink-100">Proizvodi</Link>
                        <Link to="/about" className="bg-gray-500 block px-4 py-2 hover:text-pink-100">O nama</Link>
                        <Link to="/contact" className="bg-gray-500 block px-4 py-2 hover:text-pink-100">Kontakt</Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
