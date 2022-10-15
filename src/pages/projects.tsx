import { Flex, Heading, Text } from "@chakra-ui/react";
import { MarginPage } from "@components/MarginComponent";
import { ProjectCard } from "@components/projectCard/projectCard";
import testImg from "../assets/portfolio.png";

export const Projects = (): JSX.Element => {
  return (
    <MarginPage>
      <Heading size={"3xl"}>Projects</Heading>
      <Text fontSize={"xl"} sx={{ mt: 8 }}></Text>
      <Flex
        gap={1}
        sx={{
          flexDirection: { base: "column", xl: "row" },
          justifyContent: "center",
        }}
      >
        <Flex gap={1} sx={{ flexDir: "column" }}>
          <ProjectCard
            image={testImg}
            url="https://gbcostasant.netlify.app/"
          ></ProjectCard>
        </Flex>
        <Flex gap={1} sx={{ flexDir: "column" }}></Flex>
      </Flex>
    </MarginPage>
  );
};
