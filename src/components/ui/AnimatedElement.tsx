
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedElementProps {
  children: React.ReactNode;
  animation: string;
  className?: string;
  delay?: number;
  threshold?: number;
}

const AnimatedElement: React.FC<AnimatedElementProps> = ({
  children,
  animation,
  className,
  delay = 0,
  threshold = 0.3,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.disconnect();
      }
    };
  }, [threshold]);

  return (
    <div
      ref={elementRef}
      className={cn(
        className,
        isVisible ? animation : 'opacity-0',
        'transition-all duration-700'
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedElement;
