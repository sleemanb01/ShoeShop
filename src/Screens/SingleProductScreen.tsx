import React from "react";
import {
  ScrollView,
  Box,
  Image,
  Heading,
  HStack,
  Spacer,
  Text,
} from "native-base";
import { Colors } from "../style/colors";
import Rating from "../Components/Rating";
import Review from "../Components/Review";
import CButton from "../Components/CButton";
import { reviews } from "../../assets/data/reviews";
import { RootStackParamList } from "../typing/types";
import NumericInput from "react-native-numeric-input";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

// type Props = { product: TProduct };
type Props = NativeStackScreenProps<RootStackParamList, "SignleProductScreen">;

export default function SingleProductScreen({ route, navigation }: Props) {
  const product = route.params?.product;

  const [value, setValue] = React.useState(0);

  const quantityChangeHandler = (value: number) => {
    setValue(value);
  };
  const addHandler = () => {};

  return (
    <Box safeArea flex={1} bg={Colors.white}>
      <ScrollView px={5} showsVerticalScrollIndicator={false}>
        <Image
          source={{ uri: product.image }}
          alt="Image"
          w="full"
          h={300}
          resizeMode="contain"
        />
        <Heading bold fontSize={15} mb={2} lineHeight={22}>
          {product.name}
        </Heading>
        <Rating value={product.rating} />
        <HStack space={2} alignItems="center" my={5}>
          <NumericInput
            value={value}
            totalWidth={140}
            totalHeight={30}
            iconSize={25}
            minValue={0}
            step={1}
            borderColor={Colors.deepGray}
            rounded
            textColor={Colors.black}
            iconStyle={{ backgroundColor: Colors.white }}
            rightButtonBackgroundColor={Colors.main}
            maxValue={product.countInStock}
            onChange={quantityChangeHandler}
          />
          <Spacer />
          <Heading bold color={Colors.black} fontSize={19}>
            {product.price}$
          </Heading>
        </HStack>
        <Text lineHeight={24} fontSize={12}>
          {product.description}
        </Text>
        <CButton
          bg={Colors.main}
          color={Colors.white}
          mt={10}
          onPress={addHandler}
        >
          ADD TO CART
        </CButton>
        <Review reviews={reviews} />
      </ScrollView>
    </Box>
  );
}
