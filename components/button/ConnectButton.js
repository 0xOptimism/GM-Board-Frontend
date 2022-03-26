import { useAccount, useConnect } from "wagmi";

import { Text, Button } from "@chakra-ui/react";

export function ConnectButton() {
  const [{ data: connectData, error: connectError }, connect] = useConnect();
  const [{ data: accountData }, disconnect] = useAccount({
    fetchEns: true,
  });

  if (accountData?.address) {
    return <Text>{accountData.address}</Text>;
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
