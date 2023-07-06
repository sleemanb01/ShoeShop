import React from "react";
import { Colors } from "../../style/colors";
import { TOrder, TUser } from "../../typing/types";
import SingleOrderInfo from "../Single/SingleOrderInfo";
import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";

export default function OrderInfo({
  populatedOrder,
}: {
  populatedOrder: TOrder;
}) {
  return (
    <React.Fragment key={populatedOrder._id}>
      <SingleOrderInfo
        icon={<Ionicons name="location-sharp" size={30} color={Colors.white} />}
        title={"DELIVER TO"}
        subTitle={"Address: "}
        text={populatedOrder.shippingAddress1}
      />
      <SingleOrderInfo
        icon={
          <FontAwesome5 name="shipping-fast" size={30} color={Colors.white} />
        }
        title={"SHIPPING INFO"}
        subTitle={"Shipping: "}
        text={populatedOrder.country}
      />
      <SingleOrderInfo
        icon={<FontAwesome name="user" size={30} color={Colors.white} />}
        title={"COSTUMER"}
        subTitle={(populatedOrder.user as TUser).name}
        text={(populatedOrder.user as TUser).email}
      />
    </React.Fragment>
  );
}
