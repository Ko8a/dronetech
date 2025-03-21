
import React from 'react';
import AnimatedElement from './ui/AnimatedElement';
import { useTranslation } from '../hooks/useTranslation';
import { useLanguage } from '../contexts/LanguageContext';

const ProblemStatement = () => {
  const { t } = useTranslation();
  const { dir } = useLanguage();
  
  return (
    <section id="problem" className="section-padding bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto" dir={dir}>
          <AnimatedElement animation="animate-fade-in" threshold={0.1}>
            <h2 className="section-title text-center mb-12">{t('problemTitle')}</h2>
          </AnimatedElement>
          
          <AnimatedElement animation="animate-fade-in" delay={200} threshold={0.1}>
            <div className="bg-secondary/50 rounded-2xl p-8 mb-10">
              <p className="text-lg leading-relaxed mb-6">
                {t('problemText1')}
              </p>
              <p className="text-lg leading-relaxed">
                {t('problemText2')}
              </p>
            </div>
          </AnimatedElement>
          
          <AnimatedElement animation="animate-fade-in" delay={400} threshold={0.1}>
            <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-4">{t('initiative')}</h3>
                  <blockquote className="border-l-4 border-primary pl-4 italic text-lg">
                    "{t('quote')}"
                  </blockquote>
                  <p className="text-right mt-4 text-muted-foreground">— {t('president')}</p>
                </div>
                <div className="md:w-2/5 w-full max-w-md">
                  <img 
                    src="/lovable-uploads/3ca062db-8852-42e7-91d9-4c0bbcb73489.png" 
                    alt="President Tokaev" 
                    className="w-full h-auto mix-blend-multiply scale-110"
                    style={{ 
                      borderRadius: '0',
                      boxShadow: 'none',
                      backgroundColor: 'transparent'
                    }}
                  />
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
