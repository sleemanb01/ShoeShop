import React from "react";
import { Colors } from "../style/colors";
import { GestureResponderEvent, StyleSheet } from "react-native";
import { Text, Center, Pressable } from "native-base";
import { voidFunc } from "../typing/types";
import HomeScreen from "../Screens/HomeScreen";
import {
  FontAwesome,
  FontAwesome5,
  Entypo,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "../Screens/ProfileScreen";
import CartScreen from "../Screens/CartScreen";
import StackNav from "./StackNav";

const Tab = createBottomTabNavigator();

const CustomTab = ({
  children,
  onPress,
}: {
  children: React.ReactNode;
  onPress?: (e: GestureResponderEvent) => void;
}) => (
  <Pressable
    onPress={onPress}
    h={70}
    w={70}
    _pressed={{ bg: Colors.black }}
    rounded="full"
    bg={Colors.main}
    top={-30}
    shadow={2}
  >
    {children}
  </Pressable>
);

export default function BottomNav() {
  return (
    <Tab.Navigator
      backBehavior="initialRoute"
      initialRouteName="Main"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: { ...styles.tabs },
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name="Main"
        component={StackNav}
        options={{
          tabBarIcon: ({ focused }) => (
            <Center>
              {focused ? (
                <Entypo name="home" size={24} color={Colors.main} />
              ) : (
                <AntDesign name="home" size={24} color={Colors.black} />
              )}
            </Center>
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarButton: (props) => <CustomTab {...props} />,
          tabBarIcon: ({ focused }) => (
            <Center>
              {focused ? (
                <FontAwesome5
                  name="shopping-basket"
                  size={24}
                  color={Colors.white}
                />
              ) : (
                <MaterialCommunityIcons
                  name="shopping-outline"
                  size={24}
                  color={Colors.black}
                />
              )}
            </Center>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Center>
              {focused ? (
                <FontAwesome name="user" size={24} color={Colors.main} />
              ) : (
                <AntDesign name="user" size={24} color={Colors.black} />
              )}
            </Center>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabs: {
    elevation: 0,
    backgroundColor: Colors.white,
    height: 60,
  },
});
