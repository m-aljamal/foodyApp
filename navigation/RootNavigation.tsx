import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import CartScreen from "../src/screens/Cart.screen";
import FavoritScreen from "../src/screens/Favorit.screen";
import FoodListScreen from "../src/screens/FoodList.screen";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../src/config/colors";
const Tab = createBottomTabNavigator();
const RootNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          borderTopWidth: 0,
          backgroundColor: colors.white,
          elevation: 0,
        },
      }}
    >
      <Tab.Screen
        name="FoodList"
        component={FoodListScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="shopping-cart" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="FavoraitScreen"
        component={FavoritScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="favorite-border" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default RootNavigation;
