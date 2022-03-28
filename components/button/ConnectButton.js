import { Text, Button } from "@chakra-ui/react";
import { formatConnectedWallet } from "../../utils/utils";

export function ConnectButton({ connectData, address, connect }) {
  if (address) {
    return <Text>Connected to: {formatConnectedWallet(address)}</Text>;
  }

  return (
    <>
      {connectData.connectors.map((connector) => (
        <Button
          maxW={"30%"}
          colorScheme="brand"
          variant="outline"
          size="sm"
          key={connector.id}
          onClick={() => connect(connector)}
        >
          Connect Wallet
        </Button>
      ))}
    </>
  );
}
