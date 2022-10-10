import { Flex, Heading, Progress, Text, useColorMode } from "@chakra-ui/react";
import { MarginPage } from "@components/MarginComponent";
import { ProjectCard } from "@components/projectCard/projectCard";

export const Projects = (): JSX.Element => {
  return (
    <MarginPage>
      <Heading size={"3xl"}>Projects</Heading>
      <Text fontSize={"xl"} sx={{ mt: 8 }}></Text>
      <Flex gap={1} sx={{ flexDirection: "row" }}>
        <Flex gap={1} sx={{ flexDir: "column" }}>
          <ProjectCard size={"extraSmall"}></ProjectCard>
          <ProjectCard></ProjectCard>
        </Flex>
        <Flex gap={1} sx={{ flexDir: "column" }}>
          <ProjectCard></ProjectCard>
          <ProjectCard></ProjectCard>
        </Flex>
      </Flex>
    </MarginPage>
  );
};
