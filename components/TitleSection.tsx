import styles from 'styles/TitleSection.module.css';
import Image from 'next/image';
import heroImage from 'assets/images/phone-test.png';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { useWindowDimensions, useScrollTransform } from 'tools/hooks'
import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

const TitleSection = () => {

  // hooks
  // const { scrollY } = useViewportScroll();
  // const { innerWidth, innerHeight } = useWindowDimensions();
//   // viewport in pixels
//   const [height, setHeight] = useState(0);
//   const [width, setWidth] = useState(0);
// // getting viewport in pixels
//   useEffect(() => { 
//     setWidth(innerWidth!);
//     setHeight(innerHeight!);
//   }, [])

 

//   // animation properties
    const scale_phone = useScrollTransform([300, '200vh'], [6.5, 1.2]);
    const move_phone = useScrollTransform([300, '200vh'], [-300, 0]);
    const rotate_phone = useScrollTransform([300, '200vh'], [0, -20]);
  
  console.log(scale_phone)
  
  // useScrollTransform is a custom hook to adapt the scroll transforms to the viewport height. uses the same syntax as framer-motions useTransform
  // but using scrollY as default. Takes arrays as arguments, first array with offset from top of container and
  // end of scroll animation, and the array with the values for the transforms. All values can be numbers or strings relative to vh/vw,
  // example: useScrollTransform(['100vh', '300vh'], ['-20vw', 20]) will start viewport-height from the top (of container, yet to be implemented)
  // and end 4viewport heights from the top or 3 viewport heights from the top and transform property from negative 1/5 of the viewport width to 20px


  console.log('return of the useTransform hook for scaling', scale_phone)
  return (
    // section is 3 viewport heights high for scroll animation
    <section className={styles.section}>
      {/* overlay with sticky position  */}
      <div className={styles.backgroundLayer}>
       <div className={styles.textContainer}>
       {/* the title here is relative so it can float in with the image */}

         <motion.h1 className={styles.title}>
           <motion.span  id="title-line-1" className={ styles.titleLine1 }>
              Platziere deine Brand
           </motion.span>
           <br />
           <span id="title-line-2" className={ styles.titleLine2 }>
             wo man sie sieht
           </span>
         </motion.h1>
         <ul className={styles.schlagworte}>
           <li>auffallend.</li>
           <li>neu.</li>
           <li>cool.</li>
         </ul>
       </div>
       <motion.div
         style={{
            scale: scale_phone,
            x: move_phone,
            rotate: rotate_phone,
            y: '200px'
         }}
         className={styles.imageContainer}>
          {/* <div className={styles.heroImage}>  */}
           <Image src={ heroImage } layout='fill' objectFit='contain' alt="instagram story" ></Image>
          {/* </div>  */}
         </motion.div>
      </div>
    </section>
  )
}

export default TitleSection