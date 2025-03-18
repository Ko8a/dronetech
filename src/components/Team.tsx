
import React from 'react';
import AnimatedElement from './ui/AnimatedElement';

const Team = () => {
  const teamMembers = [
    {
      name: "Alex Petrov",
      title: "Director",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      bio: "With over 15 years of experience in aviation and technology, Alex leads our strategic vision and operations."
    },
    {
      name: "Maria Kim",
      title: "Development Director",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
      bio: "Maria oversees our educational program development, bringing her expertise in curriculum design and drone technology."
    },
    {
      name: "Dmitry Volkov",
      title: "Technical Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      bio: "A master engineer who leads our hardware development and technical training programs."
    }
  ];

  return (
    <section id="team" className="section-padding bg-background">
      <div className="container mx-auto px-6">
        <AnimatedElement animation="animate-fade-in" threshold={0.1}>
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary-foreground rounded-full text-sm font-medium mb-3">
              Meet Our Team
            </span>
            <h2 className="section-title">The Experts Behind DroneTech</h2>
            <p className="section-subtitle">
              Our team of industry professionals brings together expertise in aviation, engineering, education, and technology.
            </p>
          </div>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {teamMembers.map((member, index) => (
            <AnimatedElement
              key={member.name}
              animation="animate-fade-in"
              delay={index * 200}
              threshold={0.1}
            >
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="aspect-[4/5] relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.title}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
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
