import { ConnectButton } from "../button/ConnectButton";
import { Card } from "../card/Card";
import { SendGm } from "../button/SendGm";
import { Heading, Container, chakra, Flex } from "@chakra-ui/react";
import { useAccount, useConnect } from "wagmi";

export function Header() {
  const [{ data: accountData }, disconnect] = useAccount({
    fetchEns: true,
  });
  const [{ data: connectData, error: connectError }, connect] = useConnect();

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
        {connectData.connected ? <SendGm /> : null}
        {connectData.connected ? <Card /> : null}
      </Flex>
    </Container>
  );
}
