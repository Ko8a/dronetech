
import React from 'react';
import AnimatedElement from '../ui/AnimatedElement';
import CountdownTimer from './CountdownTimer';
import { useTranslation } from '../../hooks/useTranslation';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  targetDate: Date;
}

const HeroSection = ({ targetDate }: HeroSectionProps) => {
  const { t } = useTranslation();
  
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/0201f963-f922-489a-8cd2-3cfd195fce9b.png" 
          alt="Drone Competition" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div className="container mx-auto px-6 py-12 md:py-24 relative z-10 text-white">
        <AnimatedElement animation="animate-fade-in" delay={200}>
          <span className="inline-block px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-medium mb-4">
            {t('premierUAVCompetition')}
          </span>
        </AnimatedElement>
        
        <AnimatedElement animation="animate-fade-in" delay={400}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
            {t('mdc')} <span className="text-primary">{t('multiDroneChampionship')}</span>
          </h1>
        </AnimatedElement>
        
        <AnimatedElement animation="animate-fade-in" delay={600}>
          <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl">
            {t('competitionDescription')}
          </p>
        </AnimatedElement>
        
        {/* Countdown Timer */}
        <AnimatedElement animation="animate-fade-in" delay={800}>
          <CountdownTimer targetDate={targetDate} />
        </AnimatedElement>
        
        <AnimatedElement animation="animate-fade-in" delay={1000}>
          <div className="text-center">
            <p className="text-red-400 text-lg font-semibold mb-4">
              {t('registrationEnded')}
            </p>
            <Button asChild variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
              <Link to="/registrations">
                {t('listOfParticipants')}
              </Link>
            </Button>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default HeroSection;
