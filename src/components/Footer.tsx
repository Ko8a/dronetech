
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  
  const isHomePage = location.pathname === '/';
  
  const handleContactClick = (e: React.MouseEvent) => {
    if (!isHomePage) {
      // If not on homepage, don't prevent default navigation
      return;
    }
    
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const yOffset = -80;
      const y = contactSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <footer className="bg-foreground text-white py-16 px-6 md:px-10 lg:px-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="inline-block mb-6">
              <img 
                src="public/lovable-uploads/Group 349.png" 
                alt="DroneTech" 
                className="h-10" 
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
                <Link 
                  to={isHomePage ? "#contact" : "/#contact"} 
                  className="text-gray-300 hover:text-primary transition-colors"
                  onClick={handleContactClick}
                >
                  {t('contactUs')}
                </Link>
              </li>
              <li>
                <a href="#team" className="text-gray-300 hover:text-primary transition-colors">{t('ourTeam')}</a>
              </li>
            </ul>
          </div>
          
          <div className="lg:col-span-2">
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
                <a href="tel:+77475442244" className="text-gray-300 hover:text-primary transition-colors">
                  +7 747 544 22 44
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-primary mr-3 mt-0.5" />
                <span className="text-gray-300">
                  Microdistrict Tastak-1, 1v<br />
                  Almaty, Kazakhstan
                </span>
              </li>
            </ul>
            
            <div className="mt-6 flex space-x-4">
              <a href="https://www.instagram.com/dronetech.kz" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://t.me/dronetechkz" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors" aria-label="Telegram">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.64 8.8C16.49 10.38 15.84 14.22 15.51 15.99C15.37 16.74 15.09 16.99 14.83 17.02C14.25 17.07 13.81 16.64 13.25 16.27C12.37 15.69 11.87 15.33 11.02 14.77C10.03 14.12 10.67 13.76 11.24 13.18C11.39 13.03 13.95 10.7 14 10.49C14.0069 10.4625 14.0087 10.4335 14.0052 10.4055C14.0017 10.3775 13.993 10.3514 13.98 10.33C13.94 10.29 13.9 10.28 13.86 10.27C13.82 10.26 13.77 10.27 13.73 10.29C13.68 10.31 12.35 11.18 9.73 12.9C9.39 13.13 9.08 13.24 8.81 13.24C8.51 13.24 7.94 13.07 7.51 12.93C6.98 12.76 6.56 12.67 6.59 12.38C6.61 12.23 6.82 12.08 7.23 11.93C10.05 10.7 11.95 9.91 12.93 9.55C15.7 8.51 16.27 8.33 16.64 8.33C16.71 8.33 16.86 8.35 16.95 8.43C17.03 8.49 17.05 8.58 17.06 8.64C17.06 8.71 17.07 8.78 17.07 8.8H16.64Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 flex justify-center">
          <div className="text-gray-400 text-sm">
            {t('designed')}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
