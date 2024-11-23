import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction} from "@solana/web3.js";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export function SendTokens() {
    const wallet = useWallet();
    const {connection} = useConnection();
    const notify = (meassage) => toast(meassage);
    const [loading,setLoading] = useState(false);

    async function sendTokens() {
        let to = document.getElementById("to").value;
        let amount = document.getElementById("amount").value;
        try {
            const transaction = new Transaction();
            transaction.add(SystemProgram.transfer({
                fromPubkey: wallet.publicKey,
                toPubkey: new PublicKey(to),
                lamports: amount * LAMPORTS_PER_SOL,
            }));
            setLoading(true);
            await wallet.sendTransaction(transaction, connection);
            setLoading(false);
            notify("Successfully sent " + amount + " SOL to " + to);
        } catch (e) {
            setLoading(false);
            notify("Failed to send " + amount + " SOL to " + to + ": " + e.message);
        }
    }

    return (
    // <div>
    //     <input id="to" type="text" placeholder="To" />
    //     <input id="amount" type="text" placeholder="Amount" />
    //     <button onClick={sendTokens}>Send</button>
    // </div>
    <div className="p-8">
        <h2 className="text-xl">Send Tokens:</h2>
        <br />
        <label htmlFor="to">Public Address:</label>
        <input id="to" type="text" placeholder="to" className="bg-transparent p-1 mb-2 border-[#1E3E62] border-[0.6px] ml-3 rounded-md"/> <br />
        <label htmlFor="amount">Amount in SOL:</label>
        <input id="amount" type="text" placeholder="Amount" className="bg-transparent p-1 border-[#1E3E62] border-[0.6px] ml-3 rounded-md"/> <br />
        <button onClick={sendTokens} className="mt-10 p-3 bg-[#1E3E62] text-[#FF6500] rounded-lg">Sent Token</button>
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