import React from "react";
import { Box } from "native-base";
import { Colors } from "../style/colors";
import { products } from "../../assets/data/products";
import CartFooter from "../Components/Cart/CartFooter";
import CartHeader from "../Components/Cart/CartHeader";
import renderItems from "../Components/Cart/RenderItems";
import { SwipeListView } from "react-native-swipe-list-view";
import renderHiddenItems from "../Components/Cart/RenderHiddenItems";

export default function CartScreen() {
  return (
    <Box flex={1} safeAreaTop bg={Colors.subGreen} pr={6} pb={6}>
      <SwipeListView
        ListHeaderComponent={CartHeader}
        ListFooterComponent={CartFooter}
        rightOpenValue={-50}
        previewRowKey="0"
        previewOpenValue={-40}
        previewOpenDelay={3000}
        data={products}
        renderHiddenItem={renderHiddenItems}
        renderItem={({ item }) => renderItems(item)}
        showsVerticalScrollIndicator={false}
      />
    </Box>
  );
}
