import React, { useState } from "react";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import { createThirdwebClient } from "thirdweb";
import { ConnectButton } from "thirdweb/react";

import {
  inAppWallet,
  createWallet,
} from "thirdweb/wallets";
const client = createThirdwebClient({
    clientId: "....",
});

const wallets = [
    inAppWallet({
        auth: {
            options: ["email", "google"],
        },
    }),
    createWallet("io.metamask"),
    createWallet("com.coinbase.wallet"),
    createWallet("me.rainbow"),
    createWallet("io.rabby"),
    createWallet("io.zerion.wallet"),
];

function Web3Connect() {
    const [account, setAccount] = useState(null);
    const [balance, setBalance] = useState(null);

    const ConnectWallet = async () => {
        try {
            const web3Modal = new Web3Modal();
            const connection = await web3Modal.connect();
            const provider = new ethers.providers.Web3Provider(connection);
            const signer = provider.getSigner();
            const address = await signer.getAddress();
            setAccount(address);
            const balance = await provider.getBalance(address);
            setBalance(ethers.utils.formatEther(balance));
        } catch (error) {
            console.error("Connection failed:", error);
        }
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Traditional Thirdweb</h1>
            {account ? (
                <div>
                    <p><strong>Connected Account:</strong> {account}</p>
                    <p><strong>Balance:</strong> {balance} ETH</p>
                </div>
            ) : (
                <button onClick={ConnectWallet} style={{ padding: "10px 20px", fontSize: "16px" }}>
                    Connect Wallet
                </button>
            )}
            <hr style={{ margin: "20px 0" }} />

           
            <h2>Connect with Thirdweb</h2>
            <ConnectButton
                client={client}
                wallets={wallets}
                connectModal={{ size: "compact" }}
            />

        </div>
    );
}

export default Web3Connect;
