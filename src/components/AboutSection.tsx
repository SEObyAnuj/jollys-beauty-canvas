
import React from 'react';
import { Heart } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-beige">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-2/5">
            <div className="relative group overflow-hidden">
              <div className="absolute -top-5 -left-5 w-full h-full border-2 border-rosegold rounded-lg transition-all duration-500 group-hover:border-plum"></div>
              <img 
                src="/lovable-uploads/dd5df8e8-c265-4efa-90fc-55471b1c7170.png" 
                alt="Jolly - Makeup Artist" 
                className="w-full rounded-lg shadow-xl relative z-10 transition-transform duration-700 ease-in-out group-hover:scale-105"
              />
              <div className="absolute -bottom-5 -right-5 bg-rosegold text-white p-3 rounded-lg shadow-lg z-20 flex items-center transition-colors duration-500 group-hover:bg-plum">
                <Heart className="mr-2" size={18} />
                <span className="font-montserrat text-sm">Passionate About Beauty</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-3/5">
            <div className="text-center lg:text-left">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6 relative inline-block">
                About Jolly
                <div className="absolute bottom-0 left-0 w-1/2 h-1 bg-rosegold"></div>
              </h2>
              
              <p className="font-montserrat text-base mb-4 leading-relaxed">
                Hello Beautiful! I'm Jolly, a professional makeup artist based in Guwahati with over 4 years of experience in the beauty industry. My journey into the world of makeup artistry began with a simple passion for enhancing natural beauty and has evolved into a dedicated craft that I'm incredibly proud of.
              </p>
              
              <p className="font-montserrat text-base mb-6 leading-relaxed">
                I believe that makeup is more than just enhancing features—it's about making you feel confident and radiant on your special days. Whether it's your wedding day, a glamorous party, or a photoshoot, I work closely with you to understand your vision and bring it to life.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow duration-300">
                  <h3 className="font-playfair text-2xl font-bold text-rosegold">4+</h3>
                  <p className="font-montserrat text-sm">Years Experience</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow duration-300">
                  <h3 className="font-playfair text-2xl font-bold text-rosegold">800+</h3>
                  <p className="font-montserrat text-sm">Happy Clients</p>
                </div>
              </div>
              
              <p className="font-montserrat text-base italic">
                "My goal is simple: to make you look and feel like the best version of yourself."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
