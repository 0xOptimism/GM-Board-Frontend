import { useContract, useSigner } from "wagmi";
import { Button, Flex } from "@chakra-ui/react";
import { abi } from "../../utils/abi.json";
import useWeb3Store from "../../store/web3Store";
import { CONTRACT_ADDRESS } from "../../constants";
import { utils } from "ethers";

const options = {
  value: utils.parseUnits("0.1"),
  gasLimit: 300000,
};

export function SendGm() {
  const [{ data: signerData }] = useSigner();
  const { setMessages, setTotalGms } = useWeb3Store();

  const contract = useContract({
    addressOrName: CONTRACT_ADDRESS,
    contractInterface: abi,
    signerOrProvider: signerData,
  });

  const getAllgems = async () => {
    const getTotalGmSent = await contract.getTotalWaves();
    await setTotalGms(getTotalGmSent.toNumber());
  };

  const sendGm = async () => {
    const wave = await contract.wave("Good morning!", options);
    await wave.wait();
    const contracts = await contract.getAllWaves();
    await setMessages(contracts);
    await getAllgems();
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
