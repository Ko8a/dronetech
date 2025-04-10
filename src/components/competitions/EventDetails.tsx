
import React from 'react';
import AnimatedElement from '../ui/AnimatedElement';
import { Calendar, Users, Award, MapPin } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';

const EventDetails = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedElement animation="animate-fade-in" threshold={0.1}>
            <h2 className="text-3xl font-bold mb-8 text-center">{t('eventDetails')}</h2>
          </AnimatedElement>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <AnimatedElement animation="animate-fade-in" delay={200} threshold={0.1}>
              <div className="bg-secondary/30 rounded-xl p-6 flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{t('dateTime')}</h3>
                  <p className="text-muted-foreground">
                    {t('eventDate')}
                  </p>
                  <p className="text-muted-foreground">{t('eventTime')}</p>
                </div>
              </div>
            </AnimatedElement>
            
            <AnimatedElement animation="animate-fade-in" delay={300} threshold={0.1}>
              <div className="bg-secondary/30 rounded-xl p-6 flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{t('location')}</h3>
                  <p className="text-muted-foreground">{t('eventVenue')}</p>
                  <p className="text-muted-foreground">{t('eventCity')}</p>
                </div>
              </div>
            </AnimatedElement>
            
            <AnimatedElement animation="animate-fade-in" delay={400} threshold={0.1}>
              <div className="bg-secondary/30 rounded-xl p-6 flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{t('participants')}</h3>
                  <p className="text-muted-foreground">{t('openToTeams')}</p>
                  <p className="text-muted-foreground">{t('allSkillLevels')}</p>
                </div>
              </div>
            </AnimatedElement>
            
            <AnimatedElement animation="animate-fade-in" delay={500} threshold={0.1}>
              <div className="bg-secondary/30 rounded-xl p-6 flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{t('prizes')}</h3>
                  <p className="text-muted-foreground">{t('firstPlace')}</p>
                  <p className="text-muted-foreground">{t('secondPlace')}</p>
                  <p className="text-muted-foreground">{t('thirdPlace')}</p>
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
