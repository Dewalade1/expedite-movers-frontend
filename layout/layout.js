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
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous"></link>
          <link href="https://fonts.googleapis.com/css2?family=Domine:wght@400;500;600;700&display=swap" rel="stylesheet" />

          <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>
        </Head>
        <Header />
        <main>{children}</main>
        <Footer />
      </>
    );
}