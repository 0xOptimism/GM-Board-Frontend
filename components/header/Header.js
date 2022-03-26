import { ConnectButton } from "../button/ConnectButton";
import { useAccount, useConnect } from "wagmi";
import { Heading, Container, chakra, Button, Flex } from "@chakra-ui/react";

export function Header() {
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
        <ConnectButton />
      </Flex>
    </Container>
  );
}
