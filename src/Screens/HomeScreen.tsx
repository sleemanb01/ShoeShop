import React from "react";
import { Box } from "native-base";
import { Colors } from "../style/colors";
import HomeProducts from "../Components/Home/HomeProducts";
import HomeSearch from "../Components/Home/HomeSearch";

export default function HomeScreen() {
  return (
    <Box flex={1} bg={Colors.subGreen}>
      <HomeSearch />
      <HomeProducts />
    </Box>
  );
}
