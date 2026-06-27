import { useState, useEffect } from 'react';

/**
 * Custom hook to track window scroll position
 * Returns the current vertical scroll position (scrollY)
 */
function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    // Handler to update scroll position
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    // Add event listener with passive flag for performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Set initial scroll position
    handleScroll();
    
    // Cleanup function to remove event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return scrollY;
}

export default useScrollPosition;
