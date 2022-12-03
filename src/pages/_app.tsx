import type { AppProps } from 'next/app';
import { globalStyles } from '../presentational/themes';

export default function App({ Component, pageProps }: AppProps) {
  globalStyles();
  return <Component {...pageProps} />;
}
