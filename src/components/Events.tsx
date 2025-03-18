
import React from 'react';
import AnimatedElement from './ui/AnimatedElement';
import { cn } from '@/lib/utils';
import { Calendar, MapPin, Clock } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image?: string;
  registrationLink?: string;
}

const events: Event[] = [
  {
    id: 1,
    title: "DroneTech Summit 2023",
    date: "June 15-17, 2023",
    time: "9:00 AM - 5:00 PM",
    location: "San Francisco, CA",
    description: "Join us for three days of workshops, demonstrations, and networking with drone industry leaders.",
    image: "https://images.unsplash.com/photo-1669272557790-6d5789369f9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    registrationLink: "#"
  },
  {
    id: 2,
    title: "Aerial Photography Workshop",
    date: "July 8, 2023",
    time: "10:00 AM - 2:00 PM",
    location: "Chicago, IL",
    description: "Learn professional techniques for capturing stunning aerial photos and videos with our expert photographers.",
    image: "https://images.unsplash.com/photo-1499155286265-79a9dc9c6380?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    registrationLink: "#"
  },
  {
    id: 3,
    title: "Product Launch: SkyView Pro X2",
    date: "August 25, 2023",
    time: "7:00 PM - 9:00 PM",
    location: "New York, NY",
    description: "Be the first to experience our next-generation professional drone with revolutionary camera technology.",
    image: "https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    registrationLink: "#"
  }
];

const Events = () => {
  return (
    <section id="events" className="section-padding bg-white">
      <div className="container mx-auto">
        <AnimatedElement animation="animate-fade-in" threshold={0.1}>
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-blue-50 text-primary rounded-full text-sm font-medium mb-3">
              Upcoming Events
            </span>
            <h2 className="section-title">Connect With Us</h2>
            <p className="section-subtitle">
              Stay updated with our latest events, workshops, and product launches happening around the world.
            </p>
          </div>
        </AnimatedElement>

        <div className="space-y-8">
          {events.map((event, index) => (
            <AnimatedElement
              key={event.id}
              animation="animate-fade-in"
              delay={200 * index}
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-border transition-all duration-300 hover:shadow-md">
                <div className="flex flex-col md:flex-row">
                  {event.image && (
                    <div className="md:w-1/3">
                      <div className="aspect-video md:aspect-square h-full">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  )}
                  <div className={cn("p-6 flex flex-col", event.image ? "md:w-2/3" : "w-full")}>
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-6 flex-grow">{event.description}</p>
                    {event.registrationLink && (
                      <div className="mt-auto">
                        <a
                          href={event.registrationLink}
                          className="inline-block rounded-lg px-4 py-2 text-sm font-medium bg-primary text-white transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        >
                          Register Now
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
