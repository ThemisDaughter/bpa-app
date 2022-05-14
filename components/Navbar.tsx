import styles from '../styles/Navbar.module.css';
import Link from 'next/link';
import { BiMenu } from 'react-icons/bi';


const Navbar = () => {
// animate the dropdown with gsap here. guess: have a useEffect, set clickHandler, have the menu appear, (then I don't know how to toggle it back)

  return (
    // container, 3 parts, center 

    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href='/'><a>BPA</a></Link>
      </div>
      <div className={styles.menu}>
        <BiMenu className={styles.dropdown} />
       <div className={`${styles.links} hidden`}>
         <div className={styles.link}>
           <Link href='/'><a>Angebot</a></Link>
         </div>
         <div className={styles.link}>
         <Link href='/'><a>Brand Placement</a></Link>
         </div>
         <div className={styles.link}>
         <Link href='/'><a>über uns</a></Link>
         </div>
       </div>
      </div>
      <div className={styles.cta}>
        <button className={styles.ctaBtn}>Kontakt</button>
    </div>
    </nav>
  )
}

export default Navbar