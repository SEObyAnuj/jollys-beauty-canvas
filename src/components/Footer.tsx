
import React from 'react';
import { Instagram, Phone, Mail, MapPin, Heart, Calendar } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blush/30 to-lavender/20 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4">Jolly</h3>
            <p className="font-montserrat text-sm mb-4">
              Professional makeup artist based in Guwahati with over 4 years of experience, specializing in bridal, party, and editorial makeup.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 rounded-full bg-rosegold flex items-center justify-center text-white hover:bg-rosegold/80 transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-rosegold flex items-center justify-center text-white hover:bg-rosegold/80 transition-colors">
                <Phone size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-rosegold flex items-center justify-center text-white hover:bg-rosegold/80 transition-colors">
                <Mail size={16} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 font-montserrat text-sm">
              <li><a href="#about" className="hover:text-rosegold transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-rosegold transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-rosegold transition-colors">Portfolio</a></li>
              <li><a href="#testimonials" className="hover:text-rosegold transition-colors">Testimonials</a></li>
              <li><a href="#pricing" className="hover:text-rosegold transition-colors">Pricing & Packages</a></li>
              <li><a href="#contact" className="hover:text-rosegold transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2 font-montserrat text-sm">
              <li className="flex items-center">
                <Heart size={14} className="mr-2 text-rosegold" />
                <span>Bridal Makeup</span>
              </li>
              <li className="flex items-center">
                <Heart size={14} className="mr-2 text-rosegold" />
                <span>Party & Glam Makeup</span>
              </li>
              <li className="flex items-center">
                <Heart size={14} className="mr-2 text-rosegold" />
                <span>Editorial & Fashion Makeup</span>
              </li>
              <li className="flex items-center">
                <Heart size={14} className="mr-2 text-rosegold" />
                <span>Pre-Wedding & Engagement</span>
              </li>
              <li className="flex items-center">
                <Heart size={14} className="mr-2 text-rosegold" />
                <span>HD & Airbrush Makeup</span>
              </li>
              <li className="flex items-center">
                <Heart size={14} className="mr-2 text-rosegold" />
                <span>Natural & Everyday Makeup</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-4 font-montserrat text-sm">
              <li className="flex items-start">
                <MapPin size={16} className="mr-3 text-rosegold mt-1" />
                <span>GS Road, Guwahati, Assam, India</span>
              </li>
              <li className="flex items-start">
                <Phone size={16} className="mr-3 text-rosegold mt-1" />
                <span>+91 9876543210</span>
              </li>
              <li className="flex items-start">
                <Mail size={16} className="mr-3 text-rosegold mt-1" />
                <span>hello@jollymakeupartist.com</span>
              </li>
              <li className="flex items-start">
                <Calendar size={16} className="mr-3 text-rosegold mt-1" />
                <div>
                  <p className="font-semibold">Business Hours:</p>
                  <p>Monday - Saturday: 9am - 7pm</p>
                  <p>Sunday: By appointment only</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6 text-center">
          <p className="font-montserrat text-sm">
            © {new Date().getFullYear()} Jolly - Professional Makeup Artist. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
