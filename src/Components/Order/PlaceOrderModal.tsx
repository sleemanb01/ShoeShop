import React from "react";
import CButton from "../CButton";
import { Colors } from "../../style/colors";
import { Center, Modal, VStack, Button } from "native-base";
import { TOrder, TOrderPriceInfo } from "../../typing/types";
import SingleOrderInfoModal from "../Single/SingleOrderInfoModal";

export default function PlaceOrderModal({
  populatedOrder,
}: {
  populatedOrder: TOrder;
}) {
  const [showModal, setShowModal] = React.useState(false);

  const openModalHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const submitHandler = () => {};

  const shippingPrice = 14;
  const taxPrice = 8;

  const orderPriceInfo: TOrderPriceInfo = [
    { title: "Products", price: populatedOrder.totalPrice },
    { title: "Shipping", price: shippingPrice },
    { title: "Tax", price: taxPrice },
    {
      title: "Total Amount",
      price: populatedOrder.totalPrice + shippingPrice + taxPrice,
    },
  ];

  return (
    <Center>
      <CButton
        onPress={openModalHandler}
        bg={Colors.black}
        color={Colors.white}
        mt={5}
      >
        Show Total
      </CButton>
      <Modal isOpen={showModal} onClose={closeModalHandler} size="lg">
        <Modal.Content maxWidth={350}>
          <Modal.CloseButton />
          <Modal.Header>Order</Modal.Header>
          <Modal.Body>
            <VStack space={7}>
              {orderPriceInfo.map((opi) => (
                <SingleOrderInfoModal
                  key={opi.title + "modal"}
                  orderPriceInfo={opi}
                />
              ))}
            </VStack>
          </Modal.Body>
          <Modal.Footer>
            <Button
              flex={1}
              bg={Colors.main}
              h={45}
              _text={{ color: Colors.white }}
              onPress={submitHandler}
              _pressed={{ bg: Colors.main }}
            >
              PLACE AN ORDER
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
}
