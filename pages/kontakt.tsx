import Link from 'next/link';
import { motion } from 'framer-motion';
import { pageTransitionVariants } from 'animations/animationVariants';
const kontakt = () => {
  return (
    <motion.div
      variants={pageTransitionVariants}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      
      einige informationen
     
    </motion.div>
  )
}

export default kontakt