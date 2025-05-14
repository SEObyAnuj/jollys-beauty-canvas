
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const packages = [
  {
    id: 1,
    name: "Natural Makeup",
    price: "₹2,500",
    description: "Perfect for casual events and everyday looks",
    features: [
      "Makeup application",
      "Base preparation",
      "Natural-looking finish",
      "Lasts 6-8 hours",
      "Touch-up kit available (+₹500)"
    ]
  },
  {
    id: 2,
    name: "Party & Glam",
    price: "₹3,500",
    description: "Stand out at any party or special event",
    features: [
      "HD makeup application",
      "Base preparation",
      "False lashes included",
      "Lasts 8-10 hours",
      "Touch-up kit available (+₹500)"
    ],
    popular: true
  },
  {
    id: 3,
    name: "Bridal",
    price: "₹12,000",
    description: "Complete bridal look for your special day",
    features: [
      "Premium HD/Airbrush makeup",
      "Complete look (including hairstyling)",
      "False lashes & accessories",
      "Long-lasting formula (12+ hours)",
      "Touch-up kit included"
    ]
  }
];

const PricingPackage = ({ pkg }) => {
  return (
    <div className={`rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${
      pkg.popular 
        ? 'border-2 border-rosegold shadow-lg transform scale-105 md:scale-100 md:hover:scale-105' 
        : 'border border-gray-200 shadow-md'
    }`}>
      {pkg.popular && (
        <div className="bg-rosegold text-white text-center py-2 font-montserrat text-sm font-medium">
          Most Popular
        </div>
      )}
      
      <div className="p-6 md:p-8 bg-white">
        <h3 className="font-playfair text-xl font-semibold mb-2">{pkg.name}</h3>
        <p className="font-montserrat text-sm text-gray-600 mb-4">{pkg.description}</p>
        
        <div className="mb-6">
          <span className="font-playfair text-3xl font-bold text-rosegold">{pkg.price}</span>
        </div>
        
        <ul className="space-y-3 mb-6">
          {pkg.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check size={16} className="mr-2 text-rosegold mt-1 flex-shrink-0" />
              <span className="font-montserrat text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button className={`w-full ${
          pkg.popular 
            ? 'bg-rosegold hover:bg-rosegold/90 text-white' 
            : 'bg-white border-2 border-rosegold text-rosegold hover:bg-rosegold hover:text-white'
        }`}>
          Book Now
        </Button>
      </div>
    </div>
  );
};

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-beige/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">Pricing & Packages</h2>
          <p className="font-montserrat text-base text-gray-600 max-w-2xl mx-auto">
            Choose from my range of makeup packages designed to suit various occasions and budgets.
          </p>
          <div className="w-20 h-1 bg-rosegold mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <PricingPackage key={pkg.id} pkg={pkg} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="font-montserrat text-base mb-4">Need a custom package for your special event?</p>
          <Button variant="outline" className="border-rosegold text-rosegold hover:bg-rosegold hover:text-white transition-all duration-300">
            Get Custom Bridal Package Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
