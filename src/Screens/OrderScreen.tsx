import React from "react";
import { getDate } from "../util/time";
import { Colors } from "../style/colors";
import { Center, Text, Box, HStack } from "native-base";
import PlaceOrderScreen from "./PlaceOrderScreen";
import { populatedOrder } from "../../assets/data/orders";
import { ORDER_STATUS } from "../typing/enum";

export default function OrderScreen() {
  const po = populatedOrder;

  function Success({ date }: { date: string }) {
    return (
      <Center p={5} mt={2} rounded={5} bg={Colors.blue}>
        <Text fontSize={13} color={Colors.black}>
          {`Paid on ${date}`}
        </Text>
      </Center>
    );
  }

  function Danger({ status }: { status: String }) {
    return (
      <Center
        p={5}
        mt={2}
        rounded={5}
        bg={
          status === ORDER_STATUS[ORDER_STATUS.DELIVERED]
            ? Colors.main
            : Colors.red
        }
      >
        <Text fontSize={13} color={Colors.white}>
          {status}
        </Text>
      </Center>
    );
  }

  return (
    <Box flex={1} safeAreaTop bg={Colors.subGreen} p={6}>
      <HStack justifyContent="space-between">
        <Success date={getDate(po.dateOrdered)} />
        <Danger status={ORDER_STATUS[populatedOrder.status]} />
      </HStack>
      <PlaceOrderScreen />
    </Box>
  );
}
