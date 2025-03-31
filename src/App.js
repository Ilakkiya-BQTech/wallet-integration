import React from "react";
import { ThirdwebProvider, ConnectWallet, metamaskWallet, coinbaseWallet, rainbowWallet, rabbyWallet, zerionWallet, inAppWallet } from "@thirdweb-dev/react";

function App() {
  return (
    <ThirdwebProvider 
      clientId=""
      supportedWallets={[
        inAppWallet({
          auth: {
            options: ["google", "discord", "telegram", "farcaster", "email", "x", "passkey", "phone"],
          },
        }),
        metamaskWallet(),
        coinbaseWallet(),
        rainbowWallet(),
        rabbyWallet(),
        zerionWallet(),
      ]}
    >
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Welcome to My Web3 App</h1>
        <ConnectWallet />
      </div>
    </ThirdwebProvider>
  );
}

export default App;
