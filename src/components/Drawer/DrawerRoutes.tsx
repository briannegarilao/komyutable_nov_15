import React, { forwardRef } from "react";
import Drawer from "./Drawer";
import RouteItem from "./DrawerItems/RouteItem";
import { Text, StyleSheet, View } from "react-native";

const DrawerRoutes = forwardRef((props, ref) => {
  return (
    <Drawer ref={ref}>
      <View style={styles.container}>
        <Text style={styles.textStyles}>Suggested Routes</Text>
        <RouteItem />
      </View>
    </Drawer>
  );
});

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
