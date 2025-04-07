
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';
import LanguageSelector from './LanguageSelector';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { dir } = useLanguage();
  const { t } = useTranslation();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Effect to handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Effect to prevent background scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      // Save the current scroll position
      const scrollPosition = window.pageYOffset;
      // Apply styles to prevent scrolling
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollPosition}px`;
      document.body.style.width = '100%';
    } else {
      // Restore scrolling when menu is closed
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
      }
    }
    
    return () => {
      // Clean up in case component unmounts while menu is open
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [isMenuOpen]);
  
  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // Header height + some padding
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };
  
  // Check if we're on a subpage (not homepage)
  const isSubpage = location.pathname !== '/';
  const isCompetitions = location.pathname === '/competitions';
  const isTraining = location.pathname === '/training';
  const isContact = location.pathname === '/contact';
  
  // Always use dark text on competitions, training, and contact pages
  const alwaysDarkText = isCompetitions || isTraining || isContact;
  
  // Define text colors based on scroll state and current page
  const textColor = (isScrolled || alwaysDarkText) ? 'text-foreground' : 'text-white';
  const activeTextColor = (isScrolled || alwaysDarkText) ? 'text-primary' : 'text-primary';
  
  return <header className={cn('fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 px-6 md:px-10 lg:px-20', isScrolled ? 'bg-background/90 shadow-sm backdrop-blur-md' : 'bg-transparent')}>
      <div className="flex items-center justify-between" dir={dir}>
        <Link to="/" className="relative z-10">
          <img alt="DroneTech" className="h-10 md:h-12" src="/lovable-uploads/7c4f8a5e-8b00-456c-b69d-29456da6c7c3.png" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className={cn("nav-link", textColor, location.pathname === "/" && activeTextColor)}>
            {t('home')}
          </Link>
          <Link to="/competitions" className={cn("nav-link", textColor, location.pathname === "/competitions" && activeTextColor)}>
            {t('competitions')}
          </Link>
          {/* Training link hidden as requested */}
          {/* <Link to="/training" className={cn("nav-link", textColor, location.pathname === "/training" && activeTextColor)}>
            {t('training')}
          </Link> */}
          <Link to="/contact" className={cn("nav-link", textColor, location.pathname === "/contact" && activeTextColor)}>
            {t('contactUs')}
          </Link>
          <LanguageSelector isScrolled={isScrolled} />
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <LanguageSelector isScrolled={isScrolled} />
          <button className={cn("relative z-50 focus:outline-none", textColor)} onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu with animation */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-background z-40 flex flex-col items-center justify-between md:hidden animate-slide-in-right">
            {/* Logo at the top of the mobile menu */}
            <div className="absolute top-6 left-6">
              <img alt="DroneTech" className="h-10" src="/lovable-uploads/7c4f8a5e-8b00-456c-b69d-29456da6c7c3.png" />
            </div>
            
            {/* Navigation links in the center */}
            <nav className="flex flex-col items-center space-y-8 text-lg mt-20">
              <Link to="/" className={cn("nav-link text-foreground hover:text-primary", location.pathname === "/" && "text-primary font-medium")} onClick={() => setIsMenuOpen(false)}>
                {t('home')}
              </Link>
              <Link to="/competitions" className={cn("nav-link text-foreground hover:text-primary", location.pathname === "/competitions" && "text-primary font-medium")} onClick={() => setIsMenuOpen(false)}>
                {t('competitions')}
              </Link>
              {/* Training link hidden as requested */}
              {/* <Link to="/training" className={cn("nav-link text-foreground hover:text-primary", location.pathname === "/training" && "text-primary font-medium")} onClick={() => setIsMenuOpen(false)}>
                {t('training')}
              </Link> */}
              <Link to="/contact" className={cn("nav-link text-foreground hover:text-primary", location.pathname === "/contact" && "text-primary font-medium")} onClick={() => setIsMenuOpen(false)}>
                {t('contactUs')}
              </Link>
            </nav>
            
            
            
            {/* Close button with better visibility */}
            <button 
              className="absolute top-6 right-6 text-black bg-gray-200 rounded-full p-2 focus:outline-none z-50 hover:bg-gray-300 transition-colors" 
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </header>;
};
export default Navbar;
