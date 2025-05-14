
import React, { useState } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";

const PortfolioSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  const portfolioItems = [
    {
      id: 1,
      image: "/lovable-uploads/fc085184-3cde-46de-abfe-f2ccb7b45b04.png",
      category: "Glam",
      client: "Priya"
    },
    {
      id: 2,
      image: "/lovable-uploads/e5adf35a-809a-4df6-ab0d-7a52ceb6ab6b.png",
      category: "Bridal",
      client: "Meena"
    },
    {
      id: 3,
      image: "/lovable-uploads/cb317823-ce3f-46f3-9759-180d4f42f8ae.png",
      category: "Bridal",
      client: "Anjali"
    },
    {
      id: 4,
      image: "/lovable-uploads/7326fbc1-6a7b-449a-bf14-0b06550af720.png",
      category: "Traditional",
      client: "Deepa"
    },
    {
      id: 5,
      image: "/lovable-uploads/0eb11030-7fb2-4334-95ea-dea5a2253cb0.png",
      category: "Natural",
      client: "Sonia"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      category: "Party",
      client: "Rhea"
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
      category: "HD Makeup",
      client: "Jyoti"
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1",
      category: "Engagement",
      client: "Neha"
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      category: "Editorial",
      client: "Riya"
    },
    {
      id: 10,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
      category: "Fashion",
      client: "Tanvi"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-beige/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">Makeup Look Showcase</h2>
          <p className="font-montserrat text-base text-gray-600 max-w-2xl mx-auto">
            Browse through my portfolio of makeup transformations and artistic creations.
          </p>
          <div className="w-20 h-1 bg-rosegold mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {portfolioItems.map((item) => (
            <div 
              key={item.id} 
              className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedImage(item)}
            >
              <div className="relative pt-[125%]">
                <img 
                  src={item.image} 
                  alt={`${item.category} - ${item.client}`}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="font-playfair text-white text-lg font-semibold">{item.category}</h3>
                <p className="font-montserrat text-white/80 text-sm">{item.client}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-3xl p-0 bg-transparent border-none shadow-none">
          {selectedImage && (
            <div className="relative">
              <img 
                src={selectedImage.image} 
                alt={`${selectedImage.category} - ${selectedImage.client}`}
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 rounded-b-lg">
                <h3 className="font-playfair text-white text-lg font-semibold">{selectedImage.category} - {selectedImage.client}</h3>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PortfolioSection;
