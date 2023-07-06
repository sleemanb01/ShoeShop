export type voidFunc = () => void;

export type TProduct = {
  _id: Types.ObjectId;
  name: string;
  image: string;
  description: string;
  price: number;
  countInStock: number;
  rating: number;
  numReviews: number;
};

export type TOrderItem = {
  quantity: number;
  _id: Types.ObjectId;
  product: TProduct["_id"] | TProduct;
};

export type TOrder = {
  _id: Types.ObjectId;
  orderItems: Array<TOrderItem["_id"]> | Array<TOrderItem>;
  shippingAddress1: string;
  shippingAddress2: string;
  city: string;
  zip: string[];
  country: string;
  phone: string;
  status: ORDER_STATUS;
  totalPrice: number;
  user: TUser["_id"] | TUser;
  dateOrdered: Date;
};

export type TUser = {
  _id: Types.ObjectId;
  name: string;
  image: string;
  email: string;
  passwordHash: string;
  street: string;
  apartment: string;
  city: string;
  zip: string;
  country: string;
  phone: string;
  isAdmin: boolean;
};

export type TReview = {
  _id: Types.ObjectId;
  productId: Types.ObjectId;
  content: string;
  date: Date;
  rating: number;
};

export type TInput = { label: string; type?: "text" | "password" };

export type TPaymentMethod = {
  image: ImageSourcePropType;
  alt: string;
  icon: string;
};

export type TOrderSinglePriceInfo = { title: string; price: number };

export type TOrderPriceInfo = [
  { title: "Products"; price: number },
  { title: "Shipping"; price: number },
  { title: "Tax"; price: number },
  { title: "Total Amount"; price: number }
];

export type RootStackParamList = {
  Home: undefined;
  Shipping: undefined;
  Cart: undefined;
  Payment: undefined;
  PlaceOrder: undefined;
  SingleProductScreen: {
    product: TProduct;
  };
  SingleProduct: {
    product: TProduct;
  };
  Login: undefined;
  Register: undefined;
  Order: undefined;
  Bottom: undefined;
};
