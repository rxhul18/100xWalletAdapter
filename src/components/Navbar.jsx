import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import {
    WalletDisconnectButton,
    WalletMultiButton,
} from '@solana/wallet-adapter-react-ui';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';

const Navbar = () => {
  const wallet = useWallet();
  const { connection } = useConnection();

  async function getBalance() {
    if (wallet.publicKey) {
      const balance = await connection.getBalance(wallet.publicKey);
      document.getElementById("balance").innerHTML = (balance / LAMPORTS_PER_SOL).toFixed(2) + " SOL";
    }
  }

  getBalance();
    return (
      <main className="flex w-full h-[4.5rem] justify-center" style={{backgroundColor:"black"}}>
        <nav className="container flex justify-between items-center">
          <div className="flex gap-2 my-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-box size-8"
            >
              <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
              <path d="m3.3 7 8.7 5 8.7-5"></path>
              <path d="M12 22V12"></path>
            </svg>
            <h1
              className="text-2xl font-semibold"
              style={{ fontFamily: "poppins" }}
            >
              100<span style={{color:"#FF6500"}}>x</span>WallAdp
            </h1>
          </div>
          <div className='flex justify-center items-center gap-4'>
            <WalletMultiButton style={{height:"36px"}}/>
            <WalletDisconnectButton style={{height:"36px",padding:"0px 12px"}}/>
              {/* <div className="my-3 border-gray-400 border-[1px] items-center px-4 py-1 rounded-2xl bg-slate-800">
              <h1 className="" style={{ fontFamily: "poppins" }}>
                v1.8
              </h1>
            </div> */}
            <h2 id='balance'></h2>
          </div>
          
        </nav>
      </main>
    );
  };
  
  export default Navbar;
  