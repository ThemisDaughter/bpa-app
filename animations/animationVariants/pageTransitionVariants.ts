const pageTransitionVariants = {
  initial: {
    x: '100vw',
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8
    }
  },
  exit: {
   
    opacity: 0
  }
  
}

export default pageTransitionVariants;