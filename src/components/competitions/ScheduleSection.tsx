
import React from 'react';
import AnimatedElement from '../ui/AnimatedElement';
import { Clock } from 'lucide-react';
import { Button } from '../ui/button';
import { useTranslation } from '../../hooks/useTranslation';

const ScheduleSection: React.FC = () => {
  const { t } = useTranslation();
  
  const handleOpenPdf = () => {
    // This will open the PDF in a new tab
    window.open('/lovable-uploads/competition_schedule.pdf', '_blank');
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedElement animation="animate-fade-in" threshold={0.1}>
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary-foreground rounded-full text-sm font-medium mb-3">
                {t('scheduleSection')}
              </span>
              <h2 className="text-3xl font-bold mb-4">{t('scheduleTitle')}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t('scheduleDescription')}
              </p>
            </div>
          </AnimatedElement>
          
          <AnimatedElement animation="animate-fade-in" delay={200} threshold={0.1}>
            <div className="bg-white shadow-md rounded-xl p-8 flex flex-col md:flex-row items-center justify-between border border-border">
              <div className="mb-6 md:mb-0 flex items-center">
                <div className="bg-primary/10 p-4 rounded-full mr-6">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">{t('scheduleTitle')}</h3>
                  <p className="text-muted-foreground">
                    {t('scheduleDescription')}
                  </p>
                </div>
              </div>
              <Button 
                onClick={handleOpenPdf}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-medium rounded-lg"
              >
                {t('viewSchedule')}
              </Button>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
