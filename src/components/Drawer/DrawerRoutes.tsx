import React from "react";
import Drawer from "./Drawer";
import SugRouteItemContainer from "./DrawerItems/RouteItem";
import { Text, StyleSheet, View } from "react-native";

const DrawerRoutes = () => {
  return (
    <Drawer>
      <View style={styles.container}>
        <Text style={styles.textStyles}>Suggested Routes</Text>
        <SugRouteItemContainer />
        <SugRouteItemContainer />
        <SugRouteItemContainer />
      </View>
    </Drawer>
  );
};

export default DrawerRoutes;

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  textStyles: {
    fontSize: 20,
    textAlign: "center",
    alignSelf: "flex-start",
  },
});
