import { extendTheme } from "@chakra-ui/react";

const styles = {
  global: {
    body: {
      // bg: "#080A0B",
      bg: "#080B16",
    },
  },
};

const colors = {
  lightDark: "#1A1C1E",
};

export const theme = extendTheme({ styles, colors });
