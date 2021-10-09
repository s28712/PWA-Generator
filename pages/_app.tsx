import type { AppProps } from 'next/app'
import SubmissionProvider from '../contexts/submit';
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <SubmissionProvider>
      <Component {...pageProps} />
    </SubmissionProvider>
  );
}

export default MyApp