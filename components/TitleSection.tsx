import styles from 'styles/TitleSection.module.css';
import Image from 'next/image';
import heroImage from 'assets/images/anotherPhonetest.png';
import { motion } from 'framer-motion';
import { homeTitleVariants } from 'animations/animationVariants';
import { useScrollTransform } from 'tools/hooks'

import useResponsiveValue from 'tools/hooks/useResponsiveValue';

const TitleSection = () => {


  const rotationValue = useResponsiveValue(0, -20)

//   // animation properties
// useScrollTransform is a custom hook to adapt the scroll transforms to the viewport height. uses the same syntax as framer-motions useTransform
// but using scrollY as default. Takes arrays as arguments, first array with offset from top of container and
// end of scroll animation, and the array with the values for the transforms. All values can be numbers or strings relative to vh/vw,
// example: useScrollTransform(['100vh', '300vh'], ['-20vw', 20]) will start viewport-height from the top (of container, yet to be implemented)
// and end 4viewport heights from the top or 3 viewport heights from the top and transform property from negative 1/5 of the viewport width to 20px
    const scale_phone = useScrollTransform([300, '200vh'], [6.5, 1.2]);
    const move_phone = useScrollTransform([300, '200vh'], ['-22vw', 0]);
    const rotate_phone = useScrollTransform([300, '200vh'], [0, rotationValue]);
  

  return (
    // section is 3 viewport heights high for scroll animation
    <section className={styles.section}>
      {/* overlay with sticky position  */}
      <div className={styles.backgroundLayer}>
       <div className={styles.textContainer}>
       {/* the title here is relative so it can float in with the image */}

          <motion.h1
            className={styles.title}
            variants={homeTitleVariants}
            initial='hidden'
          animate='visible'>
           <motion.span  id="title-line-1" className={ styles.titleLine1 }>
              Platziere deine Brand
           </motion.span>
           <br />
           <motion.span id="title-line-2" className={ styles.titleLine2 }>
             wo man sie sieht
           </motion.span>
         </motion.h1>
          <motion.ul
            className={styles.schlagworte}
            style={{

            }}
          >
           <li>auffallend.</li>
           <li>neu.</li>
           <li>cool.</li>
         </motion.ul>
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