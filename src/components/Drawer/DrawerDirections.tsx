import React from "react";
import Drawer from "./Drawer";
import { View, StyleSheet } from "react-native";
import SugRouteItemContainer from "./DrawerItems/RouteItem";
import DirectionContainer from "./DrawerItems/DirectionItem";
import DirectionContainerBlueMode from "./DrawerItems/DirectionCurrent";

const DrawerDirections = () => {
  return (
    <Drawer>
      <View style={styles.container}>
        <SugRouteItemContainer />
        <DirectionContainer />
        <DirectionContainerBlueMode />
        <DirectionContainer />
      </View>
    </Drawer>
  );
};

export default DrawerDirections;

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
});
