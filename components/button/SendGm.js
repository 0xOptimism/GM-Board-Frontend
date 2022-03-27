import { useContract, useSigner } from "wagmi";
import { Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { abi } from "../../utils/abi.json";

export function SendGm() {
  const [{ data: signerData }] = useSigner();

  const contract = useContract({
    addressOrName: "0x0a45C7D2C633cfBdc95B10dE8Dd7c3716Ac89219",
    contractInterface: abi,
    signerOrProvider: signerData,
  });

  const sendGm = async () => {
    await contract.wave("Hey, i hope to win!");
  };

  return (
    <Button
      maxW={"30%"}
      colorScheme="brand"
      variant="outline"
      size="sm"
      onClick={() => sendGm("This is a new message")}
    >
      Send a GM
    </Button>
  );
}
