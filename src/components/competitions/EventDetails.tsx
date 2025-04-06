
import React from 'react';
import AnimatedElement from '../ui/AnimatedElement';
import { Calendar, Users, Award, MapPin } from 'lucide-react';

const EventDetails = () => {
  return (
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
  );
};

export default EventDetails;
