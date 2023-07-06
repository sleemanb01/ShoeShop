import { Colors } from "../../style/colors";
import { TProduct } from "../../typing/types";
import {
  Pressable,
  Text,
  Button,
  Box,
  HStack,
  Center,
  VStack,
  Image,
} from "native-base";

export default function renderItems(product: TProduct) {
  return (
    <Pressable>
      <Box ml={6} mb={3}>
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
              alt={product.name + " image"}
              w="full"
              h={24}
              resizeMode="contain"
            />
          </Center>
          <VStack w="60%" px={2} space={3}>
            <Text isTruncated color={Colors.black} bold fontSize={10}>
              {product.name}
            </Text>
            <Text color={Colors.lightBlack} bold>
              {product.price}$
            </Text>
          </VStack>
          <Center>
            <Button
              bg={Colors.main}
              _pressed={{ bg: Colors.main }}
              _text={{ color: Colors.white }}
            >
              5
            </Button>
          </Center>
        </HStack>
      </Box>
    </Pressable>
  );
}
