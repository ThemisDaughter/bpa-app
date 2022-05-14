import styles from 'styles/TitleSection.module.css';
import Image from 'next/image';
import heroImage from 'assets/images/phone-test.png';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { useWindowDimensions, useAnimationProperties } from 'tools/hooks'
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
//   }, [innerWidth, innerHeight])
  const { scale_phone, rotate_phone, move_phone } = useAnimationProperties();
 

//   // animation properties
//     const scale_phone = useTransform(scrollY, [300, height*2], [6.5, 1.2]);
//     const move_phone = useTransform(scrollY, [300, height*2], [-300, 0]);
//     const rotate_phone = useTransform(scrollY, [300, height*2], [0, -20]);

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
         {/* <div className={styles.heroImage}> */}
           <Image src={ heroImage } layout='fill' objectFit='contain' alt="instagram story" ></Image>
         {/* </div> */}
         </motion.div>
      </div>
    </section>
  )
}

export default TitleSection