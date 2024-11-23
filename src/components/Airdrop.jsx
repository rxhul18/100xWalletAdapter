import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Airdrop = () => {

  const wallet = useWallet();
  const { connection } = useConnection();
  const notify = (meassage) => toast(meassage);
  const [loading,setLoading] = useState(false);

  async function requestAirdrop() {
      let amount = document.getElementById("amount").value;
      try {
        setLoading(true);
        await connection.requestAirdrop(wallet.publicKey, amount * LAMPORTS_PER_SOL);
        setLoading(false);
        notify("Successfully requested airdrop "+ amount + " SOL");
      } catch (error) {
        setLoading(false);
        notify("Failed to airdrop: " + error.message);
      }
  }

  

  return (
    <div className="p-8">
      <h2 className="text-xl">Request Airdrop:</h2>
      <br />
      <label htmlFor="amount">Amount in SOL:</label>
      <input id="amount" type="text" placeholder="Amount" className="bg-transparent p-1 border-[#1E3E62] border-[0.6px] ml-3 rounded-md"/> <br />
      <button onClick={requestAirdrop} className="mt-10 p-3 bg-[#1E3E62] text-[#FF6500] rounded-lg">Request Airdrop</button>
      <ToastContainer 
        theme="dark"
        position="bottom-right"
        hideProgressBar={false}
        />
        {loading === true ? <div className="fixed top-0 left-0 z-50 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center">
        <div className="animate-ping rounded-full h-20 w-20 border-8 border-[#FF6500]"></div>
        </div> : null}
    </div>
  )
}

export default Airdrop
