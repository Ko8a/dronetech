import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedElement from '../components/ui/AnimatedElement';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Download, Calendar, Users, Award, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import RegistrationForm from '../components/RegistrationForm';

const Competitions = () => {
  // State for countdown timer
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Set target date for countdown (April 14, 2025)
  const targetDate = new Date(2025, 3, 14); // Month is 0-indexed, so 3 = April

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference <= 0) {
        clearInterval(timer);
        return;
      }
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  // Set competition date (June 1, 2025)
  const competitionDate = new Date(2025, 5, 1); // Month is 0-indexed, so 5 = June

  const testimonials = [
    {
      name: "Askar Muratov",
      role: "MDC 2023 Champion",
      comment: "DroneTech's MDC competition challenged me to push my piloting skills to new heights. The organization was professional, and the course design was incredibly innovative.",
      image: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      name: "Laura Chen",
      role: "Technical University Team Lead",
      comment: "Participating in MDC was an incredible learning experience for our entire team. The technical challenges and competitive atmosphere prepared us for real-world UAV operations.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    },
    {
      name: "Marat Bakirov",
      role: "Industry Judge",
      comment: "The level of talent at MDC was impressive. DroneTech has created an event that truly showcases the future of UAV technology and operations.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
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
              <div className="mb-10">
                <p className="text-white/80 mb-4">Registration for next competition starts in:</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 w-24 text-center">
                    <span className="block text-3xl font-bold">{timeLeft.days}</span>
                    <span className="text-white/60 text-sm">Days</span>
                  </div>
                  <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 w-24 text-center">
                    <span className="block text-3xl font-bold">{timeLeft.hours}</span>
                    <span className="text-white/60 text-sm">Hours</span>
                  </div>
                  <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 w-24 text-center">
                    <span className="block text-3xl font-bold">{timeLeft.minutes}</span>
                    <span className="text-white/60 text-sm">Minutes</span>
                  </div>
                  <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 w-24 text-center">
                    <span className="block text-3xl font-bold">{timeLeft.seconds}</span>
                    <span className="text-white/60 text-sm">Seconds</span>
                  </div>
                </div>
              </div>
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
        
        {/* Competition Details */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <AnimatedElement animation="animate-fade-in" threshold={0.1}>
                <h2 className="text-3xl font-bold mb-8 text-center">Event Details</h2>
              </AnimatedElement>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <AnimatedElement animation="animate-fade-in" delay={200} threshold={0.1}>
                  <div className="bg-secondary/30 rounded-xl p-6 flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Calendar className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Date & Time</h3>
                      <p className="text-muted-foreground">
                        June 1, 2025
                      </p>
                      <p className="text-muted-foreground">9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </AnimatedElement>
                
                <AnimatedElement animation="animate-fade-in" delay={300} threshold={0.1}>
                  <div className="bg-secondary/30 rounded-xl p-6 flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Location</h3>
                      <p className="text-muted-foreground">AITU</p>
                      <p className="text-muted-foreground">Astana, Kazakhstan</p>
                    </div>
                  </div>
                </AnimatedElement>
                
                <AnimatedElement animation="animate-fade-in" delay={400} threshold={0.1}>
                  <div className="bg-secondary/30 rounded-xl p-6 flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Participants</h3>
                      <p className="text-muted-foreground">Open to individuals and teams</p>
                      <p className="text-muted-foreground">All skill levels welcome</p>
                    </div>
                  </div>
                </AnimatedElement>
                
                <AnimatedElement animation="animate-fade-in" delay={500} threshold={0.1}>
                  <div className="bg-secondary/30 rounded-xl p-6 flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Prizes</h3>
                      <p className="text-muted-foreground">1st Place: $5,000</p>
                      <p className="text-muted-foreground">2nd Place: $2,500</p>
                      <p className="text-muted-foreground">3rd Place: $1,000</p>
                    </div>
                  </div>
                </AnimatedElement>
              </div>
            </div>
          </div>
        </section>
        
        {/* Photo Gallery */}
        <section className="py-16 bg-secondary/50">
          <div className="container mx-auto px-6">
            <AnimatedElement animation="animate-fade-in" threshold={0.1}>
              <div className="text-center mb-12">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary-foreground rounded-full text-sm font-medium mb-3">
                  Competition Gallery
                </span>
                <h2 className="text-3xl font-bold mb-4">Moments from Past Events</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Relive the excitement and innovation from our previous MDC competitions.
                </p>
              </div>
            </AnimatedElement>
            
            <AnimatedElement animation="animate-fade-in" delay={200} threshold={0.1}>
              <div className="max-w-5xl mx-auto">
                <Carousel className="w-full">
                  <CarouselContent>
                    <CarouselItem>
                      <div className="p-1">
                        <div className="overflow-hidden rounded-xl">
                          <img 
                            src="https://images.unsplash.com/photo-1579829366248-204fe8413f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                            alt="Competition Scene" 
                            className="w-full aspect-[16/9] object-cover"
                          />
                        </div>
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="p-1">
                        <div className="overflow-hidden rounded-xl">
                          <img 
                            src="https://images.unsplash.com/photo-1508444845599-5c89863b1c44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                            alt="Drone in Flight" 
                            className="w-full aspect-[16/9] object-cover"
                          />
                        </div>
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="p-1">
                        <div className="overflow-hidden rounded-xl">
                          <img 
                            src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                            alt="Award Ceremony" 
                            className="w-full aspect-[16/9] object-cover"
                          />
                        </div>
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>
              </div>
            </AnimatedElement>
          </div>
        </section>
        
        {/* Competition Regulations */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <AnimatedElement animation="animate-fade-in" threshold={0.1}>
                <div className="text-center mb-12">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary-foreground rounded-full text-sm font-medium mb-3">
                    Regulations & Guidelines
                  </span>
                  <h2 className="text-3xl font-bold mb-4">Competition Rules</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Download the complete rulebook and review key participation requirements.
                  </p>
                </div>
              </AnimatedElement>
              
              <AnimatedElement animation="animate-fade-in" delay={200} threshold={0.1}>
                <div className="bg-secondary/30 rounded-xl p-8 mb-8 flex flex-col md:flex-row items-center justify-between">
                  <div className="mb-6 md:mb-0">
                    <h3 className="font-bold text-xl mb-2">KAT & MDC 2025 Rulebook</h3>
                    <p className="text-muted-foreground mb-4">Complete regulations, scoring criteria, and equipment specifications.</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>PDF format, 2.4 MB</li>
                      <li>Last updated: April 2025</li>
                    </ul>
                  </div>
                  <a 
                    href="https://docs.google.com/document/d/1zeaUbhghQi6XcOZwImKqgsPRsAFWutuD/edit?usp=sharing&ouid=100434000340394186692&rtpof=true&sd=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/90 focus:ring-offset-2"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Rulebook
                  </a>
                </div>
              </AnimatedElement>
              
              <AnimatedElement animation="animate-fade-in" delay={300} threshold={0.1}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white shadow-sm rounded-xl border border-border p-6">
                    <h3 className="font-bold text-lg mb-4">Key Participation Rules</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <span>Competitors must be 18+ or have parental consent</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <span>Registration must be completed 14 days before the event</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <span>Teams may consist of up to 3 members</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <span>All pilots must hold basic UAV certifications</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white shadow-sm rounded-xl border border-border p-6">
                    <h3 className="font-bold text-lg mb-4">Equipment Requirements</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <span>Drones must weigh less than 2kg and meet safety standards</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <span>Battery specifications must comply with safety guidelines</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <span>Each team must bring backup equipment</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <span>Technical inspections will be conducted before competing</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-16 bg-secondary/50">
          <div className="container mx-auto px-6">
            <AnimatedElement animation="animate-fade-in" threshold={0.1}>
              <div className="text-center mb-12">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary-foreground rounded-full text-sm font-medium mb-3">
                  Testimonials
                </span>
                <h2 className="text-3xl font-bold mb-4">What Participants Say</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Hear from past competitors about their MDC experience.
                </p>
              </div>
            </AnimatedElement>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <AnimatedElement
                  key={testimonial.name}
                  animation="animate-fade-in"
                  delay={index * 200}
                  threshold={0.1}
                >
                  <div className="bg-white rounded-xl shadow-sm p-6 relative">
                    <div className="absolute -top-5 left-6">
                      <div className="rounded-full overflow-hidden border-4 border-white w-16 h-16">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="pt-8">
                      <p className="mb-4 text-muted-foreground">{testimonial.comment}</p>
                      <div className="border-t border-border pt-4">
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-primary">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedElement>
              ))}
            </div>
            
            <div className="max-w-5xl mx-auto mt-12 bg-white rounded-xl shadow-sm p-8">
              <AnimatedElement animation="animate-fade-in" delay={600} threshold={0.1}>
                <h3 className="text-xl font-bold mb-6">Share Your Experience</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="role" className="block text-sm font-medium text-muted-foreground mb-1">
                        Role / Position
                      </label>
                      <input
                        type="text"
                        id="role"
                        className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Participant, judge, etc."
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="feedback" className="block text-sm font-medium text-muted-foreground mb-1">
                      Your Feedback
                    </label>
                    <textarea
                      id="feedback"
                      rows={4}
                      className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Share your experience..."
                    ></textarea>
                  </div>
                  
                  <div>
                    <label htmlFor="photo" className="block text-sm font-medium text-muted-foreground mb-1">
                      Upload Photo (Optional)
                    </label>
                    <input
                      type="file"
                      id="photo"
                      className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="inline-flex items-center rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/90 focus:ring-offset-2"
                  >
                    Submit Feedback
                  </button>
                </form>
              </AnimatedElement>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Competitions;
