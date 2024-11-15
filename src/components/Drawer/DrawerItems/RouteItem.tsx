import React from "react";
import { View, StyleSheet, Text } from "react-native";
import JeepRide from "./Ride Icons/JeepRide";
import BusRide from "./Ride Icons/BusRide";
import TrainRide from "./Ride Icons/TrainRide";

const RouteItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <View style={styles.rideContainer}>
          <JeepRide />
          <BusRide />
          <TrainRide />
        </View>
        <View style={styles.fareContainer}>
          <Text style={{ fontSize: 14, color: "#1d1d1d" }}>₱69.00</Text>
          <Text style={{ fontSize: 14, color: "#777" }}>2 hrs</Text>
        </View>
      </View>

      <View style={styles.horizontalLine} />

      <View style={styles.timeFrame}>
        <Text style={{ fontSize: 14, color: "#777" }}>12:00 PM</Text>
        <Text style={{ fontSize: 14, color: "#154992" }}>120 min</Text>
        <Text style={{ fontSize: 14, color: "#154992" }}>1:00 PM</Text>
      </View>
    </View>
  );
};

export default RouteItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    elevation: 8,
    backgroundColor: "#fff",
  },
  upperContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rideContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  fareContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-end",
  },
  horizontalLine: {
    height: 10,
    width: "100%",
    backgroundColor: "#154992",
    borderRadius: 100,
  },
  timeFrame: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});
