
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blush/20 to-lavender/10 z-0"></div>
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-shimmer-gradient animate-shimmer z-0 opacity-30"></div>
      
      <div className="container mx-auto px-4 md:px-8 z-10 flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
          <h2 className="font-playfair text-xl md:text-2xl text-rosegold">Professional Makeup Artist</h2>
          <h1 className="font-playfair text-3xl md:text-5xl font-bold mt-4 mb-6 leading-tight">
            Enhance Your Natural Beauty with <br/>
            <span className="text-rosegold italic">Jolly</span> 
            <span className="block text-2xl md:text-3xl mt-2 font-normal">Guwahati's Trusted Makeup Artist</span>
          </h1>
          <p className="font-montserrat text-base md:text-lg mb-8 max-w-md mx-auto lg:mx-0">
            Transform your look for any special occasion with expert makeup artistry that brings out your unique beauty.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <Button className="bg-rosegold hover:bg-rosegold/90 text-white rounded-md px-8 py-6 font-montserrat">
              Book Your Look
            </Button>
            <Button variant="outline" className="border-rosegold text-rosegold hover:bg-rosegold hover:text-white transition-all duration-300 rounded-md px-8 py-6 font-montserrat">
              View Portfolio
            </Button>
          </div>
        </div>
        <div className="lg:w-1/2 relative">
          <div className="rounded-full w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-blush/40 absolute -top-10 -right-10 z-0"></div>
          <div className="relative z-10 rounded-tl-[100px] rounded-br-[100px] overflow-hidden shadow-2xl border-8 border-white">
            <img
              src="/lovable-uploads/92681c01-e02c-47b9-a682-4f586b31f37a.png"
              alt="Jolly - Professional Makeup Artist"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 -left-5 z-20 bg-white p-4 rounded-lg shadow-lg">
            <p className="font-playfair text-sm text-rosegold">
              4+ Years of Experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
