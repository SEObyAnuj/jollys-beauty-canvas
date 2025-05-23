import React from 'react';
import { Camera, Star, Heart, Calendar, Image, Mail } from 'lucide-react';

const ServiceCard = ({ title, description, icon: Icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
      <div className="w-16 h-16 rounded-full bg-blush flex items-center justify-center mb-4 group-hover:bg-rosegold transition-colors duration-300">
        <Icon className="text-rosegold group-hover:text-white transition-colors duration-300" size={24} />
      </div>
      <h3 className="font-playfair text-xl font-semibold mb-3">{title}</h3>
      <p className="font-montserrat text-sm text-gray-600">{description}</p>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: "Bridal Makeup",
      description: "Customized bridal looks that complement your outfit, jewelry, and personal style for your special day.",
      icon: Heart
    },
    {
      title: "Party & Glam Makeup",
      description: "Bold, glamorous looks perfect for evening events, parties, and special occasions.",
      icon: Star
    },
    {
      title: "Editorial & Fashion Makeup",
      description: "Creative and impactful makeup for photoshoots, fashion shows, and media appearances.",
      icon: Camera
    },
    {
      title: "Pre-Wedding & Engagement",
      description: "Fresh, romantic looks for engagement ceremonies, pre-wedding shoots, and related functions.",
      icon: Calendar
    },
    {
      title: "HD & Airbrush Makeup",
      description: "Flawless, long-lasting HD and airbrush makeup techniques for a perfect finish that lasts all day.",
      icon: Image
    },
    {
      title: "Natural & Everyday Makeup",
      description: "Subtle, elegant makeup that enhances your features while maintaining a natural appearance.",
      icon: Mail
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">My Services</h2>
          <p className="font-montserrat text-base text-gray-600 max-w-2xl mx-auto">
            I offer a range of professional makeup services tailored to your specific needs and occasion.
          </p>
          <div className="w-20 h-1 bg-rosegold mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
