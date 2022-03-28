import { useContract, useSigner } from "wagmi";
import { Button, Flex } from "@chakra-ui/react";
import { abi } from "../../utils/abi.json";
import { CONTRACT_ADDRESS } from "../../constants";

export function SendGm() {
  const [{ data: signerData }] = useSigner();

  const contract = useContract({
    addressOrName: CONTRACT_ADDRESS,
    contractInterface: abi,
    signerOrProvider: signerData,
  });

  const sendGm = async () => {
    const tx = await contract.wave("Gm!", { gasLimit: 300000 });
    console.log(tx.hash);
  };

  return (
    <Flex justify={"center"} align={"center"} flexDirection={"column"}>
      <Button
        maxW={"30%"}
        colorScheme="brand"
        variant="outline"
        size="md"
        mt={5}
        onClick={() => sendGm("This is a new message")}
      >
        Send a GM
      </Button>
    </Flex>
  );
}
