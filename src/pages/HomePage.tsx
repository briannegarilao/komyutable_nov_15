import React, { useRef, useState } from "react";
import { View, StyleSheet } from "react-native";
import SearchBar from "../components/SearchComponents/SearchBar";
import Map from "../components/Map/Map";
import DrawerRoutes from "../components/Drawer/DrawerRoutes";

const HomePage = ({ route }: { route: any }) => {
  const mapRef = useRef<{ moveToUserLocation: () => void } | null>(null);

  return (
    <View style={styles.container}>
      <View style={styles.drawerContainer}>
        <DrawerRoutes />
      </View>
      <View style={styles.UIContainer}>
        <SearchBar />
      </View>
      <View style={styles.mapContainer}>
        <Map ref={mapRef} />
      </View>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  UIContainer: {
    flex: 1,
    gap: 20,
    padding: 16,
  },
  mapContainer: {
    position: "absolute",
    height: "100%",
    width: "100%",
    zIndex: -1,
  },
  drawerContainer: {
    position: "absolute",
    height: "100%",
    width: "100%",
    zIndex: 5,
    pointerEvents: "box-none",
  },
});
