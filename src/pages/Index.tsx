
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import PortfolioSection from '@/components/PortfolioSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CertifiedExpertiseSection from '@/components/CertifiedExpertiseSection';
import PricingSection from '@/components/PricingSection';
import BookCTA from '@/components/BookCTA';
import ContactSection from '@/components/ContactSection';
import InstagramSection from '@/components/InstagramSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="font-montserrat bg-ivory min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <CertifiedExpertiseSection />
      <PricingSection />
      <BookCTA />
      <ContactSection />
      <InstagramSection />
      <Footer />
    </div>
  );
};

export default Index;
