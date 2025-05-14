
import React from 'react';
import { Button } from '@/components/ui/button';
import { Instagram } from 'lucide-react';

const instagramPosts = [
  {
    id: 1,
    image: "/lovable-uploads/fc085184-3cde-46de-abfe-f2ccb7b45b04.png",
    likes: 126,
    comments: 18
  },
  {
    id: 2,
    image: "/lovable-uploads/e5adf35a-809a-4df6-ab0d-7a52ceb6ab6b.png",
    likes: 145,
    comments: 22
  },
  {
    id: 3,
    image: "/lovable-uploads/cb317823-ce3f-46f3-9759-180d4f42f8ae.png",
    likes: 98,
    comments: 14
  },
  {
    id: 4,
    image: "/lovable-uploads/7326fbc1-6a7b-449a-bf14-0b06550af720.png",
    likes: 112,
    comments: 16
  }
];

const InstagramSection = () => {
  return (
    <section className="py-20 bg-beige/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <Instagram className="mx-auto text-rosegold" size={32} />
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mt-4 mb-4">Follow me on Instagram</h2>
          <p className="font-montserrat text-base text-gray-600 max-w-2xl mx-auto">
            Stay updated with my latest work and behind-the-scenes moments
          </p>
          <p className="font-montserrat text-lg font-semibold text-rosegold mt-2">@jolly_makeupartist</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {instagramPosts.map((post) => (
            <div key={post.id} className="relative group overflow-hidden rounded-lg">
              <img 
                src={post.image} 
                alt="Instagram post" 
                className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                <div className="flex items-center space-x-4 text-white">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span>{post.comments}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button className="bg-transparent border-2 border-rosegold text-rosegold hover:bg-rosegold hover:text-white transition-all duration-300">
            <Instagram className="mr-2" size={18} />
            View Instagram Profile
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
