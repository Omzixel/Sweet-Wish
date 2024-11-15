import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  // Close mobile menu when the component is mounted
  React.useEffect(() => {
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <header className="w-full py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center">
          <nav className="hidden md:flex space-x-4">
            <Button variant="ghost" asChild>
              <Link to="/services">USLUGE</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/gallery">GALERIJA</Link>
            </Button>
          </nav>
          <Link to="/" className="flex items-center space-x-2 mx-8">
            <svg
              className="h-8 w-8 text-primary"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
              <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
              <path d="M12 3v6" />
            </svg>
            <span className="font-bold text-xl">Logo</span>
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Button variant="ghost" asChild>
              <Link to="/about">O NAMA</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/contact">KONTAKT</Link>
            </Button>
          </nav>
        </div>
        <div className="md:hidden flex justify-center mt-4 space-x-4">
          <Button variant="ghost" asChild>
            <Link to="/services">USLUGE</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/gallery">GALERIJA</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/about">O NAMA</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/contact">KONTAKT</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
