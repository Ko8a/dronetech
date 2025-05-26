
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';
import { useTranslation } from '../hooks/useTranslation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/') {
      // If already on home page, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Navigate to home page
      navigate('/');
    }
    setIsOpen(false);
  };

  const handleCompetitionsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/competitions') {
      // If already on competitions page, scroll to top immediately
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Navigate to competitions page
      navigate('/competitions');
    }
    setIsOpen(false);
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/') {
      // If on home page, scroll to contact section
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on other page, navigate to home and then scroll to contact
      navigate('/', { replace: true });
      setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    setIsOpen(false);
  };

  // Determine if we're on the home page
  const isHomePage = location.pathname === '/';

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled || !isHomePage ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" onClick={handleHomeClick} className="flex items-center space-x-2">
            <img 
              src={isScrolled || !isHomePage ? "/lovable-uploads/LogoBlack.png" : "/lovable-uploads/logowhite.png"}
              alt="DroneTech" 
              className="h-5 w-auto object-contain"
              onError={(e) => {
                console.error('Logo failed to load:', e.currentTarget.src);
                // Fallback to black logo if white logo fails
                if (e.currentTarget.src.includes('logowhite.png')) {
                  e.currentTarget.src = "/lovable-uploads/LogoBlack.png";
                }
              }}
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              onClick={handleHomeClick}
              className={`font-medium transition-colors hover:text-primary ${
                location.pathname === '/'
                  ? 'text-primary'
                  : (isScrolled || !isHomePage)
                  ? 'text-gray-900'
                  : 'text-white'
              }`}
            >
              {t('home')}
            </a>
            <a
              href="/competitions"
              onClick={handleCompetitionsClick}
              className={`font-medium transition-colors hover:text-primary ${
                location.pathname === '/competitions'
                  ? 'text-primary'
                  : (isScrolled || !isHomePage)
                  ? 'text-gray-900'
                  : 'text-white'
              }`}
            >
              {t('competitions')}
            </a>
            <a
              href="#contact"
              onClick={handleContactClick}
              className={`font-medium transition-colors hover:text-primary ${
                (isScrolled || !isHomePage)
                  ? 'text-gray-900'
                  : 'text-white'
              }`}
            >
              {t('contacts')}
            </a>
            <LanguageSelector isScrolled={isScrolled || !isHomePage} />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <LanguageSelector isScrolled={isScrolled || !isHomePage} />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className={(isScrolled || !isHomePage) ? 'text-gray-900' : 'text-white'}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg shadow-lg mt-2">
              <a
                href="/"
                onClick={handleHomeClick}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors hover:text-primary hover:bg-gray-50 ${
                  location.pathname === '/'
                    ? 'text-primary bg-gray-50'
                    : 'text-gray-900'
                }`}
              >
                {t('home')}
              </a>
              <a
                href="/competitions"
                onClick={handleCompetitionsClick}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors hover:text-primary hover:bg-gray-50 ${
                  location.pathname === '/competitions'
                    ? 'text-primary bg-gray-50'
                    : 'text-gray-900'
                }`}
              >
                {t('competitions')}
              </a>
              <a
                href="#contact"
                onClick={handleContactClick}
                className="block px-3 py-2 rounded-md text-base font-medium transition-colors hover:text-primary hover:bg-gray-50 text-gray-900"
              >
                {t('contacts')}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
