import React from "react";
import { Colors } from "../style/colors";
import CButton from "../Components/CButton";
import { paymentMethods } from "../typing/enum";
import { Box, Center, ScrollView, Text, VStack } from "native-base";
import SinglePaymentMethod from "../Components/Single/SinglePAymentMethod";

export default function PaymentScreen() {
  const [selected, setSelected] = React.useState(0);

  const submitHandler = () => {};

  const selectHandler = (index: number) => {
    setSelected(index);
  };

  return (
    <Box flex={1} safeAreaTop bg={Colors.main} py={5}>
      <Center pb={15}>
        <Text color={Colors.white} fontSize={14} bold>
          PAYMENT METHOD
        </Text>
      </Center>
      <Box h="full" bg={Colors.subGreen} p={5}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={6} my={5}>
            {paymentMethods.map((p, i) => (
              <SinglePaymentMethod
                paymentMethod={p}
                index={i}
                selectHandler={selectHandler}
                selected={i === selected}
              />
            ))}
            <CButton
              bg={Colors.main}
              color={Colors.white}
              onPress={submitHandler}
            >
              CONTINUE
            </CButton>
            <Text italic textAlign="center">
              Payment method is
              <Text bold> Paypal </Text>
              by default
            </Text>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
}
