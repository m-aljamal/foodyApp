import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../config/colors";
import Constants from "expo-constants";

const Screen: FC = ({ children }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>{children}</View>
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: Constants.statusBarHeight,
  },
  view: {
    flex: 1,
  },
});
