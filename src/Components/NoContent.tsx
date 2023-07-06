import { Center, Text } from "native-base";

type Props = { label: string };
export default function NoContent({ label }: Props) {
  return (
    <Center alignContent="center" py={10}>
      <Text bold fontSize={24}>
        {`No ${label} Yet`}
      </Text>
    </Center>
  );
}
