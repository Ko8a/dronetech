
import React from 'react';
import AnimatedElement from '../ui/AnimatedElement';
import TestimonialCard from './TestimonialCard';
import { useTranslation } from '../../hooks/useTranslation';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { User } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  comment: string;
  image: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

const TestimonialsSection = ({ testimonials }: TestimonialsSectionProps) => {
  const { t } = useTranslation();
  
  return (
    <section className="py-16 bg-secondary/50">
      <div className="container mx-auto px-6">
        <AnimatedElement animation="animate-fade-in" threshold={0.1}>
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary-foreground rounded-full text-sm font-medium mb-3">
              {t('testimonials')}
            </span>
            <h2 className="text-3xl font-bold mb-4">{t('whatParticipantsSay')}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('testimonialsDescription')}
            </p>
          </div>
        </AnimatedElement>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              name={testimonial.name}
              role={testimonial.role}
              comment={testimonial.comment}
              image={testimonial.image}
              index={index}
            />
          ))}
        </div>
        
        <div className="max-w-5xl mx-auto mt-12 bg-white rounded-xl shadow-sm p-8">
          <AnimatedElement animation="animate-fade-in" delay={600} threshold={0.1}>
            <h3 className="text-xl font-bold mb-6">{t('shareYourExperience')}</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">
                    {t('fullName')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder={t('yourName')}
                  />
                </div>
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-muted-foreground mb-1">
                    {t('rolePosition')}
                  </label>
                  <input
                    type="text"
                    id="role"
                    className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder={t('participantRole')}
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="feedback" className="block text-sm font-medium text-muted-foreground mb-1">
                  {t('yourFeedback')}
                </label>
                <textarea
                  id="feedback"
                  rows={4}
                  className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder={t('shareExperience')}
                ></textarea>
              </div>
              
              <div>
                <label htmlFor="photo" className="block text-sm font-medium text-muted-foreground mb-1">
                  {t('uploadPhoto')}
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
                {t('submitFeedback')}
              </button>
            </form>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
