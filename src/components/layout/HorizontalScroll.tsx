import React, { FC } from "react";
import { ScrollView } from "react-native";

const HorizontalScroll: FC = ({ children }) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {children}
    </ScrollView>
  );
};

export default HorizontalScroll;
