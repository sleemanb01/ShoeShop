import { Colors } from "../../style/colors";
import { Center, Pressable } from "native-base";
import { FontAwesome } from "@expo/vector-icons";

export default function renderHiddenItems() {
  return (
    <Pressable
      w={50}
      roundedTopRight={20}
      roundedBottomRight={10}
      h="88%"
      ml="auto"
      justifyContent="center"
      bg={Colors.red}
    >
      <Center alignItems="center">
        <FontAwesome name="trash" size={24} color={Colors.white} />
      </Center>
    </Pressable>
  );
}
