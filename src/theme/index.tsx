// theme.ts

// 1. import `extendTheme` function
import {
  extendTheme,
  StyleFunctionProps,
  type ThemeConfig,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
  disableTransitionOnChange: false,
};

// 3. extend the theme
const theme = extendTheme({
  config: config,
  fonts: { heading: "Arimo", body: "Arimo" },
  colors: {
    bgColor: "#090f16",
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      "rppt, body": {
        bg: mode("white", "bgColor")(props),
        transition: "background-color 0.5s ease-in-out",
      },
      "h1, h2, h3, h4, h5, h6, p": {
        transition: "color 0.3s ease-in-out",
      },
    }),
  },
});

export default theme;
