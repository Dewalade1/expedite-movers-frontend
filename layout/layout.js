import React, {useEffect} from 'react';

import Head from 'next/head';

import NavBar from "../component/shared/headNavbar";
import Footer from '../component/shared/footer';

export default function Layout ({ children, onHomePage }) {

  const DriftSetup = () => {
    // Start of Async Drift Code
    "use strict";

    !function() {
      var t = window.driftt = window.drift = window.driftt || [];
      if (!t.init) {
        if (t.invoked) return void (window.console && console.error && console.error("Drift snippet included twice."));
          t.invoked = !0, t.methods = [ "identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on" ], 
          t.factory = function(e) {
            return function() {
              var n = Array.prototype.slice.call(arguments);
                return n.unshift(e), t.push(n), t;
            };
          }, t.methods.forEach(function(e) {
          t[e] = t.factory(e);
        }), t.load = function(t) {
        var e = 3e5, n = Math.ceil(new Date() / e) * e, o = document.createElement("script");
        o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js";
        var i = document.getElementsByTagName("script")[0];
        i.parentNode.insertBefore(o, i);
        };
      }
    }();
    drift.SNIPPET_VERSION = '0.3.1';
    drift.load('xknu6i2fhwk2');
    // End of Async Drift Code
  }

    return (
      <>
        <Head>
          <meta charSet="utf-8" />
          <meta name="author" content="Ade-Onojobi Oluwadewalade" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=yes" />
          <meta name="description" content="Expeditemovers is a Nigerian logistics service commited to providing the best in shipping and transportation services." />

          {/* <meta name="og:title" content={siteTitle} /> */}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="" />
          <meta property="og:url" content="https://www.expeditemoversng.com/" />
          <meta property="og:image" content="https://res.cloudinary.com/hellodewa/image/upload/v1622723337/expeditemovers/images/sys/flavicons/android-chrome-512x512_eb6zdq.png" />
          <meta property="og:description" content="Expeditemovers is a Nigerian logistics service commited to providing the best in shipping and transportation services." />

          <meta property="og:site_name" content="Expeditemovers Ltd." />
          <meta name="twitter:image:alt" content="Expeditemovers Ltd." />

          <script>{DriftSetup()}</script>
          <script src="lodash.js"></script>
          <script defer src="https://use.fontawesome.com/releases/v5.0.7/js/all.js"></script>        
          <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossOrigin="anonymous"></script>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossOrigin="anonymous"></script>

          <link rel="apple-touch-icon" sizes="180x180" href="https://res.cloudinary.com/hellodewa/image/upload/v1622723336/expeditemovers/images/sys/flavicons/apple-touch-icon_u5ydmw.png"/>
          <link rel="android-chrome-icon" type="image/png" sizes="512x512" href="https://res.cloudinary.com/hellodewa/image/upload/v1622723337/expeditemovers/images/sys/flavicons/android-chrome-512x512_eb6zdq.png"/>
          <link rel="android-chrome-icon" type="image/png" sizes="192x192" href="https://res.cloudinary.com/hellodewa/image/upload/v1622723336/expeditemovers/images/sys/flavicons/android-chrome-192x192_g6ljuu.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="https://res.cloudinary.com/hellodewa/image/upload/v1622723336/expeditemovers/images/sys/flavicons/favicon-32x32_bp6pr1.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="https://res.cloudinary.com/hellodewa/image/upload/v1622723336/expeditemovers/images/sys/flavicons/favicon-16x16_d6skmh.png"/>
          <link rel="manifest" href="/site.webmanifest"/>

          <link rel="shortcut icon" type="image/png" href="https://res.cloudinary.com/hellodewa/image/upload/v1622723336/expeditemovers/images/sys/flavicons/android-chrome-192x192_g6ljuu.png" />
          <link rel="icon" type="image/png" href="https://res.cloudinary.com/hellodewa/image/upload/v1622723336/expeditemovers/images/sys/flavicons/android-chrome-192x192_g6ljuu.png" />

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossOrigin="anonymous"></link>
          <link href="https://fonts.googleapis.com/css2?family=Domine:wght@400;500;600;700&display=swap" rel="stylesheet" />
        </Head>

        <NavBar onHomePage={onHomePage} />
        <main>{children}</main>
        <Footer />
      </>
    );
}