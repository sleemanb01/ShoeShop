import { Box, FormControl, Input, ScrollView, VStack } from "native-base";
import React from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { TInput, TUser, voidFunc } from "../typing/types";
import CButton from "./CButton";

type Props = { inputs: Array<TInput>; user: TUser; submitHandler: voidFunc };

export default function Inputs({ inputs, user, submitHandler }: Props) {
  const getRelevantData = (label: string) => {
    if (label === "USERNAME") {
      return user.name;
    }
    if (label === "EMAIL") {
      return user.email;
    }
    if (label.includes("PASSWORD")) {
      return "********";
    }
    if (label === "STREET") {
      return user.street;
    }
    if (label === "APARTMENT") {
      return user.apartment;
    }
    if (label === "CITY") {
      return user.city;
    }
    if (label === "ZIP") {
      return user.zip;
    }
    if (label === "COUNTRY") {
      return user.country;
    }
    if (label === "PHONE") {
      return user.phone;
    }
  };

  function SingleInput({ label, type }: TInput) {
    return (
      <React.Fragment key={label + "input"}>
        <FormControl.Label _text={{ fontSize: "12px", fontWeight: "bold" }}>
          {label}
        </FormControl.Label>
        <Input
          type={type}
          borderWidth={0}
          bg={Colors.subGreen}
          py={4}
          color={Colors.main}
          fontSize={20}
          placeholder={getRelevantData(label)}
          _focus={{
            bg: Colors.subGreen,
            borderColor: Colors.main,
            borderWidth: 1,
          }}
        />
      </React.Fragment>
    );
  }

  return (
    <Box h="full" bg={Colors.white} px={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space={6} mt={5} pb={10}>
          {inputs.map((i) => SingleInput(i))}
          <CButton
            bg={Colors.main}
            color={Colors.white}
            onPress={submitHandler}
          >
            UPDATE
          </CButton>
        </VStack>
      </ScrollView>
    </Box>
  );
}
