import { useColorMode } from "@chakra-ui/react";
import { Progress, Flex, Text } from "@chakra-ui/react";

const ProgressWithColorMode = (props: { value: number }): JSX.Element => {
  const { colorMode } = useColorMode();

  return (
    <Progress
      value={props.value}
      size={"sm"}
      rounded={"full"}
      variant={colorMode == "dark" ? "white" : "black"}
    />
  );
};

type SkillProgessProps = {
  value: number;
  children: string;
};

export const SkillProgress = (props: SkillProgessProps): JSX.Element => {
  return (
    <Flex flexDir={"column"} mt={8}>
      <Text fontSize={"2xl"} fontWeight={"bold"}>
        {props.children}
      </Text>
      <ProgressWithColorMode value={props.value} />
    </Flex>
  );
};
