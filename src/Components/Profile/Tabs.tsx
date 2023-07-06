import React from "react";
import Orders from "./Orders";
import Profile from "./Profile";
import { useWindowDimensions } from "react-native";
import { SceneMap, TabView } from "react-native-tab-view";
import { TUser } from "../../typing/types";

type Props = { user: TUser };

export default function Tabs({ user }: Props) {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "PROFILE" },
    { key: "second", title: "ORDERS" },
  ]);

  const renderScene = SceneMap({
    first: () => <Profile user={user} />,
    second: () => <Orders />,
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}
