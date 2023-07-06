import React from "react";
import { Colors } from "../../style/colors";
import { Pressable } from "react-native";
import { TPaymentMethod } from "../../typing/types";
import { HStack, Box, Spacer, Image } from "native-base";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

type Props = {
  paymentMethod: TPaymentMethod;
  index: number;
  selectHandler: (index: number) => void;
  selected: boolean;
};

export default function SinglePaymentMethod({
  paymentMethod,
  index,
  selectHandler,
  selected,
}: Props) {
  return (
    <Pressable
      onPress={() => selectHandler(index)}
      key={paymentMethod.alt + "tab"}
    >
      <HStack
        alignItems="center"
        bg={Colors.white}
        px={3}
        py={1}
        rounded={10}
        justifyContent="space-between"
      >
        <Box>
          <Image
            source={paymentMethod.image}
            alt={paymentMethod.alt}
            resizeMode="contain"
            w={60}
            h={50}
          />
          <Spacer />
        </Box>
        {selected ? (
          <Ionicons name="checkmark-circle" size={30} color={Colors.main} />
        ) : (
          <FontAwesome name="circle-thin" size={30} color={Colors.main} />
        )}
      </HStack>
    </Pressable>
  );
}
