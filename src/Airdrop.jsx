import { useWallet } from "@solana/wallet-adapter-react"

const Airdrop = () => {

    const wallet = useWallet();
    
  return (
    <div>
        Hi from airdrop
    </div>
  )
}

export default Airdrop