'use client';

import { useEffect, useRef, useState } from 'react';

interface CountUpNumberProps {
  target: number;
  suffix: string;
  duration?: number;
  className?: string;
  decimals?: number;
}

export default function CountUpNumber({ 
  target, 
  suffix, 
  duration = 2000, 
  className = '',
  decimals = 0 
}: CountUpNumberProps) {
  const [currentValue, setCurrentValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || hasAnimated.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            element.classList.add('count-up-animate');
            
            const startTime = Date.now();
            const startValue = 0;
            const animTarget = target;
            const animDuration = duration;
            const animDecimals = decimals;
            
            const animate = () => {
              const now = Date.now();
              const elapsed = now - startTime;
              const progress = Math.min(elapsed / animDuration, 1);
              
              // Easing function
              const easeOutQuart = 1 - Math.pow(1 - progress, 4);
              
              const newValue = startValue + (animTarget - startValue) * easeOutQuart;
              
              if (animDecimals > 0) {
                setCurrentValue(parseFloat(newValue.toFixed(animDecimals)));
              } else {
                setCurrentValue(Math.floor(newValue));
              }
              
              if (progress < 1) {
                animationFrameRef.current = requestAnimationFrame(animate);
              } else {
                // Final value
                if (animDecimals > 0) {
                  setCurrentValue(parseFloat(animTarget.toFixed(animDecimals)));
                } else {
                  setCurrentValue(animTarget);
                }
              }
            };
            
            animationFrameRef.current = requestAnimationFrame(animate);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '50px',
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [target, duration, decimals]);

  const displayValue = decimals > 0 
    ? currentValue.toFixed(decimals)
    : Math.floor(currentValue).toString();

  return (
    <div 
      ref={ref} 
      className={`count-up-number ${className}`}
    >
      {displayValue}{suffix}
    </div>
  );
}
