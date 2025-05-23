import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Guwahati",
    content: "Jolly did my wedding makeup and I was absolutely thrilled with the results! She listened to what I wanted and made me feel like the most beautiful bride. My makeup lasted all day and night, even through tears and hugs.",
    rating: 5
  },
  {
    id: 2,
    name: "Ankita Roy",
    location: "Silchar",
    content: "I had a pre-wedding photoshoot and Jolly created the perfect look. She's not only talented but also makes you feel comfortable and relaxed. I'll definitely be booking her for my wedding day!",
    rating: 5
  },
  {
    id: 3,
    name: "Meena Devi",
    location: "Dibrugarh",
    content: "Jolly has done my makeup for several family functions and she never disappoints. She knows exactly how to enhance your features while keeping your look elegant and appropriate for any occasion.",
    rating: 5
  },
  {
    id: 4,
    name: "Rhea Choudhury",
    location: "Jorhat",
    content: "I was nervous about getting my makeup done professionally for the first time, but Jolly made me feel so comfortable. The HD makeup she did for my engagement was flawless and photographed beautifully!",
    rating: 4
  },
  {
    id: 5,
    name: "Diya Goswami",
    location: "Tezpur",
    content: "For my sister's wedding, I wanted a glamorous yet elegant look. Jolly understood my vision perfectly and created a stunning look that matched my outfit. She's truly gifted!",
    rating: 5
  }
];

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col">
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={16} 
            className={i < testimonial.rating ? "text-rosegold fill-rosegold" : "text-gray-300"} 
          />
        ))}
      </div>
      
      <p className="font-montserrat text-base italic mb-6 flex-grow">"{testimonial.content}"</p>
      
      <div className="mt-auto">
        <h4 className="font-playfair text-lg font-semibold">{testimonial.name}</h4>
        <p className="font-montserrat text-sm text-gray-600">{testimonial.location}</p>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="font-montserrat text-base text-gray-600 max-w-2xl mx-auto">
            Don't just take my word for it - here's what my clients have to say about their experience.
          </p>
          <div className="w-20 h-1 bg-rosegold mx-auto mt-6"></div>
        </div>
        
        <div className="relative px-4 md:px-10">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 h-auto">
                  <TestimonialCard testimonial={testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute -top-12 right-0 flex space-x-2">
              <CarouselPrevious className="relative bg-rosegold text-white hover:bg-rosegold/90 hover:text-white" />
              <CarouselNext className="relative bg-rosegold text-white hover:bg-rosegold/90 hover:text-white" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
