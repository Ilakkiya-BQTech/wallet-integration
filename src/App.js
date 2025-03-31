import React from "react";
import ThirdwebProviderComponent from "../src/Web3/Thirdweb";
import Web3Connect from "../src/Web3/web3.connect";

function App() {
  return (
    <div>
    
      <Web3Connect />
      <ThirdwebProviderComponent/>
      </div>
   
  );
}

export default App;
