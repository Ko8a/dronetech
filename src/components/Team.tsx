
import React from 'react';
import AnimatedElement from './ui/AnimatedElement';
import { useTranslation } from '../hooks/useTranslation';

const Team = () => {
  const { t } = useTranslation();
  
  const teamMembers = [
    {
      nameKey: "team_petrov_name",
      titleKey: "team_petrov_title",
      image: "/lovable-uploads/team-photos/itece_pfoto_RD_-206.jpg",
      bioKey: "team_petrov_bio"
    },
    {
      nameKey: "team_kim_name",
      titleKey: "team_kim_title",
      image: "/lovable-uploads/team-photos/photo_2025-04-07_16-50-37.jpg",
      bioKey: "team_kim_bio"
    },
    {
      nameKey: "team_volkov_name",
      titleKey: "team_volkov_title",
      image: "/lovable-uploads/team-photos/photo_2025-04-07_16-50-54.jpg",
      bioKey: "team_volkov_bio"
    }
  ];

  return (
    <section id="team" className="section-padding bg-background">
      <div className="container mx-auto px-6">
        <AnimatedElement animation="animate-fade-in" threshold={0.1}>
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary-foreground rounded-full text-sm font-medium mb-3">
              {t('meetTeam')}
            </span>
            <h2 className="section-title">{t('teamTitle')}</h2>
            <p className="section-subtitle">
              {t('teamSubtitle')}
            </p>
          </div>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {teamMembers.map((member, index) => (
            <AnimatedElement
              key={member.nameKey}
              animation="animate-fade-in"
              delay={index * 200}
              threshold={0.1}
            >
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="aspect-[4/5] relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={t(member.nameKey)}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{t(member.nameKey)}</h3>
                  <p className="text-primary font-medium mb-3">{t(member.titleKey)}</p>
                  <p className="text-muted-foreground">{t(member.bioKey)}</p>
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
