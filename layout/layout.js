import React from 'react';

import Head from 'next/head';

import Header from '../component/shared/header';
import Footer from '../component/shared/footer';

export default function Layout ({children}) {
    return (
      <>
        <Head>
          <title>Home | Expedite Movers Ltd.</title>

          <meta charSet="utf-8" />
          <meta name="author" content="Ade-Onojobi Oluwadewalade" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=yes" />
          <meta name="description" content="Expeditemovers is a Nigerian logistics service commited to providing the best in shipping and transportation services." />

          {/* <meta name="og:title" content={siteTitle} /> */}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="" />
          <meta property="og:url" content="https://moviecritics.vercel.app/" />
          <meta property="og:image" content="https://res.cloudinary.com/hellodewa/image/upload/v1616334477/Moviecritics/images/logos/moviecritics-flavicon_se6axa.ico" />
          <meta property="og:description" content="Expeditemovers is a Nigerian logistics service commited to providing the best in shipping and transportation services." />

          <meta property="og:site_name" content="ExpediteMovers" />
          <meta name="twitter:image:alt" content="ExpediteMovers" />

          <link rel="shortcut icon" href="https://res.cloudinary.com/hellodewa/image/upload/v1616334477/Moviecritics/images/logos/moviecritics-flavicon_se6axa.ico" />
          <link rel="icon" href="https://res.cloudinary.com/hellodewa/image/upload/v1616334477/Moviecritics/images/logos/moviecritics-flavicon_se6axa.ico" />

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous"></link>
          <link href="https://fonts.googleapis.com/css2?family=Domine:wght@400;500;600;700&display=swap" rel="stylesheet" />
        </Head>
        <Header />
        <main className='ml-4 pl-4 mr-4 pr-4'>{children}</main>
        <Footer />
      </>
    );
}