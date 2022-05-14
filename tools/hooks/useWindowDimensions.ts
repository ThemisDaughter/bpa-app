
// how about:

import { useState, useEffect } from 'react';


// Hook
export function useWindowDimensions() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowDimensions, setWindowDimensions] = useState<{ innerWidth: number | undefined, innerHeight: number | undefined }>({
    innerWidth: undefined,
    innerHeight: undefined,
  });

  function handleResize() {
    // Set window width/height to state
    const { innerWidth, innerHeight } = window;
    setWindowDimensions({
      innerWidth,
      innerHeight,
    });
  }

  useEffect(() => {
    // only execute all the code below in client side
      // Handler to call on window resize
      // Add event listener
      window.addEventListener("resize", handleResize);
     
      // Call handler right away so state gets updated with initial window size
      handleResize();
    
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowDimensions;
}