import { useContract, useProvider } from "wagmi";
import { Container, Text, Flex, chakra } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import useWeb3Store from "../../store/web3Store";
import { abi } from "../../utils/abi.json";
import { dateOptions, formatConnectedWallet } from "../../utils/utils";
import { CONTRACT_ADDRESS } from "../../constants";

export function Card() {
  const { messages, setMessages } = useWeb3Store();
  const [gmSent, setGmSent] = useState(null);
  const [loading, setLoading] = useState(true);
  const provider = useProvider();

  const contract = useContract({
    addressOrName: CONTRACT_ADDRESS,
    contractInterface: abi,
    signerOrProvider: provider,
  });

  useEffect(() => {
    const getWaves = async () => {
      const getTotalGmSent = await contract.getTotalWaves();
      setGmSent(getTotalGmSent);
      const getWaves = await contract.getAllWaves();
      setMessages(getWaves);
      setLoading(false);
    };
    getWaves();
  }, []);

  if (loading) {
    return null;
  }
  return (
    <Container height={"700px"} maxW={"full"} overflow={"scroll"} mt={10}>
      <Text>Total GMs sent: {gmSent.toNumber()} </Text>
      {messages.map((data, index) => (
        <Flex
          flexBasis={"auto"}
          flexDir={"column"}
          flexShrink={0}
          boxSizing={"border-box"}
          border={"0.5px solid rgb(47, 51, 54)"}
          w={"100%"}
          m={3}
          p={5}
          position={"relative"}
          key={index}
        >
          <Text>
            <chakra.span fontWeight={400} color={"brand.orange"}>
              Address:
            </chakra.span>{" "}
            {formatConnectedWallet(data?.waver, 30)}
          </Text>
          <Text>
            <chakra.span fontWeight={400} color={"brand.orange"}>
              Message:{" "}
            </chakra.span>
            {data?.message}
          </Text>
          <Text>
            <chakra.span fontWeight={400} color={"brand.orange"}>
              Time:{" "}
            </chakra.span>
            {new Date(data.timestamp * 1000).toLocaleString(
              "en-US",
              dateOptions
            )}
          </Text>
        </Flex>
      ))}
    </Container>
  );
}
