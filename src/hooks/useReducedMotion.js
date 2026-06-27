import { useState, useEffect } from 'react';

/**
 * Custom hook to check user's reduced motion preference
 * Respects prefers-reduced-motion media query for accessibility
 * 
 * @returns {boolean} prefersReducedMotion - Whether user prefers reduced motion
 */
function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
  
  useEffect(() => {
    // Create media query matcher
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    // Handler to update preference when it changes
    const handleChange = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };
    
    // Listen for changes to the media query
    mediaQuery.addEventListener('change', handleChange);
    
    // Cleanup function to remove event listener on unmount
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);
  
  return prefersReducedMotion;
}

export default useReducedMotion;
