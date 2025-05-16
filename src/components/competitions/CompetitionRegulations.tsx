
import React from 'react';
import AnimatedElement from '../ui/AnimatedElement';
import { Download } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';

const CompetitionRegulations = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedElement animation="animate-fade-in" threshold={0.1}>
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary-foreground rounded-full text-sm font-medium mb-3">
                {t('regulations')}
              </span>
              <h2 className="text-3xl font-bold mb-4">{t('competitionRules')}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t('rulesDescription')}
              </p>
            </div>
          </AnimatedElement>
          
          <AnimatedElement animation="animate-fade-in" delay={200} threshold={0.1}>
            <div className="bg-secondary/30 rounded-xl p-8 mb-8 flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h3 className="font-bold text-xl mb-2">{t('rulebook')}</h3>
                <p className="text-muted-foreground mb-4">{t('rulebookDescription')}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>{t('pdfFormat')}</li>
                  <li>{t('lastUpdated')}</li>
                </ul>
              </div>
              <a 
                href="https://docs.google.com/document/d/14XRCErYMmmzP_yuTmhgXWNLTmFqmLdB5/edit?usp=sharing&ouid=100434000340394186692&rtpof=true&sd=true"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/90 focus:ring-offset-2"
              >
                <Download className="mr-2 h-4 w-4" />
                {t('downloadRulebook')}
              </a>
            </div>
          </AnimatedElement>
          
          <AnimatedElement animation="animate-fade-in" delay={300} threshold={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white shadow-sm rounded-xl border border-border p-6">
                <h3 className="font-bold text-lg mb-4">{t('keyRules')}</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>{t('rule1')}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>{t('rule2')}</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white shadow-sm rounded-xl border border-border p-6">
                <h3 className="font-bold text-lg mb-4">{t('equipmentRequirements')}</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>{t('equipment1')}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>{t('equipment2')}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>{t('equipment3')}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>{t('equipment4')}</span>
                  </li>
                </ul>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default CompetitionRegulations;
