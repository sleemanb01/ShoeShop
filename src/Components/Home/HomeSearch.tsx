import React from "react";
import { Colors } from "../../style/colors";
import { FontAwesome5 } from "@expo/vector-icons";
import { Pressable, HStack, Input, Box } from "native-base";
import { useNavigation } from "@react-navigation/native";

export default function HomeSearch() {
  const navigation = useNavigation();

  const cartPressHandler = () => {
    navigation.navigate("Cart");
  };

  return (
    <HStack
      space={3}
      w="full"
      px={6}
      bg={Colors.main}
      py={4}
      alignItems="center"
      safeAreaTop
    >
      <Input
        placeholder="Nike, Puma, Addidas ..."
        variant="filled"
        w="85%"
        _focus={{
          bg: Colors.white,
        }}
        bg={Colors.white}
        type="text"
        h={12}
        borderWidth={0}
      />
      <Pressable ml={3} onPress={cartPressHandler}>
        <FontAwesome5 name="shopping-basket" size={24} color={Colors.white} />
        <Box
          px={1}
          rounded="100%"
          position="absolute"
          top={-13}
          left={2}
          bg={Colors.red}
          _text={{ color: Colors.white, fontSize: "11px" }}
        >
          5
        </Box>
      </Pressable>
    </HStack>
  );
}
