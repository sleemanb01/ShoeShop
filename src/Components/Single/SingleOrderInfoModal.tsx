import { HStack, Text } from "native-base";
import { Colors } from "../../style/colors";
import { TOrderSinglePriceInfo } from "../../typing/types";

export default function SingleOrderInfoModal({
  orderPriceInfo,
}: {
  orderPriceInfo: TOrderSinglePriceInfo;
}) {
  const { title } = orderPriceInfo;
  return (
    <HStack alignItems="center" justifyContent="space-between">
      <Text fontWeight="medium">{title}</Text>
      <Text color={title === "Total Amount" ? Colors.main : Colors.black} bold>
        {orderPriceInfo.price}$
      </Text>
    </HStack>
  );
}
