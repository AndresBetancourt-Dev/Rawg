import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout/Layout'
import SEO from '../components/seo/SEO';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <SEO />
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp
