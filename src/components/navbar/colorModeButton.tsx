import { Flex, useColorMode } from "@chakra-ui/react";
import { VscColorMode } from "react-icons/vsc";

export const ColorModeButton = (): JSX.Element => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      sx={{
        alignItems: "center",
        _hover: {
          cursor: "pointer",
        },
      }}
      onClick={toggleColorMode}
    >
      <VscColorMode
        style={{
          fontSize: "28px",
          marginLeft: "1rem",
          transform: "rotate(180deg)",
        }}
      />
    </Flex>
  );
};
