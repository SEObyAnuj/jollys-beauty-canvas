
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

const BookCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-rosegold/90 to-plum/90 text-white">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">Ready to Book Your Makeup Session?</h2>
        <p className="font-montserrat text-base md:text-lg mb-8 max-w-2xl mx-auto">
          Get in touch today to secure your preferred date and discuss your unique style and preferences.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button className="bg-white text-rosegold hover:bg-white/90 font-montserrat px-8">
            Book Appointment
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-rosegold transition-all font-montserrat px-8">
            <Phone className="mr-2" size={18} />
            Call Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BookCTA;
