import { ed25519 } from '@noble/curves/ed25519';
import { useWallet } from '@solana/wallet-adapter-react';
import bs58 from 'bs58';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function SignMessage() {
    const { publicKey, signMessage } = useWallet();
    const notify = (meassage) => toast(meassage);


    async function onSignMessage() {
        if (!publicKey) throw new Error('Wallet not connected!');
        if (!signMessage) throw new Error('Wallet does not support message signing!');
        
        try {
            const message = document.getElementById("message").value;
            const encodedMessage = new TextEncoder().encode(message);
            const signature = await signMessage(encodedMessage);
    
            if (!ed25519.verify(signature, encodedMessage, publicKey.toBytes())) throw new Error('Message signature invalid!');
            notify(`Message signature: ${bs58.encode(signature)}`);
        } catch (error) {
            notify("Failed to sign message: " + error.message)
        }
    };

    return (
        <div className="p-8">
            <h2 className="text-xl">Sign Message:</h2>
            <br />
            <label htmlFor="message">Message:</label>
            <input id="message" type="text" placeholder="Message" className="bg-transparent p-1 border-[#1E3E62] border-[0.6px] ml-3 rounded-md"/> <br />
            <button onClick={onSignMessage} className="mt-10 p-3 bg-[#1E3E62] text-[#FF6500] rounded-lg">Sign Message</button>
            <ToastContainer 
            theme="dark"
            position="bottom-right"
            hideProgressBar={false}
            />
        </div>
    );
};