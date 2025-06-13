import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'aos/dist/aos.css';
import '../styles/globals.css';
import { useEffect } from 'react';
import AOS from 'aos';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);


  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
