import React from 'react';

import Header from '../component/shared/header';
import Footer from '../component/shared/footer';

export default function Layout ({children}) {
    return (
      <>
        <Head>
          <title>Home | Expedite Movers Ltd.</title>

          <meta charSet="utf-8" />
          <meta name="author" content="Ade-ONojobi Oluwadewalade" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=yes" />
          <meta name="description" content="Expedite movers is a Nigerian logistics service commited to providing the best in shipping and transportation services." />

          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="" />
          <meta property="og:url" content="https://moviecritics.vercel.app/" />
          <meta property="og:image" content="https://res.cloudinary.com/hellodewa/image/upload/v1616334477/Moviecritics/images/logos/moviecritics-flavicon_se6axa.ico" />
          <meta property="og:description" content="Expedite movers is a Nigerian logistics service commited to providing the best in shipping and transportation services." />

          <meta property="og:site_name" content="Moviecritics" />
          <meta name="twitter:image:alt" content="Moviecritics" />

          <link rel="shortcut icon" href="https://res.cloudinary.com/hellodewa/image/upload/v1616334477/Moviecritics/images/logos/moviecritics-flavicon_se6axa.ico" />
          <link rel="icon" href="https://res.cloudinary.com/hellodewa/image/upload/v1616334477/Moviecritics/images/logos/moviecritics-flavicon_se6axa.ico" />

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Domine:wght@400;500;600;700&display=swap" rel="stylesheet" />
        </Head>
        <Header />
        <main>{children}</main>
        <Footer />
      </>
    );
}