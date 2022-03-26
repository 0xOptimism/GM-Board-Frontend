import { ConnectButton } from "../button/ConnectButton";
import { Card } from "../card/Card";
import { Heading, Container, chakra, Flex } from "@chakra-ui/react";
import { abi } from "../../utils/abi.json";
import { useEffect, useState } from "react";
import { useContract, useProvider, useAccount, useConnect } from "wagmi";

export function Header() {
  const [gm, setGm] = useState([]);
  const [{ data: accountData }, disconnect] = useAccount({
    fetchEns: true,
  });
  const [{ data: connectData, error: connectError }, connect] = useConnect();

  const provider = useProvider();
  const contract = useContract({
    addressOrName: "0x0a45C7D2C633cfBdc95B10dE8Dd7c3716Ac89219",
    contractInterface: abi,
    signerOrProvider: provider,
  });

  const getWaves = async () => {
    if (accountData?.address) {
      const getWaves = await contract.getAllWaves();
      setGm(getWaves);
    }
  };

  useEffect(() => {
    getWaves();
  }, []);

  return (
    <Container mt={10}>
      <Flex justify={"center"} align={"center"} flexDirection={"column"}>
        <Heading mb={2} textAlign={"center"}>
          <chakra.span color={"#FB542B"}>GM</chakra.span> Board
        </Heading>
        <Heading
          mb={5}
          textAlign={"center"}
          Heading
          as="h6"
          size="md"
          color={"#e7e7e7"}
        >
          GM at me and get a chance to win ETH
        </Heading>
        <ConnectButton
          connectData={connectData}
          address={accountData?.address}
          connect={connect}
        />
        {gm.map((gm) => (
          <Card key={gm.message} message={gm.message} address={gm.waver} />
        ))}
      </Flex>
    </Container>
  );
}
