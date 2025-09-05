import React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="format-detection" content="telephone=no" />
          <link rel="shortcut icon" href="favicon.ico" />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <meta
            name="google-site-verification"
            content="UNVASQUka0sOHQd8oOi0_Z8GkE25BXAyeMiiQp-jMlM"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
