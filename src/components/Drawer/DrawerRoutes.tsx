import React, { useState } from "react";
import Drawer from "./Drawer";
import RouteItem from "./DrawerItems/RouteItem";
import { Text, StyleSheet, View } from "react-native";
import useRoutes from "../../hooks/useRoutes";
import DirectionItem from "./DrawerItems/DirectionItem";
import DirectionCurrent from "./DrawerItems/DirectionCurrent";

interface DrawerRoutesProps {
  onRouteItemPress: (coordinates: [number, number][]) => void;
}

const DrawerRoutes: React.FC<DrawerRoutesProps> = ({ onRouteItemPress }) => {
  // Fetch route coordinates using useRoutes (you can replace this with actual different route fetching logic)
  const routes01 = useRoutes();
  const routes02 = useRoutes();
  const routes03 = useRoutes();

  // State to track the selected route
  const [selectedRouteIndex, setSelectedRouteIndex] = useState<number | null>(
    null
  );

  // Function to handle route selection and toggle visibility
  const handleRouteSelection = (
    routeIndex: number,
    coordinates: [number, number][]
  ) => {
    setSelectedRouteIndex(routeIndex); // Set the selected route index
    onRouteItemPress(coordinates); // Pass the selected route coordinates
  };

  return (
    <Drawer>
      <View style={styles.container}>
        <Text style={styles.textStyles}>
          Suggested Routes for SM North EDSA
        </Text>

        {/* Route 01 */}
        <RouteItem
          rides={["BusRide"]}
          fare="69.00"
          duration="2 hrs"
          distance=""
          onPress={() => handleRouteSelection(1, routes01)}
        />
        {/* Show direction for Route 01 if selected */}
        {selectedRouteIndex === 1 && (
          <View id="direction01">
            <DirectionCurrent />
            <DirectionItem />
          </View>
        )}

        {/* Route 02 */}
        <RouteItem
          rides={["JeepRide"]}
          fare="69.00"
          duration="2 hrs"
          distance=""
          onPress={() => handleRouteSelection(2, routes02)}
        />
        {/* Show direction for Route 02 if selected */}
        {selectedRouteIndex === 2 && (
          <View id="direction02">
            <DirectionCurrent />
            <DirectionItem />
          </View>
        )}

        {/* Route 03 */}
        <RouteItem
          rides={["JeepRide", "BusRide"]}
          fare="69.00"
          duration="2 hrs"
          distance=""
          onPress={() => handleRouteSelection(3, routes03)}
        />
        {/* Show direction for Route 03 if selected */}
        {selectedRouteIndex === 3 && (
          <View id="direction03">
            <DirectionCurrent />
            <DirectionItem />
          </View>
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
