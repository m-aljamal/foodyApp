import React, { useState } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import colors from "../config/colors";
import Screen from "../components/Screen";
import Search from "../components/Search";
import Categories from "../components/Categories";
import AppText from "../components/layout/AppText";
import MostPopularList from "../components/MostPopularList";

const foodList = [
  {
    id: "1001",
    name: "Exra Beef Burger",
    image: require("../../assets/burger.jpg"),
    price: 20,
    mostPopular: true,
  },
  {
    id: "1002",
    name: "Smoked Beef Burger",
    image: require("../../assets/burger.jpg"),
    price: 25,
    mostPopular: true,
  },
  {
    id: "1010",
    name: "Smoked Beef Burger",
    image: require("../../assets/burger.jpg"),
    price: 25,
    mostPopular: true,
  },
  {
    id: "55885",
    name: "Smoked Beef Burger",
    image: require("../../assets/burger.jpg"),
    price: 25,
    mostPopular: true,
  },
  {
    id: "454785",
    name: "Smoked Beef Burger",
    image: require("../../assets/burger.jpg"),
    price: 25,
    mostPopular: true,
  },
  {
    id: "1003",
    name: "normal Burger",
    image: require("../../assets/burger.jpg"),
    price: 10,
    mostPopular: false,
  },
  {
    id: "1004",
    name: "pizza",
    image: require("../../assets/burger.jpg"),
    price: 5,
    mostPopular: false,
  },
];

const mostPoplularFood = foodList.filter((f) => f.mostPopular);

const FoodListScreen = () => {
  const [serach, setSearch] = useState("");

  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.imageContainer}>
            <Image
              source={require("../../assets/avatar.jpg")}
              style={styles.avatar}
            />
          </View>
          <View>
            <AppText style={styles.text}>Find and order</AppText>
            <View style={{ flexDirection: "row" }}>
              <AppText style={[styles.text, { color: colors.darkGray }]}>
                Our testy food
              </AppText>
              <Image
                source={require("../../assets/fast-food.png")}
                style={{ width: 40, height: 40, marginLeft: 5 }}
              />
            </View>
          </View>
        </View>
        <Search text={serach} setText={(text: any) => setSearch(text)} />
        <Categories />
        <MostPopularList items={mostPoplularFood} />
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
    fontSize: 35,
    color: colors.lightGray,
    fontWeight: "700",
  },
  header: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
  },
});
