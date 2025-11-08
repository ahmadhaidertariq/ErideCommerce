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
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let animated = false;

    const startAnimation = () => {
      if (animated) return;
      animated = true;
      setHasAnimated(true);
      
      const startTime = Date.now();
      const startValue = 0;
      const animDuration = duration;
      const animTarget = target;
      const animDecimals = decimals;
      
      const animate = () => {
        const now = Date.now();
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / animDuration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        
        const newValue = startValue + (animTarget - startValue) * easeOutQuart;
        
        if (animDecimals > 0) {
          setCurrentValue(parseFloat(newValue.toFixed(animDecimals)));
        } else {
          setCurrentValue(Math.floor(newValue));
        }
        
        if (progress < 1) {
          animationRef.current = requestAnimationFrame(animate);
        } else {
          // Ensure final value is exact
          if (animDecimals > 0) {
            setCurrentValue(parseFloat(animTarget.toFixed(animDecimals)));
          } else {
            setCurrentValue(animTarget);
          }
        }
      };
      
      animationRef.current = requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated) {
            startAnimation();
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    // Check if already visible on mount
    const checkAndObserve = () => {
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight + 100 && rect.bottom > -100;
      
      if (isVisible && !animated) {
        setTimeout(startAnimation, 300);
      } else {
        observer.observe(element);
      }
    };

    // Delay to ensure component is fully mounted
    const timeoutId = setTimeout(checkAndObserve, 150);

    return () => {
      clearTimeout(timeoutId);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      observer.disconnect();
    };
  }, [target, duration, decimals]); // Include dependencies

  const displayValue = decimals > 0 
    ? currentValue.toFixed(decimals) 
    : currentValue.toString();

  return (
    <div ref={ref} className={className}>
      {displayValue}{suffix}
    </div>
  );
}
