
import React from 'react';
import { cn } from '@/lib/utils';
import AnimatedElement from './ui/AnimatedElement';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useTranslation();
  const { dir } = useLanguage();
  
  const scrollToNextSection = () => {
    const element = document.getElementById('problem');
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* YouTube Video Background */}
      <div className="video-background">
        <iframe
          className="absolute w-full h-full top-0 left-0 object-cover"
          src="https://www.youtube.com/embed/SjgOeHd1Unw?autoplay=1&mute=1&loop=1&playlist=SjgOeHd1Unw&controls=0&showinfo=0&rel=0&disablekb=1&iv_load_policy=3&modestbranding=1"
          title="DroneTech UAV Championship"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      
      <div className="container mx-auto px-6 py-12 md:py-24 flex flex-col items-center justify-center text-center relative z-10 text-white" dir={dir}>
        
        <AnimatedElement animation="animate-fade-in" delay={400}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6 text-balance">
            {t('heroTitle').split('Education & Innovation')[0]}
            <span className="text-primary">{t('heroTitle').includes('Education & Innovation') ? 'Education & Innovation' : ''}</span>
          </h1>
        </AnimatedElement>
        
        <AnimatedElement animation="animate-fade-in" delay={600}>
          <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            {t('heroSubtitle')}
          </p>
        </AnimatedElement>
        
        <AnimatedElement animation="animate-fade-in" delay={800}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={scrollToNextSection} className="inline-flex items-center rounded-lg bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/90 focus:ring-offset-2">
              {t('learnMore')}
            </button>
            <Link to="/training" className="inline-flex items-center rounded-lg bg-white/10 backdrop-blur-sm px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2">
              {t('startTraining')}
            </Link>
          </div>
        </AnimatedElement>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <button onClick={scrollToNextSection} className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
          <ArrowDown className="w-5 h-5 text-white" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
