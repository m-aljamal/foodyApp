import React from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import colors from "../config/colors";
import HorizontalScroll from "./layout/HorizontalScroll";
const categories = [
  { name: "Beef", id: "cat1", icon: require("../../assets/fast-food.png") },
  { name: "cheese", id: "cat2", icon: require("../../assets/fast-food.png") },
  { name: "fool", id: "cat4", icon: require("../../assets/fast-food.png") },
  { name: "fool", id: "cat5", icon: require("../../assets/fast-food.png") },
  { name: "fool", id: "cat6", icon: require("../../assets/fast-food.png") },
  { name: "fool", id: "cat7", icon: require("../../assets/fast-food.png") },
  { name: "fool", id: "cat8", icon: require("../../assets/fast-food.png") },
  {
    name: "vigtables",
    id: "cat9",
    icon: require("../../assets/fast-food.png"),
  },
  { name: "falafel", id: "cat10", icon: require("../../assets/fast-food.png") },
];
const Categories = () => {
  return (
    <HorizontalScroll>
      <FlatList
        contentContainerStyle={styles.categoryContainer}
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.categoreyCart}>
            <Image
              source={item.icon}
              style={{ width: 40, height: 40, marginRight: 10 }}
            />
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </HorizontalScroll>
  );
};

export default Categories;

const styles = StyleSheet.create({
  categoreyCart: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.lighterGray,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 50,
    marginRight: 20,
  },
  categoryContainer: {
    marginTop: 30,

    flexDirection: "row",
  },
});
