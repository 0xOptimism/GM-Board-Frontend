import { useContract, useProvider, useAccount, useConnect } from "wagmi";
import { Text, Flex, Container } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { abi } from "../../utils/abi.json";

export function Card() {
  const [gm, setGm] = useState([]);
  const [loading, setLoading] = useState(true);
  const provider = useProvider();
  const contract = useContract({
    addressOrName: "0x0a45C7D2C633cfBdc95B10dE8Dd7c3716Ac89219",
    contractInterface: abi,
    signerOrProvider: provider,
  });

  const getWaves = async () => {
    const getWaves = await contract.getAllWaves();
    setGm(getWaves);
    setLoading(false);
  };

  useEffect(() => {
    getWaves();
  }, []);

  if (loading) {
    return null;
  }

  return (
    <Flex
      flexBasis={"auto"}
      flexDir={"column"}
      flexShrink={0}
      boxSizing={"border-box"}
      border={"0.5px solid rgb(47, 51, 54)"}
      w={"100%"}
      m={10}
      p={5}
      position={"relative"}
    >
      {gm.map((data, index) => (
        <Container key={index}>
          <Text>Address: {data.waver}</Text>
          <Text>Message: {data.message}</Text>
          <Text>Time: 2pm gmt</Text>
        </Container>
      ))}
    </Flex>
  );
}
