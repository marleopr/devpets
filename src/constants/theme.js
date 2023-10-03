import { extendTheme } from "@chakra-ui/react";
import colors from "./colors";

const theme = extendTheme({
    colors: {
        blue: colors.blue,
        blueNavy: colors.blueNavy,
        navy: colors.navy,
        purple: colors.purple,
        purpleNav: colors.purpleNav,
        white: colors.white,
    },
    components: {
        Button: {
            variants: {
                outline: {
                    color: "blue",
                    borderColor: "blue",
                },
            },
        },
    },
});

export default theme;
