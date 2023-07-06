import React from "react";
import { Colors } from "../style/colors";
import { TOrder } from "../typing/types";
import OrderInfo from "../Components/Order/OrderInfo";
import { Box, Heading, ScrollView } from "native-base";
import OrderItems from "../Components/Order/OrderItems";
import { populatedOrder } from "../../assets/data/orders";
import PlaceOrderModal from "../Components/Order/PlaceOrderModal";

export default function PlaceOrderScreen() {
  const populatedOrders: Array<TOrder> = [populatedOrder];
  return (
    <Box flex={1} safeAreaTop bg={Colors.subGreen} pt={6}>
      <Box>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <OrderInfo populatedOrder={populatedOrders[0]} />
        </ScrollView>
      </Box>
      <Box px={6} flex={1} pb={3}>
        <Heading bold fontSize={15} isTruncated my={4}>
          PRODUCTS
        </Heading>
        <OrderItems orderItems={populatedOrders[0].orderItems} />
        <PlaceOrderModal populatedOrder={populatedOrders[0]} />
      </Box>
    </Box>
  );
}
