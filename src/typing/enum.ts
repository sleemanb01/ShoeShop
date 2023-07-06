import { TPaymentMethod } from "./types";

export enum ORDER_STATUS {
  PENDING = 0,
  PROCCESSED = 1,
  SHIPPED = 2,
  DELIVERED = 3,
}

export const paymentMethods: Array<TPaymentMethod> = [
  {
    image: require("../../assets/images/paypal.png"),
    alt: "paypal",
    icon: "Ionicons",
  },
  {
    image: require("../../assets/images/discover.png"),
    alt: "discover",
    icon: "fontAwesome",
  },
  {
    image: require("../../assets/images/googlepay.png"),
    alt: "googlepay",
    icon: "fontAwesome",
  },
];
