import { TOrderItem, TOrder } from "../../src/typing/types";

const OI1 = {
  _id: "15145615156165",
  quantity: 2,
  product: "1",
};

const OI2 = {
  _id: "1345652855",
  quantity: 5,
  product: "2",
};

const OI: Array<TOrderItem> = [OI1, OI2];
const OIS = [OI2];

const O1: TOrder = {
  _id: "515151251054",
  orderItems: OI,
  shippingAddress1: "1",
  shippingAddress2: "2",
  city: "julis",
  zip: ["2498000"],
  country: "israel",
  phone: "0548879522",
  status: 1,
  totalPrice: 10,
  user: "1",
  dateOrdered: new Date(),
};

const O2: TOrder = {
  _id: "898446727262682",
  orderItems: OIS,
  shippingAddress1: "1",
  shippingAddress2: "2",
  city: "julis",
  zip: ["2498000"],
  country: "israel",
  phone: "0548879522",
  status: 0,
  totalPrice: 45,
  user: "1",
  dateOrdered: new Date(),
};

const POI1: TOrderItem = {
  _id: "15145615156165",
  quantity: 2,
  product: {
    _id: "1",
    name: "Nike",
    image:
      "https://static.nike.com/a/images/t_default/e839f55c-84d5-4030-9bcf-644e6a6463ea/revolution-6-running-shoes-9FQ8QD.png",
    description: "nike nike nike",
    price: 89,
    countInStock: 3,
    rating: 4,
    numReviews: 4,
  },
};

const POI2: TOrderItem = {
  _id: "1345652855",
  quantity: 5,
  product: {
    _id: "2",
    name: "puma",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-OjGnwPSvoB9zjIwmRnJl_J5wgII__bohCC1_SNnacvcglz5eykAE1rSiGaQvJQMCx7E&usqp=CAU",
    description: "puma puma puma",
    price: 19,
    countInStock: 6,
    rating: 2,
    numReviews: 1,
  },
};

export const populatedOrder: TOrder = {
  _id: "898446727262682",
  orderItems: [POI1, POI2],
  shippingAddress1: "tamir kamil amer 1",
  shippingAddress2: "2",
  city: "julis",
  zip: ["2498000"],
  country: "israel",
  phone: "0548879522",
  status: 0,
  totalPrice: 45,
  user: {
    _id: "521561571451",
    name: "sleeman nabwani",
    image:
      "https://media.licdn.com/dms/image/C4E03AQFwa0e8bCJXrA/profile-displayphoto-shrink_800_800/0/1517875944394?e=2147483647&v=beta&t=P4t1F7SlO0GWZb1Qte2xCzJLY-27aBNjobbGuYkRTiI",
    email: "sleeman.nabwani@gmail.com",
    phone: "+972548879522",
  },
  dateOrdered: new Date(),
};

export let orders: Array<TOrder> = [O1, O2];
