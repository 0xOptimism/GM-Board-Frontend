import { Header } from "../components/header/Header";
import { Card } from "../components/card/Card";
import { SendGm } from "../components/button/SendGm";
import { Container, Flex } from "@chakra-ui/react";
import { useConnect, useAccount } from "wagmi";

export default function Home() {
  const [{ data: connectData }, connect] = useConnect();
  const [{ data: accountData }] = useAccount({
    fetchEns: true,
  });

  return (
    <Container>
      <Flex flexDirection={"column"} justify={"center"}>
        <Header
          connectData={connectData}
          connect={connect}
          address={accountData?.address}
        />
        {connectData.connected ? (
          <Container>
            <SendGm />
            <Card />
          </Container>
        ) : null}
      </Flex>
    </Container>
  );
}
