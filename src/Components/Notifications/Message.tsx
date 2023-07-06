import React from "react";
import { View, Text, Center } from "native-base";

type Props = {
  bg: string;
  color: string;
  children: string;
  size?: number;
  bold?: string;
};

export default function Message({ bg, color, children, size }: Props) {
  return (
    <Center bg={bg} p={4} rounded={5}>
      <Text color={color} fontSize={size} bold>
        {children}
      </Text>
    </Center>
  );
}
