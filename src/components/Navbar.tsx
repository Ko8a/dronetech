
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      return;
    }
    
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // Header height + some padding
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 px-6 md:px-10 lg:px-20',
        isScrolled ? 'bg-background/90 shadow-sm backdrop-blur-md' : 'bg-transparent'
      )}
    >
      <div className="flex items-center justify-between">
        <Link to="/" className="relative z-10">
          <img 
            src="/lovable-uploads/dronetech-logo.png" 
            alt="DroneTech" 
            className="h-10 md:h-12" 
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className={cn("nav-link", location.pathname === "/" && "text-primary font-medium")}>
            Home
          </Link>
          <Link to="/competitions" className={cn("nav-link", location.pathname === "/competitions" && "text-primary font-medium")}>
            Competitions
          </Link>
          <Link to="/training" className={cn("nav-link", location.pathname === "/training" && "text-primary font-medium")}>
            Training
          </Link>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="nav-link"
          >
            Contacts
          </button>
          <Link 
            to="/contact" 
            className="inline-flex items-center rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/90 focus:ring-offset-2"
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="relative z-10 md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        {/* Mobile Menu */}
        <div
          className={cn(
            'fixed inset-0 bg-background flex flex-col items-center justify-center transition-transform duration-300 ease-in-out md:hidden',
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <nav className="flex flex-col items-center space-y-8 text-lg">
            <Link 
              to="/" 
              className={cn("nav-link", location.pathname === "/" && "text-primary font-medium")}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/competitions" 
              className={cn("nav-link", location.pathname === "/competitions" && "text-primary font-medium")}
              onClick={() => setIsMenuOpen(false)}
            >
              Competitions
            </Link>
            <Link 
              to="/training" 
              className={cn("nav-link", location.pathname === "/training" && "text-primary font-medium")}
              onClick={() => setIsMenuOpen(false)}
            >
              Training
            </Link>
            <button 
              onClick={() => {
                scrollToSection('contact');
                setIsMenuOpen(false);
              }} 
              className="nav-link"
            >
              Contacts
            </button>
            <Link 
              to="/contact" 
              className="inline-flex items-center rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/90 focus:ring-offset-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
