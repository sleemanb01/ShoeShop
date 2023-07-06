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
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

export default function LoginScreen({ navigation }: Props) {
  const submitHandler = () => {
    navigation.navigate("Home");
  };
  const registerHandler = () => {
    navigation.navigate("Register");
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
        <Heading>LOGIN</Heading>
        <VStack pt="5">
          <MaterialIcons name="email" size={24} color={Colors.main} />
          <Input
            variant="underlined"
            placeholder="user@gmail.com"
            w="70%"
            pl={2}
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
          LOGIN
        </Button>
        <Pressable mt={4} onPress={registerHandler}>
          <Text color={Colors.gray}>Sign Up</Text>
        </Pressable>
      </Box>
    </Box>
  );
}
