import { Flex, Heading, Progress, Text, useColorMode } from "@chakra-ui/react";
import { MarginPage } from "@components/MarginComponent";
import { ProjectCard } from "@components/projectCard/projectCard";

export const Projects = (): JSX.Element => {
  return (
    <MarginPage>
      <Heading size={"3xl"}>Projects</Heading>
      <Text fontSize={"xl"} sx={{ mt: 8 }}></Text>
      <ProjectCard></ProjectCard>
    </MarginPage>
  );
};
