import React from "react";
import HomeScreen from "../Screens/HomeScreen";
import PaymentScreen from "../Screens/PaymentScreen";
import { RootStackParamList } from "../typing/types";
import ShippingScreen from "../Screens/ShippingScreen";
import PlaceOrderScreen from "../Screens/PlaceOrderScreen";
import SingleProductScreen from "../Screens/SingleProductScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../Screens/LoginScreen";
import CartScreen from "../Screens/CartScreen";
import SingleProduct from "../Components/Single/SingleProduct";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNav() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="SingleProductScreen"
        component={SingleProductScreen}
      />
      <Stack.Screen name="SingleProduct" component={SingleProduct} />
      <Stack.Screen name="Shipping" component={ShippingScreen} />
      <Stack.Screen name="Payment" component={PaymentScreen} />
      <Stack.Screen name="PlaceOrder" component={PlaceOrderScreen} />
    </Stack.Navigator>
  );
}
