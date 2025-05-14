
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <a href="#" className="font-playfair text-2xl md:text-3xl font-bold text-rosegold">Jolly</a>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="font-montserrat text-sm hover:text-rosegold transition-colors">About</a>
          <a href="#services" className="font-montserrat text-sm hover:text-rosegold transition-colors">Services</a>
          <a href="#portfolio" className="font-montserrat text-sm hover:text-rosegold transition-colors">Portfolio</a>
          <a href="#testimonials" className="font-montserrat text-sm hover:text-rosegold transition-colors">Testimonials</a>
          <a href="#pricing" className="font-montserrat text-sm hover:text-rosegold transition-colors">Pricing</a>
          <a href="#contact" className="font-montserrat text-sm hover:text-rosegold transition-colors">Contact</a>
        </div>
        
        <Button variant="outline" className="hidden md:flex border-rosegold text-rosegold hover:bg-rosegold hover:text-white transition-all duration-300">
          Book Now
        </Button>
        
        <button 
          className="md:hidden text-rosegold"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md animate-fade-in">
          <div className="flex flex-col space-y-4 p-4">
            <a href="#about" className="font-montserrat text-sm hover:text-rosegold transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>About</a>
            <a href="#services" className="font-montserrat text-sm hover:text-rosegold transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
            <a href="#portfolio" className="font-montserrat text-sm hover:text-rosegold transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>Portfolio</a>
            <a href="#testimonials" className="font-montserrat text-sm hover:text-rosegold transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>Testimonials</a>
            <a href="#pricing" className="font-montserrat text-sm hover:text-rosegold transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>Pricing</a>
            <a href="#contact" className="font-montserrat text-sm hover:text-rosegold transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
            <Button variant="outline" className="border-rosegold text-rosegold hover:bg-rosegold hover:text-white transition-all duration-300 w-full">
              Book Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
