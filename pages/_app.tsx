import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import ModelProvider from '../contexts/modal';
import SubmissionProvider from '../contexts/submit';
import '../styles/globals.css'

declare global {
  interface Window {
    isUpdateAvailable: any;
    workbox: any;
  }
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  function onSWUpdate() {

  }

  useEffect(() => {
    if('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js?v=v1').then((reg) => {
        reg.onupdatefound = () => {
          window.location.reload();
        }
      });
    }
  }, []);
  
  return (
    <ModelProvider>
      <SubmissionProvider>
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
        <Component {...pageProps} />
      </SubmissionProvider>
    </ModelProvider>
  );
}

export default MyApp