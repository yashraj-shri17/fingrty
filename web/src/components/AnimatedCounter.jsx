import { useState, useEffect, useRef } from 'react';

export default function AnimatedCounter({ end, duration = 2000, prefix = '', suffix = '' }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    let rawEnd = parseFloat(end);
    if (isNaN(rawEnd)) rawEnd = 0;

    let start = null;
    let observer;
    let frameId;
    let hasAnimated = false; // Prevents re-animating if scrolling up/down quickly

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percentage = Math.min(progress / duration, 1);
      
      // easeOutExpo for smoother ending
      const easePercentage = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
      const current = rawEnd * easePercentage;

      setCount(current);

      if (percentage < 1) {
        frameId = requestAnimationFrame(animate);
      } else {
        setCount(rawEnd); 
      }
    };

    observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasAnimated) {
        hasAnimated = true; // Flag true forever once seen
        frameId = requestAnimationFrame(animate);
      }
    }, { threshold: 0.1 });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
      if (observer) observer.disconnect();
    };
  }, [end, duration]);

  // Format the display
  let displayValue = '';
  if (count === 0 && end !== 0 && end !== '0') {
    displayValue = '0';
  } else {
     const rawStr = end.toString();
     if (rawStr.includes('.')) {
        // e.g. 1.5 -> preserve one decimal
        displayValue = count.toFixed(1);
     } else {
        displayValue = Math.floor(count).toString();
     }
  }

  return (
    <span ref={elementRef}>
       {prefix}{displayValue}{suffix}
    </span>
  );
}
