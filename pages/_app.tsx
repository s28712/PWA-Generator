import type { AppProps } from 'next/app'
import ModelProvider from '../contexts/modal';
import SubmissionProvider from '../contexts/submit';
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ModelProvider>
      <SubmissionProvider>
        <Component {...pageProps} />
      </SubmissionProvider>
    </ModelProvider>
  );
}

export default MyApp