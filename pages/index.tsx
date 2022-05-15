import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from 'components/Navbar';
import TitleSection from 'components/TitleSection';
import OverviewSection from 'components/OverviewSection'
import styles from '../styles/Home.module.css';
import { motion } from 'framer-motion';
import { pageTransitionVariants } from 'animations/animationVariants';

const Home: NextPage = () => {
  return (
    <motion.div
    variants={pageTransitionVariants}
    initial='initial'
    animate='animate'
      exit='exit'
    >
      <Head>
        <title>Brand Placement - Werbung durch Social Media</title>
        <meta name="description" content="Brand Placement, Social media Marketing" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={ styles.navbar }>
        <Navbar />
      </header>
      <main>
        <TitleSection />
        <OverviewSection />
      </main>

      <footer className={styles.footer}>
       
      </footer>
    </motion.div>
  )
}

export default Home
