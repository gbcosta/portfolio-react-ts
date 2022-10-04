import { Flex, Heading, Highlight, Text } from "@chakra-ui/react";
import { MarginPage } from "@components/MarginComponent";
import { HighlightWithColorMode } from "@components/HighlightWithColorMode";

export const Index = (): JSX.Element => {
  return (
    <MarginPage marginTop={32}>
      <Heading size={"3xl"} textAlign="center">
        I'm Gabriel Santos
      </Heading>
      <Text mt="8" fontSize={"1.25rem"}>
        <HighlightWithColorMode
          query={["JS", "C#", "Game Design", "fullstack dev"]}
          bgDark="orange.100"
          bgLight="teal.100"
        >
          Hi i'm Gabriel actually studying Game Design at Unisinos. I'm a
          fullstack dev in love with JS and C# languages.
        </HighlightWithColorMode>
      </Text>
      <Text mt="4 " fontSize={"1.25rem"}>
        <HighlightWithColorMode
          query={["Third Strike", "football", "games"]}
          bgDark="cyan.100"
          bgLight="purple.100"
        >
          I love games lately the genre that i played the most is fighting games
          mostly Street Fighter 3 Third Strike and i love football , of course.
        </HighlightWithColorMode>
      </Text>
      <Text mt="4 " fontSize={"1.25rem"}>
        Here you can see what i'm doing in my &lt;
        <Text
          as={"span"}
          onClick={() => {
            window.open("https://google.com");
          }}
          sx={{
            cursor: "pointer",
            transition: "color 0.2s ease-in-out",
            _hover: { color: "red.300" },
            fontWeight: 600,
          }}
        >
          Projects
        </Text>
        &gt;.
      </Text>
    </MarginPage>
  );
};
