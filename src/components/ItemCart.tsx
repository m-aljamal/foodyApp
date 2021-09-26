import React, { FC } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import AppText from "./layout/AppText";
import tw from "tailwind-react-native-classnames";
import colors from "../config/colors";
import ShadowView from "./layout/ShadowView";
interface Item {
  item: {
    id: string;
    name: string;
    image: any;
    price: number;
    mostPopular: boolean;
  };
}

const ItemCart = ({ item }: Item) => {
  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image} />
      <AppText style={tw`my-2 text-lg px-2`}>{item.name}</AppText>
      <AppText style={tw`text-center text-lg font-bold  `}>
        $ {item.price}
      </AppText>
    </View>
  );
};

export default ItemCart;

const styles = StyleSheet.create({
  container: {
    width: 200,
    paddingBottom: 20,
    borderRadius: 10,
    overflow: "hidden",
    marginRight: 25,
    borderWidth: 1,
    borderColor: colors.lighterGray,
  },

  image: {
    width: "100%",
    height: 150,
  },
});
