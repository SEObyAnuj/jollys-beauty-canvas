
import React from 'react';
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Award } from "lucide-react";

const certifications = [
  {
    id: 1,
    image: "/lovable-uploads/00c4925a-0bdc-4b78-a896-9397be443ddf.png",
    title: "Bridal Master Class",
    institute: "Maahi Pol Makeup Studio & Academy",
    description: "10 Days Bridal Master Class with Best Brazilian Technique"
  },
  {
    id: 2,
    image: "/lovable-uploads/bc0c1e8f-6804-44c2-888a-fe85b1e6886e.png",
    title: "Makeup Career Workshop",
    institute: "Airblack Beauty Club",
    description: "Kickstart Your Makeup Career workshop by Bhumika Bahl"
  },
  {
    id: 3,
    image: "/lovable-uploads/25542fd7-2b03-4948-b0f5-a6ac209cb12c.png",
    title: "Professional Certification",
    institute: "Maahi Pol Makeup Studio",
    description: "Professional Makeup Artistry Certification"
  }
];

const CertifiedExpertiseSection = () => {
  return (
    <section id="certifications" className="py-20 bg-gradient-to-b from-ivory to-blush/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">Certified Expertise</h2>
          <p className="font-montserrat text-base text-gray-600 max-w-2xl mx-auto">
            Professional training and industry-recognized certifications that back Jolly's artistry.
          </p>
          <div className="w-20 h-1 bg-rosegold mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {certifications.map((certification) => (
            <HoverCard key={certification.id}>
              <HoverCardTrigger asChild>
                <Card className="overflow-hidden border border-rosegold/20 shadow-md rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02] bg-white/90 hover:bg-white cursor-pointer">
                  <CardContent className="p-4">
                    <div className="relative">
                      <AspectRatio ratio={3/4} className="bg-white rounded-lg overflow-hidden">
                        <img
                          src={certification.image}
                          alt={certification.title}
                          className="object-cover h-full w-full"
                        />
                      </AspectRatio>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4 rounded-lg">
                        <div className="text-white text-center">
                          <Award className="w-6 h-6 mb-1 mx-auto text-rosegold" />
                          <h3 className="font-playfair text-lg font-medium">{certification.title}</h3>
                          <p className="text-sm font-montserrat text-white/90">{certification.institute}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </HoverCardTrigger>
              <HoverCardContent className="w-80 p-0 shadow-lg border border-rosegold/20 bg-white rounded-xl">
                <div className="p-4">
                  <h3 className="font-playfair text-xl font-semibold mb-2">{certification.title}</h3>
                  <p className="text-sm font-medium text-rosegold mb-2">{certification.institute}</p>
                  <p className="text-sm text-gray-600">{certification.description}</p>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="font-montserrat italic text-gray-600">
            Every makeover is backed by professional training and a passion for the art.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CertifiedExpertiseSection;
