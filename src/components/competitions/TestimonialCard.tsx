
import React from 'react';
import AnimatedElement from '../ui/AnimatedElement';

interface TestimonialCardProps {
  name: string;
  role: string;
  comment: string;
  image: string;
  index: number;
}

const TestimonialCard = ({ name, role, comment, image, index }: TestimonialCardProps) => {
  return (
    <AnimatedElement
      animation="animate-fade-in"
      delay={index * 200}
      threshold={0.1}
    >
      <div className="bg-white rounded-xl shadow-sm p-6 relative">
        <div className="absolute -top-5 left-6">
          <div className="rounded-full overflow-hidden border-4 border-white w-16 h-16">
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="pt-8">
          <p className="mb-4 text-muted-foreground">{comment}</p>
          <div className="border-t border-border pt-4">
            <h4 className="font-semibold">{name}</h4>
            <p className="text-sm text-primary">{role}</p>
          </div>
        </div>
      </div>
    </AnimatedElement>
  );
};

export default TestimonialCard;
