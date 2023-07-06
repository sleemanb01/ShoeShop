import React from "react";
import { ScrollView, Flex } from "native-base";
import { products } from "../../../assets/data/products";
import SingleProduct from "../Single/SingleProduct";

export default function HomeProducts() {
  return (
    <ScrollView flex={1} showsHorizontalScrollIndicator={false}>
      <Flex
        flexWrap="wrap"
        direction="row"
        justifyContent="space-between"
        px={6}
      >
        {products.map((p) => (
          <SingleProduct key={p._id} product={p} />
        ))}
      </Flex>
    </ScrollView>
  );
}
