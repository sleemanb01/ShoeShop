import { Center, Text } from "native-base";
import { Colors } from "../../style/colors";

export default function CartHeader() {
  return (
    <Center w="full" py={5}>
      <Text color={Colors.black} fontSize={20} bold>
        Cart
      </Text>
    </Center>
  );
}
