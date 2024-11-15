import { useState } from "react";
import Airdrop from "./components/Airdrop";
import { ToastContainer } from "react-toastify";
import { SendTokens } from "./components/SendToken";
import { SignMessage } from "./components/SignMessage";


const Home = () => {

    const [currentService, setCurrentService] = useState('airdrop');
return (
    <main className="flex w-full justify-center">
        <div className="container grid grid-cols-1 gap-4 justify-items-center">
            <div className="mt-5">
                <p className="my-3 text-2xl">こんにちは, <span className="text-[#FF6500]">100xWallApd</span> 🚀🔗 is wallet adapter that enables airdrops, token transfers, and message signing seamlessly.</p>
            </div>
            <section className="border-[#1E3E62] border-[1px] w-full py-4 px-2 rounded-md">
                <div className="grid grid-cols-3 gap-4 w-full pb-4">
                    <button onClick={()=>(setCurrentService('airdrop'))} className="border-[#1E3E62]">Received Airdrop</button>
                    <button onClick={()=>(setCurrentService('transaction'))}>Transaction</button>
                    <button onClick={()=>(setCurrentService('message'))}>Sign a message</button>
                </div>
                <div className="border-[#1E3E62] border-[1px] rounded-lg">
                {currentService === 'airdrop' && (
                    <Airdrop />
                )}
                {currentService === 'transaction' && (
                    <SendTokens />
                )}
                {currentService === 'message' && (
                    <SignMessage />
                )}
                </div>
            </section>
        </div>
    </main>
);
};

export default Home;
