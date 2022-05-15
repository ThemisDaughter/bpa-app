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
      kontakt
      <Link href='/'>
        <a>

      zurück
        </a>
      </Link>
    </motion.div>
  )
}

export default kontakt