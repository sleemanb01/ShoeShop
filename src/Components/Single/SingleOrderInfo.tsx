import React from "react";
import { Colors } from "../../style/colors";
import { Center, Heading, Text } from "native-base";

type Props = {
  icon: React.ReactNode;
  title: string;
  subTitle: string;
  text: string;
};

export default function SingleOrderInfo({
  icon,
  title,
  subTitle,
  text,
}: Props) {
  return (
    <Center
      key={title + "orderInfo"}
      bg={Colors.white}
      w={200}
      py={2}
      rounded={10}
      shadow={4}
      mb={2}
      ml={5}
      mr={1}
      px={4}
    >
      <Center bg={Colors.main} w={60} h={60} rounded="full">
        {icon}
      </Center>
      <Heading
        bold
        fontSize={12}
        isTruncated
        mt={3}
        mb={2}
        color={Colors.black}
      >
        {title}
      </Heading>
      <Text fontSize={13} color={Colors.black}>
        {subTitle}
      </Text>
      <Text fontSize={13} textAlign="center" italic color={Colors.black}>
        {text}
      </Text>
    </Center>
  );
}
