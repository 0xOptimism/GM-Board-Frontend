import { ConnectButton } from "../button/ConnectButton";
import { Heading, Container, chakra, Flex } from "@chakra-ui/react";

export function Header({ connectData, connect, address }) {
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
          address={address}
          connect={connect}
        />
      </Flex>
    </Container>
  );
}
