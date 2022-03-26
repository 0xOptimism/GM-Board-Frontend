import { useAccount, useConnect } from "wagmi";

import { Text, Button } from "@chakra-ui/react";

export function ConnectButton({ connectData, address, connect }) {
  if (address) {
    return <Text>{address}</Text>;
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
          {`Connect with ${connector.name}`}
          {console.log(connector.ready)}
          {!connector.ready && " (unsupported)"}
        </Button>
      ))}
    </>
  );
}
