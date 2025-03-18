import React from 'react';
import { cn } from '@/lib/utils';
import AnimatedElement from './ui/AnimatedElement';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
const Hero = () => {
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
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Video Background */}
      <div className="video-background">
        <video autoPlay muted loop playsInline>
          <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      <div className="container mx-auto px-6 py-12 md:py-24 flex flex-col items-center justify-center text-center relative z-10 text-white">
        <AnimatedElement animation="animate-fade-in" delay={200}>
          <img alt="DroneTech" className="max-w-xs md:max-w-sm mx-auto mb-8" src="/lovable-uploads/135de607-2580-4aed-9387-b809e03e5737.png" />
        </AnimatedElement>
        
        <AnimatedElement animation="animate-fade-in" delay={400}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6 text-balance">
            Elevating UAV <span className="text-primary">Education & Innovation</span>
          </h1>
        </AnimatedElement>
        
        <AnimatedElement animation="animate-fade-in" delay={600}>
          <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Training the next generation of UAV operators through cutting-edge educational programs and competitive events.
          </p>
        </AnimatedElement>
        
        <AnimatedElement animation="animate-fade-in" delay={800}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={scrollToNextSection} className="inline-flex items-center rounded-lg bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/90 focus:ring-offset-2">
              Learn More
            </button>
            <Link to="/training" className="inline-flex items-center rounded-lg bg-white/10 backdrop-blur-sm px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2">
              Start Training
            </Link>
          </div>
        </AnimatedElement>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <button onClick={scrollToNextSection} className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
          <ArrowDown className="w-5 h-5 text-white" />
        </button>
      </div>
    </section>;
};
export default Hero;