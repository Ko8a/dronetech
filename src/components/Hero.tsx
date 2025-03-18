
import React from 'react';
import { cn } from '@/lib/utils';
import AnimatedElement from './ui/AnimatedElement';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 hero-gradient -z-10"></div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-300/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-6 py-12 md:py-24 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
          <AnimatedElement animation="animate-fade-in" delay={200}>
            <span className="inline-block mb-3 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Next-Gen Drone Technology
            </span>
          </AnimatedElement>
          
          <AnimatedElement animation="animate-fade-in" delay={400}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-4 text-balance">
              Elevate Your <span className="text-gradient">Perspective</span>
            </h1>
          </AnimatedElement>
          
          <AnimatedElement animation="animate-fade-in" delay={600}>
            <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-xl mx-auto md:mx-0">
              Cutting-edge drone solutions designed with precision and elegance for professionals and enthusiasts.
            </p>
          </AnimatedElement>
          
          <AnimatedElement animation="animate-fade-in" delay={800}>
            <button
              onClick={scrollToProducts}
              className="inline-flex items-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/90 focus:ring-offset-2"
            >
              Explore Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </AnimatedElement>
        </div>
        
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <AnimatedElement animation="animate-fade-in animate-float" delay={600}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-2xl blur-xl -z-10 transform scale-95 opacity-70"></div>
              <img
                src="https://images.unsplash.com/photo-1487887235947-a955ef187fcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                alt="DroneTech Flagship Drone"
                className="rounded-2xl shadow-lg object-cover w-full max-w-md"
                loading="lazy"
              />
            </div>
          </AnimatedElement>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
          <svg 
            width="15" 
            height="15" 
            viewBox="0 0 15 15" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="text-primary"
          >
            <path d="M7.5 12L0.803848 1.5L14.1962 1.5L7.5 12Z" fill="currentColor" transform="rotate(180 7.5 6.75)"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
