import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logoImg from "../../public/logo.png";

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
            <img className="w-24 rounded-xl" src={logoImg} alt="Company Logo" />
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
