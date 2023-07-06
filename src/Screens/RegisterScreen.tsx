import React from "react";
import {
  Box,
  Heading,
  Image,
  VStack,
  Input,
  Button,
  Pressable,
  Text,
} from "native-base";
import { Colors } from "../style/colors";
import { RootStackParamList } from "../typing/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MaterialIcons, FontAwesome, Ionicons } from "@expo/vector-icons";

type Props = NativeStackScreenProps<RootStackParamList, "Register">;

export default function RegisterScreen({ navigation }: Props) {
  const submitHandler = () => {
    navigation.navigate("Home");
  };
  const loginHandler = () => {
    navigation.navigate("Login");
  };

  return (
    <Box flex={1} bg={Colors.black}>
      <Image
        flex={1}
        alt="logo"
        resizeMode="cover"
        size="lg"
        w="full"
        source={require("../../assets/cover.png")}
      />
      <Box
        w="full"
        h="full"
        position="absolute"
        top="0"
        px="6"
        justifyContent="center"
        bg={Colors.deepestGray}
      >
        <Heading>SIGNUP</Heading>
        <VStack pt="5">
          <FontAwesome name="user" size={24} color={Colors.main} />
          <Input
            variant="underlined"
            placeholder="Name"
            w="70%"
            type="text"
            pl={2}
            color={Colors.main}
            borderBottomColor={Colors.underline}
          />
          <MaterialIcons name="email" size={24} color={Colors.main} />
          <Input
            variant="underlined"
            placeholder="user@gmail.com"
            w="70%"
            pl={2}
            type="text"
            color={Colors.main}
            borderBottomColor={Colors.underline}
          />
          <Ionicons name="eye" size={24} color={Colors.main} />
          <Input
            variant="underlined"
            placeholder="********"
            w="70%"
            pl={2}
            type="password"
            color={Colors.main}
            borderBottomColor={Colors.underline}
          />
        </VStack>
        <Button
          _pressed={{ bg: Colors.main }}
          my={30}
          w="40%"
          rounded={50}
          bg={Colors.main}
          _text={{ color: Colors.white }}
          onPress={submitHandler}
        >
          SIGNUP
        </Button>
        <Pressable mt={4} onPress={loginHandler}>
          <Text color={Colors.gray}>LOGIN</Text>
        </Pressable>
      </Box>
    </Box>
  );
}
