import { Flex } from "@chakra-ui/react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

export const Footer = (): JSX.Element => {
  const iconsStyle = {
    fontSize: 25,
    cursor: "pointer",
  };

  return (
    <Flex sx={{ flexDir: "row", gap: 3, mt: 8 }}>
      <BsTwitter
        style={iconsStyle}
        onClick={() => {
          window.open("https://twitter.com/gbcossant");
        }}
      />
      <BsGithub
        style={iconsStyle}
        onClick={() => {
          window.open("https://github.com/gbcosta");
        }}
      />
      <BsLinkedin
        style={iconsStyle}
        onClick={() => {
          window.open("https://www.linkedin.com/in/gbcostasantos/");
        }}
      />
    </Flex>
  );
};
