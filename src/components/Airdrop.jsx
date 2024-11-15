import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Airdrop = () => {

  const wallet = useWallet();
  const { connection } = useConnection();
  const notify = (meassage) => toast(meassage);

  async function requestAirdrop() {
      let amount = document.getElementById("amount").value;
      try {
        await connection.requestAirdrop(wallet.publicKey, amount * LAMPORTS_PER_SOL);
        notify("Successfully requested airdrop "+ amount + " SOL");
      } catch (error) {
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
    </div>
  )
}

export default Airdrop
