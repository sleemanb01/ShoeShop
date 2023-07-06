import Rating from "../Rating";
import { Colors } from "../../style/colors";
import { TReview } from "../../typing/types";
import Message from "../Notifications/Message";
import { Box, Heading, Text } from "native-base";

export function SingleReview(review: TReview) {
  return (
    <Box p={3} bg={Colors.deepGray} mt={5} rounded={5}>
      <Heading fontSize={15} color={Colors.black}>
        {review.content}
      </Heading>
      <Rating value={review.rating} />
      <Text my={3} fontSize={11}>
        {review.date.toString()}
      </Text>
      <Message bg={Colors.black} color={Colors.white} size={10}>
        {review.content}
      </Message>
    </Box>
  );
}
