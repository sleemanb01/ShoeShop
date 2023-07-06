import { HStack } from "native-base";
import { Colors } from "../style/colors";
import { FontAwesome } from "@expo/vector-icons";

type Props = { value: number };

export default function Rating({ value }: Props) {
  const size = 12;
  const color = Colors.orange;
  return (
    <HStack space={0.4} mt={1} alignItems="center">
      <FontAwesome
        name={value >= 1 ? "star" : value >= 0.5 ? "star-half-o" : "star-o"}
        color={color}
        size={size}
      />
      <FontAwesome
        name={value >= 2 ? "star" : value >= 1.5 ? "star-half-o" : "star-o"}
        color={color}
        size={size}
      />
      <FontAwesome
        name={value >= 3 ? "star" : value >= 2.5 ? "star-half-o" : "star-o"}
        color={color}
        size={size}
      />
      <FontAwesome
        name={value >= 4 ? "star" : value >= 3.5 ? "star-half-o" : "star-o"}
        color={color}
        size={size}
      />
      <FontAwesome
        name={value >= 5 ? "star" : value >= 4.5 ? "star-half-o" : "star-o"}
        color={color}
        size={size}
      />
    </HStack>
  );
}
