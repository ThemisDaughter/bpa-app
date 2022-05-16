import Navbar from 'components/Navbar';
import { AnyRecord } from 'dns';
import styles from 'styles/Layout.module.css';
import { JsxElement } from 'typescript';

interface Props {
  view: string;
  page: string;
  children?: any;
}

const Layout = ({ page, view, children }: Props) => {
  return (
    <>
      <header className={styles.header}>
        <Navbar page={page} view={view} />
      </header>
      {children}
      <footer className={styles.footer}>

      </footer>
    </>
  )
}

export default Layout