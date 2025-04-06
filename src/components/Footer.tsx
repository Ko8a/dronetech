
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube, Linkedin } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-foreground text-white py-16 px-6 md:px-10 lg:px-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="inline-block mb-6">
              <img 
                src="/lovable-uploads/dronetech-logo.png" 
                alt="DroneTech" 
                className="h-10 brightness-0 invert" 
              />
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              {t('heroSubtitle')}
            </p>
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} DroneTech UAV Laboratory. {t('rights')}
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-200 mb-6">{t('quickLinks')}</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary transition-colors">{t('home')}</Link>
              </li>
              <li>
                <Link to="/competitions" className="text-gray-300 hover:text-primary transition-colors">{t('competitions')}</Link>
              </li>
              <li>
                <Link to="/training" className="text-gray-300 hover:text-primary transition-colors">{t('training')}</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary transition-colors">{t('contactUs')}</Link>
              </li>
              <li>
                <a href="#team" className="text-gray-300 hover:text-primary transition-colors">{t('ourTeam')}</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-200 mb-6">{t('training_footer')}</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/training" className="text-gray-300 hover:text-primary transition-colors">{t('freeLessons')}</Link>
              </li>
              <li>
                <Link to="/training" className="text-gray-300 hover:text-primary transition-colors">{t('rtkInstallation')}</Link>
              </li>
              <li>
                <Link to="/training" className="text-gray-300 hover:text-primary transition-colors">{t('opticalFlowSetup')}</Link>
              </li>
              <li>
                <Link to="/training" className="text-gray-300 hover:text-primary transition-colors">{t('payloadDropSystems')}</Link>
              </li>
              <li>
                <Link to="/training" className="text-gray-300 hover:text-primary transition-colors">{t('premiumCourses')}</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-200 mb-6">{t('contactInfo')}</h4>
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
              {t('privacy')}
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              {t('terms')}
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              {t('cookies')}
            </a>
          </div>
          
          <div className="text-gray-400 text-sm">
            {t('designed')}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
