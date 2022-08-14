import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout/Layout'
import SEO from '../components/seo/SEO';
import { LayoutProvider } from '../contexts/LayoutContext';
import { NavigationProvider } from '../contexts/NavigationContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LayoutProvider>
      <NavigationProvider>
        <Layout>
          <SEO />
          <Component {...pageProps} />
        </Layout>
      </NavigationProvider>
    </LayoutProvider>
  );
}
export default MyApp
