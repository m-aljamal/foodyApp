import React, { FC } from "react";
import { Platform, StyleSheet, Text } from "react-native";

const AppText: FC<{ style?: string | {} }> = ({ children, style }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default AppText;

const styles = StyleSheet.create({
  text: {
    ...Platform.select({
      ios: {
        fontFamily: "AppleSDGothicNeo-Medium",
      },
      android: {
        fontFamily: "Roboto",
      },
    }),
  },
});
