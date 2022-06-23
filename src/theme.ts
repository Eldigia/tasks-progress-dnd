import { extendTheme } from "@chakra-ui/react";

const styles = {
  global: {
    body: {
      bg: "#080B16",
    },
  },
};

const colors = {
  lightDark: "#1A1C1E",
};

const breakpoints = {
  sm: "800",
  md: "1200",
};

export const theme = extendTheme({ styles, colors, breakpoints });
