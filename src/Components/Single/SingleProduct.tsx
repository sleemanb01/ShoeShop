import React from "react";
import Rating from "../Rating";
import { Colors } from "../../style/colors";
import { TProduct } from "../../typing/types";
import { useNavigation } from "@react-navigation/native";
import { Box, Heading, Image, Pressable, Text } from "native-base";

type Props = { product: TProduct };

export default function SingleProduct({ product }: Props) {
  const navigation = useNavigation();

  const pressHandler = () => {
    navigation.navigate("SingleProductScreen", { product: product });
  };

  return (
    <Pressable
      onPress={pressHandler}
      w="47 %"
      bg={Colors.white}
      rounded="md"
      shadow={2}
      pt={0.3}
      my={3}
      pb={2}
      overflow="hidden"
    >
      <Image
        source={{ uri: product.image }}
        alt={product.name}
        w="full"
        h={24}
        resizeMode="contain"
      />
      <Box px={4} pt={1}>
        <Heading size="sm" bold>
          {product.price}$
        </Heading>
        <Text fontSize={10} mt={1} isTruncated w="full">
          {product.name}
        </Text>
        <Rating value={product.rating} />
      </Box>
    </Pressable>
  );
}
