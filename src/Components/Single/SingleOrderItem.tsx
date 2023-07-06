import React from "react";
import {
  Box,
  Center,
  HStack,
  Pressable,
  Image,
  VStack,
  Text,
  Button,
} from "native-base";
import { TOrderItem, TProduct } from "../../typing/types";
import { Colors } from "../../style/colors";

export default function SingleOrderItem({
  orderItem,
}: {
  orderItem: TOrderItem;
}) {
  const product: TProduct = orderItem.product;

  return (
    <Pressable>
      <Box mb={3}>
        <HStack
          alignItems="center"
          bg={Colors.white}
          shadow={1}
          rounded={10}
          overflow="hidden"
        >
          <Center w="25%" bg={Colors.deepGray}>
            <Image
              source={{ uri: product.image }}
              alt={product.name}
              w="full"
              h={24}
              resizeMode="contain"
            />
          </Center>
          <VStack w="60%" px={2}>
            <Text isTruncated color={Colors.black} bold fontSize={12}>
              {product.name}
            </Text>
            <Text color={Colors.lightBlack} mt={2} bold>
              {product.price}$
            </Text>
          </VStack>
          <Center>
            <Button
              bg={Colors.main}
              _pressed={{ bg: Colors.main }}
              _text={{ color: Colors.white }}
            >
              {orderItem.quantity}
            </Button>
          </Center>
        </HStack>
      </Box>
    </Pressable>
  );
}
