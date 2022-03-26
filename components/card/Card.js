import { useContract, useProvider, useAccount } from "wagmi";
import { Text, Flex } from "@chakra-ui/react";
import { abi } from "../../utils/abi.json";
import { useEffect, useState } from "react";

export function Card({ message, address }) {
  return (
    <Flex
      flexBasis={"auto"}
      flexDir={"column"}
      flexShrink={0}
      boxSizing={"border-box"}
      border={"0.5px solid rgb(47, 51, 54)"}
      w={"100%"}
      m={0}
      p={5}
      position={"relative"}
    >
      <Text>Address: {address}</Text>
      <Text>Message: {message}</Text>
      <Text>Time: 2pm gmt</Text>
    </Flex>
  );
}
