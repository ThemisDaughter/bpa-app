
import { useEffect, useState } from 'react';
import { useTransform, useViewportScroll } from 'framer-motion';
import { useWindowDimensions } from '.';


export const useScrollTransform = (array1: (string | number)[], array2: (string | number)[]) => {
  const { innerWidth, innerHeight } = useWindowDimensions();
  const { scrollY } = useViewportScroll();

  // viewport in pixels
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
// getting viewport in pixels
  useEffect(() => { 
    setWidth(innerWidth!);
    setHeight(innerHeight!);
  }, [innerWidth, innerHeight])

  // I have: width, height, scrollPosition, scrollstart, scrollend
  // I need: first, both arrays in pixels
  const replaceWithPixels = (arr: (string | number)[]) => {
    return arr.map(el => {
      if (typeof el === 'string') {
        const trimmedEl = el.trim();
        return trimmedEl.match(/vh/)
          ? parseInt(trimmedEl.replace(/vh/, '')) / 100 * height
          : trimmedEl.match(/vw/)
            ? parseInt(trimmedEl.replace(/vw/, '')) / 100 * width
            : 0
      } else {
        return el
      }
    })
  }
    // one and a half: translate container position to viewport position with boundingClientRect
    // second, put both arrays into a useTransform hook

   
  return useTransform(scrollY, replaceWithPixels(array1), replaceWithPixels(array2));
}
