import React, { FC } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import colors from "../../config/colors";

const ShadowView: FC<{ style?: string | {} }> = ({ children, style }) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

export default ShadowView;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    ...Platform.select({
      ios: {
        shadowColor: colors.dark,
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 8,
        shadowRadius: 2,
      },
      android: {
        elevation: 8,
      },
    }),
  },
});
