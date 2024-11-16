import React from "react";
import Drawer from "./Drawer";
import RouteItem from "./DrawerItems/RouteItem";
import { Text, StyleSheet, View } from "react-native";
import useRoutes from "../../hooks/useRoutes";

interface DrawerRoutesProps {
  onRouteItemPress: (coordinates: [number, number][]) => void;
}

const DrawerRoutes: React.FC<DrawerRoutesProps> = ({ onRouteItemPress }) => {
  // Fetch route coordinates using useRoutes
  const routes = useRoutes();

  return (
    <Drawer>
      <View style={styles.container}>
        <Text style={styles.textStyles}>Suggested Routes</Text>
        {routes.length > 0 ? (
          // Render RouteItem only when routes are available
          <RouteItem
            rides={["JeepRide", "BusRide"]} // Update with actual data if necessary
            fare="69.00" // Example fare
            duration="2 hrs" // Example duration
            distance="" // Example distance
            onPress={() => onRouteItemPress(routes)} // Pass routes on selection
          />
        ) : (
          <Text style={styles.noRoutesText}>No routes available</Text>
        )}
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
  noRoutesText: {
    fontSize: 16,
    textAlign: "center",
    color: "#999",
  },
});
