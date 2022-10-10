import { Flex, Text } from "@chakra-ui/react";
import testImg from "../../assets/portfolio.png";

enum CardSize {
  extraSmall = 300,
  small = 400,
  medium = 500,
  large = 600,
  extraLarge = 700,
}

export const ProjectCard = (props: { size?: CardSize }): JSX.Element => {
  return (
    <Flex sx={{ width: "100%" }}>
      <Flex
        height={props.size ? props.size : CardSize.small}
        sx={{
          backgroundImage: testImg,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
          backgroundSize: "cover",
        }}
      >
        <Flex
          sx={{
            color: "white",
            flexDir: "column",
            opacity: 0,
            cursor: "pointer",
            width: "100%",
            background:
              "linear-gradient(0deg, #202020 0%, #292929a6 16%, rgba(0,212,255,0) 100%)",
            transition: "opacity 500ms ease-in-out",
            _hover: {
              opacity: "100",
              transform: "translateY(0)",
            },
          }}
        >
          <Flex flexGrow={1} />
          <Text
            fontSize={"4xl"}
            sx={{
              fontWeight: "bold",
              ml: 8,
              mr: 8,
            }}
          >
            Portfolio
          </Text>
          <Text sx={{ mb: 8, fontSize: "lg", ml: 8, mr: 8 }}>
            Portfolio created with React and Typescript
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
