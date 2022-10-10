import { Flex, useColorMode } from "@chakra-ui/react";
import { BsFillLightbulbFill, BsFillLightbulbOffFill } from "react-icons/bs";
export const ColorModeButton = (): JSX.Element => {
  const styleIconColorMode = {
    fontSize: "28px",
    marginLeft: "1rem",
  };

  const { colorMode, toggleColorMode } = useColorMode();
  const IconColorMode =
    colorMode == "light" ? (
      <BsFillLightbulbFill style={styleIconColorMode} />
    ) : (
      <BsFillLightbulbOffFill style={styleIconColorMode} />
    );
  return (
    <Flex
      sx={{
        mb: 2,
        _hover: {
          cursor: "pointer",
        },
      }}
      onClick={toggleColorMode}
    >
      {IconColorMode}
    </Flex>
  );
};
