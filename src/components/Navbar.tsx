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
  const [isClosing, setIsClosing] = useState(false);
  const location = useLocation();
  const { dir } = useLanguage();
  const { t } = useTranslation();
  
  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsMenuOpen(false);
        setIsClosing(false);
      }, 300);
    } else {
      setIsMenuOpen(true);
    }
  };
  
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
  
  useEffect(() => {
    if (isMenuOpen) {
      const scrollPosition = window.scrollY;
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollPosition}px`;
      document.body.style.width = '100%';
    } else {
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
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  const handleContactClick = (e: React.MouseEvent) => {
    if (location.pathname !== '/') {
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
      setIsMenuOpen(false);
    }
  };
  
  const isSubpage = location.pathname !== '/';
  const isCompetitions = location.pathname === '/competitions';
  const isTraining = location.pathname === '/training';
  
  const alwaysDarkText = isCompetitions || isTraining;
  
  const textColor = (isScrolled || alwaysDarkText) ? 'text-foreground' : 'text-white';
  const activeTextColor = (isScrolled || alwaysDarkText) ? 'text-primary' : 'text-primary';
  
  const showDarkLogo = isScrolled || isCompetitions || isTraining;
  
  return (
    <header className={cn('fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 px-6 md:px-10 lg:px-20', isScrolled ? 'bg-background/90 shadow-sm backdrop-blur-md' : 'bg-transparent')}>
      <div className="flex items-center justify-between" dir={dir}>
        <Link to="/" className="relative z-10">
          <div className="flex items-center">
            {showDarkLogo ? (
              <img 
                alt="DroneTech" 
                className="w-24 md:w-40 h-8 md:h-12 object-contain" 
                src="/lovable-uploads/7c4f8a5e-8b00-456c-b69d-29456da6c7c3.png" 
              />
            ) : (
              <img 
                alt="DroneTech" 
                className="w-24 md:w-40 h-8 md:h-12 object-contain" 
                src="/lovable-uploads/Group 349.png" 
              />
            )}
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className={cn("nav-link", textColor, location.pathname === "/" && activeTextColor)}>
            {t('home')}
          </Link>
          <Link to="/competitions" className={cn("nav-link", textColor, location.pathname === "/competitions" && activeTextColor)}>
            {t('competitions')}
          </Link>
          <Link 
            to={isSubpage ? "/#contact" : "#contact"} 
            className={cn("nav-link", textColor)} 
            onClick={handleContactClick}
          >
            {t('contactUs')}
          </Link>
          <LanguageSelector isScrolled={isScrolled} />
        </nav>

        <div className="flex items-center space-x-4 md:hidden">
          <LanguageSelector isScrolled={isScrolled} />
          <button className={cn("relative z-50 focus:outline-none", textColor)} onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className={cn(
            "fixed inset-0 top-0 left-0 right-0 bg-background z-40 flex flex-col items-center justify-center md:hidden",
            isClosing ? "animate-slide-out-top" : "animate-slide-in-top"
          )}>
            <nav className="flex flex-col items-center space-y-8 text-lg">
              <Link to="/" className={cn("nav-link text-foreground hover:text-primary", location.pathname === "/" && "text-primary font-medium")} onClick={toggleMenu}>
                {t('home')}
              </Link>
              <Link to="/competitions" className={cn("nav-link text-foreground hover:text-primary", location.pathname === "/competitions" && "text-primary font-medium")} onClick={toggleMenu}>
                {t('competitions')}
              </Link>
              <Link 
                to={isSubpage ? "/#contact" : "#contact"} 
                className="nav-link text-foreground hover:text-primary" 
                onClick={(e) => {
                  toggleMenu();
                  if (!isSubpage) {
                    handleContactClick(e);
                  }
                }}
              >
                {t('contactUs')}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
