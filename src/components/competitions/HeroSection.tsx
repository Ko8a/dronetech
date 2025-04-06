
import React from 'react';
import AnimatedElement from '../ui/AnimatedElement';
import CountdownTimer from './CountdownTimer';
import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import RegistrationForm from '../RegistrationForm';

interface HeroSectionProps {
  targetDate: Date;
}

const HeroSection = ({ targetDate }: HeroSectionProps) => {
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
            Premier UAV Competition
          </span>
        </AnimatedElement>
        
        <AnimatedElement animation="animate-fade-in" delay={400}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
            MDC <span className="text-primary">Multi-Drone Championship</span>
          </h1>
        </AnimatedElement>
        
        <AnimatedElement animation="animate-fade-in" delay={600}>
          <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl">
            The ultimate test of UAV piloting skills, technical knowledge, and innovation. Join the elite competition showcasing the future of drone technology.
          </p>
        </AnimatedElement>
        
        {/* Countdown Timer */}
        <AnimatedElement animation="animate-fade-in" delay={800}>
          <CountdownTimer targetDate={targetDate} />
        </AnimatedElement>
        
        <AnimatedElement animation="animate-fade-in" delay={1000}>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="inline-flex items-center rounded-lg bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/90 focus:ring-offset-2">
                Register Now
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">Registration Form</DialogTitle>
              </DialogHeader>
              <RegistrationForm />
            </DialogContent>
          </Dialog>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default HeroSection;
