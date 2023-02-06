import { AppProps } from 'next/app';

import '../assets/styles/global.css';
import '@solana/wallet-adapter-react-ui/styles.css';
import WalletConnectProvider from '../components/wallet/WalletConnectProvider';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <WalletConnectProvider>
    <Component {...pageProps} />
  </WalletConnectProvider>
);

export default MyApp;
