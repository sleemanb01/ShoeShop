import React from "react";
import {
  Heading,
  Box,
  Text,
  VStack,
  FormControl,
  Select,
  CheckIcon,
  TextArea,
} from "native-base";
import { Colors } from "../style/colors";
import Rating from "./Rating";
import { TReview } from "../typing/types";
import CButton from "./CButton";
import NoContent from "./NoContent";
import Message from "./Notifications/Message";
import { SingleReview } from "./Single/SignleReview";

type Props = { reviews: Array<TReview> };

export default function Review({ reviews }: Props) {
  const [rating, setRating] = React.useState<string | undefined>(undefined);

  const addHandler = (rate: string) => {
    setRating(rate);
  };

  const submitHandler = () => {};

  if (reviews.length === 0) {
    return <NoContent label="Reviews" />;
  }

  return (
    <Box my={9}>
      <Heading bold fontSize={15} mb={2}>
        Reviews
      </Heading>
      {reviews.map((r) => SingleReview(r))}
      <Box mt={6}>
        <Heading fontSize={15} bold mb={4}>
          REVIEW THIS PRODUCT
        </Heading>
        <VStack space={6}>
          <FormControl>
            <FormControl.Label
              _text={{
                fontSize: "12px",
                fontWeight: "bold",
                color: Colors.black,
              }}
            >
              Rating
            </FormControl.Label>
            <Select
              bg={Colors.subGreen}
              borderWidth={0}
              rounded={5}
              py={3}
              placeholder="Choose Rating"
              _selectedItem={{
                bg: Colors.subGreen,
                endIcon: <CheckIcon size={3} />,
              }}
              onValueChange={(e) => addHandler(e)}
              selectedValue={rating}
            >
              <Select.Item label="1 - Poor" value="1" />
              <Select.Item label="2 - fair" value="2" />
              <Select.Item label="3 - good" value="3" />
              <Select.Item label="4 - very good" value="4" />
              <Select.Item label="5 - excellant" value="5" />
            </Select>
          </FormControl>
          <FormControl>
            <FormControl.Label
              _text={{
                fontSize: "12PX",
                fontWeight: "bold",
              }}
            >
              COMMENT
              <TextArea
                h={24}
                w="full"
                placeholder="THis product is good ..."
                borderWidth={0}
                bg={Colors.subGreen}
                autoCompleteType={undefined}
                py={4}
                _focus={{
                  bg: Colors.subGreen,
                }}
              />
            </FormControl.Label>
          </FormControl>
          <CButton
            bg={Colors.main}
            color={Colors.white}
            onPress={submitHandler}
          >
            SUBMIT
          </CButton>
          {/* IF NOT LOGGED IN */}
          <Message color={Colors.white} bg={Colors.black}>
            Please 'Login' to write a review
          </Message>
        </VStack>
      </Box>
    </Box>
  );
}
