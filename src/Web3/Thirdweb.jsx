import React from "react";
import { ThirdwebProvider } from "@thirdweb-dev/react";
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
      options: [
        "google",
        "discord",
        "telegram",
        "farcaster",
        "email",
        "x",
        "passkey",
        "phone",
      ],
    },
  }),
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
  createWallet("me.rainbow"),
  createWallet("io.rabby"),
  createWallet("io.zerion.wallet"),
];

const ThirdwebProviderComponent = () => {
  return (
    <ThirdwebProvider clientId="">
      <ConnectButton
        client={client}
        wallets={wallets}
        connectModal={{ size: "compact" }}
      />
    </ThirdwebProvider>
  );
};

export default ThirdwebProviderComponent;

