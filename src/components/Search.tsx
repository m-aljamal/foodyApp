import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import colors from "../config/colors";
import { EvilIcons } from "@expo/vector-icons";
const Search = ({ text, setText }: any) => {
  return (
    <View style={styles.inputContainer}>
      <EvilIcons name="search" size={24} color={colors.lightGray} />
      <TextInput
        value={text}
        style={styles.input}
        onChangeText={(text) => setText(text)}
        placeholder="Find your food"
        maxLength={100}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  input: {
    marginLeft: 10,
    width: "100%",
  },
  inputContainer: {
    flexDirection: "row",
    borderRadius: 10,
    marginTop: 25,
    padding: 10,
    backgroundColor: colors.lighterGray,
  },
});
