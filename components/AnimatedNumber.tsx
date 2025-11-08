'use client';

import { useEffect, useRef, useState } from 'react';

interface AnimatedNumberProps {
  target: number;
  suffix: string;
  duration?: number;
  className?: string;
  decimals?: number;
}

export default function AnimatedNumber({ 
  target, 
  suffix, 
  duration = 2000, 
  className = '',
  decimals = 0 
}: AnimatedNumberProps) {
  const [currentValue, setCurrentValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            const startTime = Date.now();
            const startValue = 0;
            
            const animate = () => {
              const now = Date.now();
              const elapsed = now - startTime;
              const progress = Math.min(elapsed / duration, 1);
              
              // Easing function for smooth animation
              const easeOutQuart = 1 - Math.pow(1 - progress, 4);
              
              const newValue = startValue + (target - startValue) * easeOutQuart;
              
              if (decimals > 0) {
                setCurrentValue(parseFloat(newValue.toFixed(decimals)));
              } else {
                setCurrentValue(Math.floor(newValue));
              }
              
              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                // Ensure final value is exact
                if (decimals > 0) {
                  setCurrentValue(parseFloat(target.toFixed(decimals)));
                } else {
                  setCurrentValue(target);
                }
              }
            };
            
            requestAnimationFrame(animate);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [target, duration, hasAnimated, decimals]);

  const displayValue = decimals > 0 
    ? currentValue.toFixed(decimals) 
    : currentValue.toString();

  return (
    <div ref={ref} className={className}>
      {displayValue}{suffix}
    </div>
  );
}

