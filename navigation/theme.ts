import { DefaultTheme } from "@react-navigation/native";
import colors from "../src/config/colors";

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.dark,
  },
};
