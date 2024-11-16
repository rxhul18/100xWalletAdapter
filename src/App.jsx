// import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
// import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
// import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider
} from '@solana/wallet-adapter-react-ui';
// import { clusterApiUrl } from '@solana/web3.js';
// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';
import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Home';

const App = () => {
  
  return (
    <div className='flex flex-col min-h-[100vh] h-100 justify-between'>
      
      <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
          <WalletProvider wallets={[]} autoConnect>
              <WalletModalProvider>
                  <div>
                    <Navbar />
                    <Home />
                  </div>
                  <Footer />
              </WalletModalProvider>
          </WalletProvider>
      </ConnectionProvider>
    </div>
  )
}

export default App
