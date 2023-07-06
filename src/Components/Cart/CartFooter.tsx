import CButton from "../CButton";
import { Colors } from "../../style/colors";
import { Box, Center, HStack, Text, Button } from "native-base";

export default function CartFooter() {
  const checkoutHandler = () => {};

  return (
    <Box>
      <Center mt={5}>
        <HStack
          rounded={50}
          justifyContent="space-between"
          bg={Colors.white}
          shadow={2}
          w="90%"
          pl={5}
          h={45}
          alignItems="center"
        >
          <Text>Total</Text>
          <Button
            px={10}
            h={45}
            rounded={50}
            bg={Colors.main}
            _text={{ color: Colors.white, fontWeight: "semibold" }}
            _pressed={{ bg: Colors.main }}
          >
            356$
          </Button>
        </HStack>
      </Center>
      <Center px={5}>
        <CButton
          bg={Colors.black}
          color={Colors.white}
          mt={20}
          onPress={checkoutHandler}
        >
          CheckOut
        </CButton>
      </Center>
    </Box>
  );
}
