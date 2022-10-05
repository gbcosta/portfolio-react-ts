import { Flex, Heading, Progress, Text, useColorMode } from "@chakra-ui/react";
import { MarginPage } from "@components/MarginComponent";
import { SkillProgress } from "@components/skillProgess";

export const About = (): JSX.Element => {
  return (
    <MarginPage>
      <Heading size={"3xl"}>About Me</Heading>
      <Text fontSize={"xl"} sx={{ mt: 8 }}>
        I'm in &#10084; with JS & C# so, my skills are around these languages.
      </Text>
      <Heading size={"xl"} sx={{ mt: 8 }}>
        Game Design
      </Heading>
      <Text fontSize={"xl"} sx={{ mt: 4 }}>
        I'm currently studying Game Design at Unisinos. I studying at Unisinos
        since 2016
      </Text>
      <Heading size={"xl"} sx={{ mt: 8 }}>
        Skills
      </Heading>
      <Text fontSize={"xl"} sx={{ mt: 4 }}>
        These Are my best skills
      </Text>
      <SkillProgress value={100}>Javascript</SkillProgress>
      <SkillProgress value={80}>Typescript</SkillProgress>
      <SkillProgress value={70}>Node</SkillProgress>
      <SkillProgress value={50}>SQL</SkillProgress>
      <SkillProgress value={85}>React</SkillProgress>
      <SkillProgress value={50}>C++</SkillProgress>
      <SkillProgress value={60}>C#</SkillProgress>
      <SkillProgress value={40}>.Net</SkillProgress>
      <SkillProgress value={30}>Docker</SkillProgress>
    </MarginPage>
  );
};
