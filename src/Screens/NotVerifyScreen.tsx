import React from "react";
import { Colors } from "../style/colors";
import { Box, Center, Image, VStack } from "native-base";
import CButton from "../Components/CButton";

export default function NotVerifyScreen() {
  const registerHandler = () => {};
  const loginHandler = () => {};

  return (
    <Box flex={1} bg={Colors.main} safeAreaTop>
      <Center w="full" h={250}>
        <Image
          source={require("../../assets/black-logo.png")}
          alt="Logo"
          size="lg"
        />
        <VStack space={6} px={5} alignItems="center">
          <CButton
            bg={Colors.black}
            color={Colors.white}
            onPress={registerHandler}
          >
            REGISTER
          </CButton>
          <CButton
            bg={Colors.white}
            color={Colors.black}
            onPress={loginHandler}
          >
            LOGIN
          </CButton>
        </VStack>
      </Center>
    </Box>
  );
}
