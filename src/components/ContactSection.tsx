
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">Book Your Appointment</h2>
          <p className="font-montserrat text-base text-gray-600 max-w-2xl mx-auto">
            Ready to book your makeup session? Fill out the form below or contact me directly.
          </p>
          <div className="w-20 h-1 bg-rosegold mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <h3 className="font-playfair text-2xl font-semibold mb-6">Request Booking</h3>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="font-montserrat text-sm mb-1 block">Your Name</label>
                  <Input id="name" placeholder="Enter your name" className="border-gray-300" />
                </div>
                <div>
                  <label htmlFor="phone" className="font-montserrat text-sm mb-1 block">Phone Number</label>
                  <Input id="phone" placeholder="Enter your phone number" className="border-gray-300" />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="font-montserrat text-sm mb-1 block">Email Address</label>
                <Input id="email" type="email" placeholder="Enter your email" className="border-gray-300" />
              </div>
              
              <div>
                <label htmlFor="service" className="font-montserrat text-sm mb-1 block">Service Type</label>
                <Select>
                  <SelectTrigger className="border-gray-300">
                    <SelectValue placeholder="Select service type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bridal">Bridal Makeup</SelectItem>
                    <SelectItem value="party">Party & Glam Makeup</SelectItem>
                    <SelectItem value="editorial">Editorial & Fashion Makeup</SelectItem>
                    <SelectItem value="pre-wedding">Pre-Wedding & Engagement</SelectItem>
                    <SelectItem value="airbrush">HD & Airbrush Makeup</SelectItem>
                    <SelectItem value="natural">Natural & Everyday Makeup</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label htmlFor="date" className="font-montserrat text-sm mb-1 block">Preferred Date</label>
                <Input id="date" type="date" className="border-gray-300" />
              </div>
              
              <div>
                <label htmlFor="message" className="font-montserrat text-sm mb-1 block">Message (Optional)</label>
                <Textarea id="message" placeholder="Any special requests or questions?" className="border-gray-300" />
              </div>
              
              <Button className="w-full bg-rosegold hover:bg-rosegold/90 text-white">
                Submit Booking Request
              </Button>
            </form>
          </div>
          
          <div>
            <h3 className="font-playfair text-2xl font-semibold mb-6">Get in Touch</h3>
            
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blush p-3 rounded-full mr-4">
                    <Phone className="text-rosegold" size={20} />
                  </div>
                  <div>
                    <h4 className="font-playfair text-lg font-semibold mb-1">Phone</h4>
                    <p className="font-montserrat text-sm">+91 9876543210</p>
                    <Button variant="link" className="font-montserrat text-sm text-rosegold p-0 h-auto mt-1 hover:no-underline">
                      Call Now
                    </Button>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blush p-3 rounded-full mr-4">
                    <Mail className="text-rosegold" size={20} />
                  </div>
                  <div>
                    <h4 className="font-playfair text-lg font-semibold mb-1">Email</h4>
                    <p className="font-montserrat text-sm">hello@jollymakeupartist.com</p>
                    <Button variant="link" className="font-montserrat text-sm text-rosegold p-0 h-auto mt-1 hover:no-underline">
                      Send Email
                    </Button>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blush p-3 rounded-full mr-4">
                    <MapPin className="text-rosegold" size={20} />
                  </div>
                  <div>
                    <h4 className="font-playfair text-lg font-semibold mb-1">Location</h4>
                    <p className="font-montserrat text-sm">GS Road, Guwahati, Assam, India</p>
                    <Button variant="link" className="font-montserrat text-sm text-rosegold p-0 h-auto mt-1 hover:no-underline">
                      Get Directions
                    </Button>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blush p-3 rounded-full mr-4">
                    <Instagram className="text-rosegold" size={20} />
                  </div>
                  <div>
                    <h4 className="font-playfair text-lg font-semibold mb-1">Instagram</h4>
                    <p className="font-montserrat text-sm">@jolly_makeupartist</p>
                    <Button variant="link" className="font-montserrat text-sm text-rosegold p-0 h-auto mt-1 hover:no-underline">
                      Follow Me
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-md">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114487.9252216946!2d91.69794436819142!3d26.144390773390815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5a287f9133ff%3A0x2bbd1332436bde32!2sGuwahati%2C%20Assam!5e0!3m2!1sen!2sin!4v1715712118912!5m2!1sen!2sin" 
                className="w-full h-64 border-0" 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
