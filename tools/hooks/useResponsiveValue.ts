import { useEffect, useState } from 'react';
import { useWindowDimensions } from '.';


const useResponsiveValue = (val1: number, val2: number) => {
  const [value, setValue] = useState(val1);
  const { innerWidth } = useWindowDimensions();

  useEffect(() => {
    if (innerWidth) {
      if (innerWidth <= 640) setValue(val1);
      if (innerWidth > 640) setValue(val2);
    }
  }, [innerWidth])
  return value;
}

export default useResponsiveValue