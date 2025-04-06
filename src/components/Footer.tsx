import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-foreground text-white py-16 px-6 md:px-10 lg:px-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="inline-block mb-6">
              <img 
                src="/lovable-uploads/93547d72-c79f-4b73-8f07-61124bf740d5.png" 
                alt="DroneTech" 
                className="h-10" 
              />
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              Training the next generation of UAV operators through cutting-edge educational programs and competitive events.
            </p>
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} DroneTech UAV Laboratory. All rights reserved.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-200 mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/competitions" className="text-gray-300 hover:text-primary transition-colors">Competitions</Link>
              </li>
              <li>
                <Link to="/training" className="text-gray-300 hover:text-primary transition-colors">Training</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary transition-colors">Contact Us</Link>
              </li>
              <li>
                <a href="#team" className="text-gray-300 hover:text-primary transition-colors">Our Team</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-200 mb-6">Training</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/training" className="text-gray-300 hover:text-primary transition-colors">Free Lessons</Link>
              </li>
              <li>
                <Link to="/training" className="text-gray-300 hover:text-primary transition-colors">RTK Installation</Link>
              </li>
              <li>
                <Link to="/training" className="text-gray-300 hover:text-primary transition-colors">OpticalFlow Setup</Link>
              </li>
              <li>
                <Link to="/training" className="text-gray-300 hover:text-primary transition-colors">Payload Drop Systems</Link>
              </li>
              <li>
                <Link to="/training" className="text-gray-300 hover:text-primary transition-colors">Premium Courses</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-200 mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-primary mr-3 mt-0.5" />
                <a href="mailto:info@dronetech.kz" className="text-gray-300 hover:text-primary transition-colors">
                  info@dronetech.kz
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-primary mr-3 mt-0.5" />
                <a href="tel:+77071234567" className="text-gray-300 hover:text-primary transition-colors">
                  +7 707 123 4567
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-primary mr-3 mt-0.5" />
                <span className="text-gray-300">
                  Astana, Kazakhstan<br />
                  Digital Hub Technology Park
                </span>
              </li>
            </ul>
            
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
          
          <div className="text-gray-400 text-sm">
            Designed and developed by DroneTech
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
