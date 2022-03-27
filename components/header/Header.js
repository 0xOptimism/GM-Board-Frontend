import { ConnectButton } from "../button/ConnectButton";
import { Heading, Container, chakra, Flex, Text } from "@chakra-ui/react";

export function Header({ connectData, connect, address }) {
  return (
    <Container mt={10}>
      <Flex justify={"center"} align={"center"} flexDirection={"column"}>
        <Heading mb={2} textAlign={"center"}>
          <chakra.span color={"brand.orange"}>GM</chakra.span> Board
        </Heading>
        <Text
          fontSize={"18px"}
          fontWeight={400}
          mb={5}
          textAlign={"center"}
          size="md"
          color={"#a1a1a1"}
        >
          GM at me and get a chance to win ETH
        </Text>
        <ConnectButton
          connectData={connectData}
          address={address}
          connect={connect}
        />
      </Flex>
    </Container>
  );
}
