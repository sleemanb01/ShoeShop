import React from "react";
import { FlatList } from "native-base";
import { TOrderItem } from "../../typing/types";
import SingleOrderItem from "../Single/SingleOrderItem";

export default function OrderItems({
  orderItems,
}: {
  orderItems: Array<TOrderItem>;
}) {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={orderItems}
      keyExtractor={({ _id }) => _id}
      renderItem={({ item }) => <SingleOrderItem orderItem={item} />}
    />
  );
}
