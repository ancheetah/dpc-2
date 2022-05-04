import { BuilderComponent } from '@builder.io/react';
import type { AppProps } from 'next/app';
import '../styles/bootstrap-custom.scss';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
   return (
      <>
         <BuilderComponent model="navigation-bar" content={pageProps.navigationBar} />
         <Component {...pageProps} />
         <BuilderComponent model="footer" content={pageProps.footer} />
      </>
   );
};

export default MyApp;
