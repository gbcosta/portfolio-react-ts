import { Box, Flex, useColorModeValue, Text } from "@chakra-ui/react";
import "./index.css";
type NavbarProps = {
  children?: string;
  goToUrl?: string;
};

export const NavbarButton = (props: NavbarProps): JSX.Element => {
  const color = useColorModeValue("gray.600", "white");
  return (
    <Flex
      className="parent"
      sx={{
        flexDirection: "column",
        alignItems: "center",
        ml: 4,
      }}
      onClick={() => {
        window.open(props.goToUrl, "_self");
      }}
    >
      <Text
        sx={{
          color: color,
          borderRadius: 0,
          fontWeight: 400,
          fontSize: "1rem",
          mb: 1,

          _hover: {
            cursor: "pointer",
          },
        }}
      >
        {props.children}
      </Text>

      <Box
        className="child"
        sx={{
          bgColor: color,
          height: 0.4,
          width: "0%",
          transition: "0.3s ease-in-out",
        }}
      />
    </Flex>
  );
};
