import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import colors from "../config/colors";
import Screen from "../components/Screen";
import Search from "../components/Search";

const foodData = [{

}];

const categories=[
    {name:"Beef", id:"cat1"}
    {name:"cheese", id:"cat2"}
    {name:"fool", id:"cat2"}
]

const FoodListScreen = () => {
  const [serach, setSearch] = useState("");

  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/avatar.jpg")}
            style={styles.avatar}
          />
        </View>
        <View>
          <Text style={styles.text}>Find and order</Text>
          <Text style={[styles.text, { color: colors.darkGray }]}>
            Our testy food
          </Text>
          <Search text={serach} setText={(text: any) => setSearch(text)} />
        </View>
      </View>
    </Screen>
  );
};

export default FoodListScreen;
const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
  },
  avatar: {
    width: 40,
    height: 40,
  },
  imageContainer: {
    alignItems: "flex-end",
  },
  text: {
    fontSize: 50,
    color: colors.lightGray,
    fontWeight: "700",
  },
});
