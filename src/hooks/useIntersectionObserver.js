import { useState, useEffect } from 'react';

/**
 * Custom hook to observe element intersection with viewport
 * Uses Intersection Observer API to trigger animations when elements enter viewport
 * 
 * @param {React.RefObject} ref - Reference to the element to observe
 * @param {Object} options - Intersection Observer options
 * @param {number} options.threshold - Intersection threshold (default: 0.1)
 * @param {Element} options.root - Root element for intersection (default: null/viewport)
 * @param {string} options.rootMargin - Margin around root (default: '0px')
 * @returns {boolean} isIntersecting - Whether the element is currently intersecting
 */
function useIntersectionObserver(ref, options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  
  useEffect(() => {
    // Ensure ref is valid
    if (!ref || !ref.current) {
      return;
    }
    
    // Create intersection observer with callback
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Set intersecting state when element enters viewport
        if (entry.isIntersecting) {
          setIsIntersecting(true);
        }
      },
      {
        threshold: 0.1,
        ...options
      }
    );
    
    // Start observing the element
    const element = ref.current;
    observer.observe(element);
    
    // Cleanup function to disconnect observer
    return () => {
      observer.disconnect();
    };
  }, [ref, options]);
  
  return isIntersecting;
}

export default useIntersectionObserver;
