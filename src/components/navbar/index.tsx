import React from "react";
import {
  Divider,
  Flex,
  Heading,
  Spacer,
  useColorModeValue,
} from "@chakra-ui/react";
import { NavbarButton } from "./NavbarButton";
import { ColorModeButton } from "./colorModeButton";

export const Navbar = (): JSX.Element => {
  const color = useColorModeValue("black", "white");
  return (
    <Flex
      sx={{
        mt: 12,
        ml: "25rem",
        mr: "25rem",
        alignItems: "center",
      }}
    >
      <Heading size={"2xl"} sx={{ fontWeight: 700, color: color }}>
        <a href={`/`}>GS</a>
      </Heading>
      <Flex sx={{ flexGrow: 1 }} />
      <NavbarButton goToUrl="projects">Projects</NavbarButton>
      <NavbarButton goToUrl="about">About</NavbarButton>
      <NavbarButton goToUrl="contact">Contact</NavbarButton>
      <ColorModeButton />
    </Flex>
  );
};
