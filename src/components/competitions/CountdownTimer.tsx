
import React from 'react';
import { useEffect, useState } from 'react';
import { useTranslation } from '../../hooks/useTranslation';

interface CountdownTimerProps {
  targetDate: Date;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const { t } = useTranslation();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference <= 0) {
        clearInterval(timer);
        return;
      }
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);
    
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="mb-10">
      <p className="text-white/80 mb-4">{t('registrationStartsIn')}:</p>
      <div className="flex flex-wrap justify-center md:justify-start gap-4">
        <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 w-24 text-center">
          <span className="block text-3xl font-bold">{timeLeft.days}</span>
          <span className="text-white/60 text-sm">{t('days')}</span>
        </div>
        <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 w-24 text-center">
          <span className="block text-3xl font-bold">{timeLeft.hours}</span>
          <span className="text-white/60 text-sm">{t('hours')}</span>
        </div>
        <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 w-24 text-center">
          <span className="block text-3xl font-bold">{timeLeft.minutes}</span>
          <span className="text-white/60 text-sm">{t('minutes')}</span>
        </div>
        <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 w-24 text-center">
          <span className="block text-3xl font-bold">{timeLeft.seconds}</span>
          <span className="text-white/60 text-sm">{t('seconds')}</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
