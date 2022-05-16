import '../styles/globals.css'
import type { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import Layout from 'components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    // layout goes around, uses router.asPath to tell it where the page is located at
    <Layout view='public' page={router.asPath}>
      <AnimatePresence>
        <Component {...pageProps} key={ router.asPath } />
      </AnimatePresence>
    </Layout>
    )
}

export default MyApp
