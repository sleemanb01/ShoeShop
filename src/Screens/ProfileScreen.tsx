import React from "react";
import { Colors } from "../style/colors";
import Tabs from "../Components/Profile/Tabs";
import { USER1 } from "../../assets/data/users";
import { Text, Image, Center, Heading } from "native-base";

export default function ProfileScreen() {
  let user = USER1;
  return (
    <React.Fragment>
      <Center bg={Colors.main} pt={10} pb={6}>
        <Image
          source={{ uri: user.image }}
          fallbackSource={{
            uri: "https://res.cloudinary.com/zpune/image/upload/v1645429478/random/user_u3itjd.png",
          }}
          alt="profile"
          rounded="full"
          w={24}
          h={24}
          resizeMode="cover"
        />
        <Heading bold fontSize={15} isTruncated my={2} color={Colors.white}>
          {user.name}
        </Heading>
        <Text italic fontSize={10} color={Colors.white}>
          {user.email}
        </Text>
      </Center>
      <Tabs user={user} />
    </React.Fragment>
  );
}
