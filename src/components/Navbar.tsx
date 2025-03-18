
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        isScrolled ? 'bg-white/80 shadow-sm backdrop-blur-md' : 'bg-transparent'
      )}
    >
      <div className="flex items-center justify-between">
        <a href="/" className="relative z-10">
          <h1 className="font-display font-bold text-xl">DroneTech</h1>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('products')} className="nav-link">
            Products
          </button>
          <button onClick={() => scrollToSection('team')} className="nav-link">
            Team
          </button>
          <button onClick={() => scrollToSection('events')} className="nav-link">
            Events
          </button>
          <button onClick={() => scrollToSection('contact')} className="nav-link">
            Contact
          </button>
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
            'fixed inset-0 bg-white flex flex-col items-center justify-center transition-transform duration-300 ease-in-out md:hidden',
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <nav className="flex flex-col items-center space-y-8 text-lg">
            <button onClick={() => scrollToSection('products')} className="nav-link">
              Products
            </button>
            <button onClick={() => scrollToSection('team')} className="nav-link">
              Team
            </button>
            <button onClick={() => scrollToSection('events')} className="nav-link">
              Events
            </button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">
              Contact
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
