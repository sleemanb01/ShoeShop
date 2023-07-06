import { Button } from "native-base";
import { voidFunc } from "../typing/types";

type Props = {
  mt?: number;
  bg: string;
  color: string;
  children: string;
  onPress: voidFunc;
};

export default function CButton({ mt, bg, color, children, onPress }: Props) {
  return (
    <Button
      w="full"
      h={55}
      rounded="full"
      mt={mt}
      onPress={onPress}
      _text={{ color: color, fontWeight: "bold" }}
      _pressed={{ bg: bg }}
    >
      {children}
    </Button>
  );
}
