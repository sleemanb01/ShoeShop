import React from "react";
import { Box, ScrollView, VStack } from "native-base";
import { Colors } from "../../style/colors";
import CButton from "../CButton";
import { TInput, TUser } from "../../typing/types";
import SingleInput from "../Inputs";
import Inputs from "../Inputs";

type Props = { user: TUser };

export default function Profile({ user }: Props) {
  const inputs: Array<TInput> = [
    {
      label: "USERNAME",
      type: "text",
    },
    {
      label: "EMAIL",
      type: "text",
    },
    {
      label: "PASSWORD",
      type: "password",
    },
    {
      label: "CONFIRN PASSWORD",
      type: "password",
    },
  ];

  const submitHandler = () => {};

  return <Inputs inputs={inputs} submitHandler={submitHandler} user={user} />;
}
