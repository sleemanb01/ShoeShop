import React from "react";
import { TInput } from "../typing/types";
import { Colors } from "../style/colors";
import Inputs from "../Components/Inputs";
import { Box, Text, Center } from "native-base";
import { USER1 } from "../../assets/data/users";

export default function ShippingScreen() {
  const user = USER1;
  const inputs: Array<TInput> = [
    { label: "STREET" },
    { label: "APARTMENT" },
    { label: "CITY" },
    { label: "ZIP" },
    { label: "COUNTRY" },
    { label: "PHONE" },
  ];

  const submitHandler = () => {};

  return (
    <Box flex={1} safeAreaTop bg={Colors.main} py={5}>
      <Center pb={15}>
        <Text color={Colors.white} fontSize={14} bold>
          DELEVERY ADDRESS
        </Text>
      </Center>
      <Inputs inputs={inputs} submitHandler={submitHandler} user={user} />
    </Box>
  );
}
