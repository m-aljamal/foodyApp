import React, { FC } from "react";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import ItemCart from "./ItemCart";
import AppText from "./layout/AppText";
import HorizontalScroll from "./layout/HorizontalScroll";

interface FoodList {
  items: {
    id: string;
    name: string;
    image: any;
    price: number;
    mostPopular: boolean;
  }[];
}

const MostPopularList: FC<FoodList> = ({ items }) => {
  return (
    <View>
      <AppText style={styles.textTitle}>Most Popular</AppText>

      <HorizontalScroll>
        <FlatList
          contentContainerStyle={styles.ListContainer}
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ItemCart item={item} />}
        />
      </HorizontalScroll>
    </View>
  );
};

export default MostPopularList;

const styles = StyleSheet.create({
  textTitle: {
    fontSize: 20,
    marginTop: 20,
    fontFamily: "AppleSDGothicNeo-SemiBold",
  },
  ListContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
});
