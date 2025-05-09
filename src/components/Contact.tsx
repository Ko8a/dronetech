
import React, { useState, useEffect, useRef } from 'react';
import AnimatedElement from './ui/AnimatedElement';
import { cn } from '@/lib/utils';
import { Mail, Phone, MapPin, Send, Instagram } from 'lucide-react';
import TelegramIcon from './icons/TelegramIcon';
import { toast } from 'sonner';
import { useTranslation } from '../hooks/useTranslation';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const mapContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapContainer.current) return;
    
    const loadMap = async () => {
      try {
        const mapDiv = mapContainer.current;
        const mapIframe = document.createElement('iframe');
        // Correctly updated map location to Microdistrict Tastak-1, 1v, Almaty
        mapIframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.3917452959547!2d76.83671907670183!3d43.249380671519584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836eb301e67a89%3A0x1b8d9c83d7c96154!2z0JzQutGALiDQotCw0YHRgtCw0LosINCQ0LvQvNCw0YLRiw!5e0!3m2!1sen!2skz!4v1712736475656!5m2!1sen!2skz';
        mapIframe.style.border = '0';
        mapIframe.setAttribute('allowfullscreen', '');
        mapIframe.setAttribute('loading', 'lazy');
        mapIframe.style.width = '100%';
        mapIframe.style.height = '100%';
        mapIframe.style.borderRadius = '0.75rem';

        if (mapDiv.childElementCount === 0) {
          mapDiv.appendChild(mapIframe);
        }
      } catch (error) {
        console.error('Error loading map:', error);
      }
    };

    loadMap();
  }, [mapContainer]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      console.log('Form submitted:', formData);
      toast.success('Message sent successfully! We\'ll get back to you soon.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-secondary/50">
      <div className="container mx-auto">
        <AnimatedElement animation="animate-fade-in" threshold={0.1}>
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-blue-50 text-primary rounded-full text-sm font-medium mb-3">
              {t('getInTouch')}
            </span>
            <h2 className="section-title">{t('contactUs')}</h2>
            <p className="section-subtitle">
              {t('heroSubtitle')}
            </p>
          </div>
        </AnimatedElement>

        <div className="absolute inset-0 z-0 opacity-5 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <svg viewBox="0 0 100 100" className="absolute h-full w-full">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/10"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-primary/10"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 relative z-10">
          <AnimatedElement
            animation="animate-fade-in-left"
            className="lg:col-span-2 bg-white rounded-xl overflow-hidden shadow-sm p-6 lg:p-8"
          >
            <h3 className="text-xl font-bold mb-6">{t('contactInfo')}</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="mr-4 bg-primary/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-1">{t('email')}</h4>
                  <a href="mailto:info@dronetech.com" className="text-lg font-medium link-hover">
                    info@dronetech.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-primary/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-1">{t('phone')}</h4>
                  <a href="tel:+77475442244" className="text-lg font-medium link-hover">
                    +7 747 544 22 44
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-primary/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-1">{t('headquarters')}</h4>
                  <p className="text-lg font-medium">
                    Microdistrict Tastak-1, 1v<br />
                    Almaty, Kazakhstan
                  </p>
                </div>
              </div>
            </div>
            
            <div className="pt-6 border-t border-border">
              <h4 className="text-sm font-medium mb-4">{t('followUs')}</h4>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/dronetech.kz" target="_blank" rel="noopener noreferrer" className="bg-secondary p-2 rounded-full transition-colors hover:bg-primary/10" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="https://t.me/dronetechkz" target="_blank" rel="noopener noreferrer" className="bg-secondary p-2 rounded-full transition-colors hover:bg-primary/10" aria-label="Telegram">
                  <TelegramIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
          </AnimatedElement>
          
          <AnimatedElement
            animation="animate-fade-in-right"
            className="lg:col-span-3 bg-white rounded-xl overflow-hidden shadow-sm p-6 lg:p-8"
          >
            <h3 className="text-xl font-bold mb-6">{t('sendMessage')}</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-muted-foreground">
                    {t('fullName')}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder={t('yourName')}
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-muted-foreground">
                    {t('yourEmail')}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder={t('emailPlaceholder')}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium text-muted-foreground">
                  {t('subject')}
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder={t('subjectPlaceholder')}
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground">
                  {t('message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder={t('messagePlaceholder')}
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/90 focus:ring-offset-2 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {t('sending')}
                  </>
                ) : (
                  <>
                    {t('sendMessage')}
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </AnimatedElement>
        </div>
        
        <AnimatedElement animation="animate-fade-in" threshold={0.1} className="mt-16">
          <h3 className="text-2xl font-bold mb-6 text-center">{t('findUs')}</h3>
          <div ref={mapContainer} className="w-full h-96 rounded-xl overflow-hidden shadow-md"></div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default Contact;
