
import { useEffect, useState } from 'react';
import { useTransform, useViewportScroll } from 'framer-motion';
import  { useWindowDimensions } from '.'

// not yet a real hook, I'm just returning the properties for phone or desktop
export const useAnimationProperties = () => {
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

 

  // animation properties
    const scale_phone = useTransform(scrollY, [300, height*2], [6.5, 1.2]);
    const move_phone = useTransform(scrollY, [300, height*2], [-300, 0]);
    const rotate_phone = useTransform(scrollY, [300, height*2], [0, -20]);

  return { scale_phone, move_phone, rotate_phone }
}
