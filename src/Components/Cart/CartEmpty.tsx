import React from "react";
import { Box, Center, Text } from "native-base";
import { Colors } from "../../style/colors";
import { FontAwesome } from "@expo/vector-icons";
import CButton from "../CButton";

export default function CartEmpty() {
  const startHandler = () => {};

  return (
    <Box flex={1} px={4}>
      <Center w={200} h={200} color={Colors.white} rounded="full">
        <FontAwesome name="shopping-basket" size={64} color={Colors.main} />
        <Text color={Colors.main} bold mt={5}>
          CART IS EMPTY
        </Text>
      </Center>
      <CButton bg={Colors.black} color={Colors.white} onPress={startHandler}>
        START SHOPPING
      </CButton>
    </Box>
  );
}
