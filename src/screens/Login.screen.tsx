import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

const LoginScreen = () => {
  return (
    <ImageBackground
      source={require("../../assets/loginpack.jpg")}
      style={styles.container}
    >
      <View >
        <Text style={styles.text}>Icon</Text>
        <Text style={styles.text}>Good Food</Text>
        <Text style={styles.text}>Tasty Food</Text>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    alignItems: "center",
  },
  text: {
    fontSize: 50,
    color: "white",
    fontWeight:"bold"
  },
});
