import React from "react";
import NoContent from "../NoContent";
import { Pressable } from "react-native";
import { getDate } from "../../util/time";
import { orders } from "../../../assets/data/orders";
import { Colors } from "../../style/colors";
import { TOrder } from "../../typing/types";
import { ORDER_STATUS } from "../../typing/enum";
import { Box, Button, HStack, ScrollView, Text } from "native-base";

export default function Orders() {
  function PaidOrder(order: TOrder) {
    return (
      <Pressable key={order._id}>
        <HStack
          space={4}
          justifyContent="space-between"
          alignItems="center"
          bg={Colors.deepGray}
          py={5}
          px={2}
        >
          <Text fontSize={8} color={Colors.blue} isTruncated>
            {order._id}
          </Text>
          <Text fontSize={11} bold color={Colors.black} isTruncated>
            {ORDER_STATUS[order.status]}
          </Text>
          <Text fontSize={10} italic color={Colors.black} isTruncated>
            {getDate(order.dateOrdered)}
          </Text>
          <Button
            px={7}
            py={1.5}
            rounded={50}
            bg={Colors.main}
            _text={{
              color: Colors.white,
            }}
            _pressed={{
              bg: Colors.main,
            }}
          >
            {order.totalPrice + "$"}
          </Button>
        </HStack>
      </Pressable>
    );
  }

  function NotPaidOrder(order: TOrder) {
    return (
      <Pressable key={order._id}>
        <HStack
          space={4}
          justifyContent="space-between"
          alignItems="center"
          py={5}
          px={2}
        >
          <Text fontSize={8} color={Colors.blue} isTruncated>
            {order._id}
          </Text>
          <Text fontSize={11} bold color={Colors.black} isTruncated>
            {ORDER_STATUS[order.status]}
          </Text>
          <Text fontSize={10} italic color={Colors.black} isTruncated>
            {getDate(order.dateOrdered)}
          </Text>
          <Button
            px={7}
            py={1.5}
            rounded={50}
            bg={Colors.red}
            _text={{
              color: Colors.white,
            }}
            _pressed={{
              bg: Colors.red,
            }}
          >
            {order.totalPrice + "$"}
          </Button>
        </HStack>
      </Pressable>
    );
  }

  if (orders.length === 0) {
    return <NoContent />;
  }

  return (
    <Box h="full" bg={Colors.white} pt={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {orders.map((o) =>
          o.status === ORDER_STATUS.PENDING ? NotPaidOrder(o) : PaidOrder(o)
        )}
      </ScrollView>
    </Box>
  );
}
