import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='de'>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Maven+Pro:wght@400;500;600;700;800&family=Roboto+Slab:wght@200;300;400;500;600;800;900&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
