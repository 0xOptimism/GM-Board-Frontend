import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    brand: {
      100: "#FB542B",
      900: "#000;",
    },
  },
  styles: {
    global: {
      body: {
        color: "white",
        bg: "radial-gradient(40.48% 67.6% at 50% 32.4%,#161a20 0%,#151617 52.77%,#151617 100%),#141414",
      },
    },
  },
});
