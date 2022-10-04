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
import { Link } from "react-router-dom";

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
      <NavbarButton>Projects</NavbarButton>
      <NavbarButton goToUrl="about">About</NavbarButton>
      <NavbarButton>Resume</NavbarButton>
      <ColorModeButton />
    </Flex>
  );
};
