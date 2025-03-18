
import React from 'react';
import AnimatedElement from './ui/AnimatedElement';
import { cn } from '@/lib/utils';
import { Linkedin, Twitter, Mail } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Alex Morgan",
    role: "Chief Executive Officer",
    bio: "Former aerospace engineer with 15+ years of experience in drone technology and innovation.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&w=500",
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "alex@dronetech.com"
    }
  },
  {
    id: 2,
    name: "Jamie Chen",
    role: "Head of Engineering",
    bio: "Robotics specialist with a passion for creating intuitive and reliable flight systems.",
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&w=500",
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "jamie@dronetech.com"
    }
  },
  {
    id: 3,
    name: "Taylor Wilson",
    role: "Design Director",
    bio: "Award-winning industrial designer focused on creating aesthetically pleasing and functional drones.",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&w=500",
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "taylor@dronetech.com"
    }
  },
  {
    id: 4,
    name: "Jordan Rivera",
    role: "Customer Experience Lead",
    bio: "Dedicated to ensuring every customer achieves success with their DroneTech products.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&w=500",
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "jordan@dronetech.com"
    }
  }
];

const Team = () => {
  return (
    <section id="team" className="section-padding bg-secondary/50">
      <div className="container mx-auto">
        <AnimatedElement animation="animate-fade-in" threshold={0.1}>
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-blue-50 text-primary rounded-full text-sm font-medium mb-3">
              Our Team
            </span>
            <h2 className="section-title">The Minds Behind DroneTech</h2>
            <p className="section-subtitle">
              Meet our talented team of innovators, engineers, and designers dedicated to 
              pushing the boundaries of drone technology.
            </p>
          </div>
        </AnimatedElement>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <AnimatedElement
              key={member.id}
              animation="animate-fade-in"
              delay={150 * index}
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-sm transition-all duration-500 hover:shadow-md">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold">{member.name}</h3>
                  <p className="text-primary text-sm mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                  <div className="flex space-x-3">
                    {member.socials.linkedin && (
                      <a href={member.socials.linkedin} aria-label={`${member.name}'s LinkedIn`} className="text-gray-400 hover:text-primary transition-colors">
                        <Linkedin className="h-5 w-5" />
                      </a>
                    )}
                    {member.socials.twitter && (
                      <a href={member.socials.twitter} aria-label={`${member.name}'s Twitter`} className="text-gray-400 hover:text-primary transition-colors">
                        <Twitter className="h-5 w-5" />
                      </a>
                    )}
                    {member.socials.email && (
                      <a href={`mailto:${member.socials.email}`} aria-label={`Email ${member.name}`} className="text-gray-400 hover:text-primary transition-colors">
                        <Mail className="h-5 w-5" />
                      </a>
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

export default Team;
