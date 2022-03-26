import { ChakraProvider } from "@chakra-ui/react";
import { Provider, defaultChains } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { providers } from "ethers";

import { theme } from "../theme";

const connectors = [new InjectedConnector({ chains: defaultChains })];

const provider = ({ chainId }) =>
  new providers.AlchemyProvider(chainId, process.env.NEXT_PUBLIC_ALCHEMY_KEY);

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Provider autoConnect provider={provider} connectors={connectors}>
        <Component {...pageProps} />
      </Provider>
    </ChakraProvider>
  );
}

export default MyApp;
