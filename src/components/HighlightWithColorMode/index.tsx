import { Highlight, useColorModeValue } from "@chakra-ui/react";

interface highlightWithColorMode {
  bgLight: string;
  bgDark: string;
  query: string | Array<string>;
  children?: any;
}

export const HighlightWithColorMode = (
  props: highlightWithColorMode
): JSX.Element => {
  const color = useColorModeValue(props.bgLight, props.bgDark);
  const styles = {
    px: 2,
    py: 0.5,
    bg: color,
    rounded: "full",
    transition: "background-color 0.4s ease-in-out",
  };
  return (
    <Highlight query={props.query} styles={styles}>
      {props.children}
    </Highlight>
  );
};
