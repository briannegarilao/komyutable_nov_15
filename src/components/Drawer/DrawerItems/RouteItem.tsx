import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import JeepRide from "./Ride Icons/JeepRide";
import BusRide from "./Ride Icons/BusRide";
import TrainRide from "./Ride Icons/TrainRide";

interface RouteItemProps {
  onPress: () => void;
  rides: string[];
  fare: string;
  duration: string;
  distance: string;
}

const RouteItem: React.FC<RouteItemProps> = ({
  onPress,
  rides,
  fare,
  duration,
  distance,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.upperContainer}>
        <View style={styles.rideContainer}>
          {rides.includes("JeepRide") && <JeepRide />}
          {rides.includes("BusRide") && <BusRide />}
          {rides.includes("TrainRide") && <TrainRide />}
        </View>
        <View style={styles.fareContainer}>
          <Text style={{ fontSize: 14, color: "#1d1d1d" }}>₱{fare}</Text>
          <Text style={{ fontSize: 14, color: "#777" }}>{duration}</Text>
          <Text style={{ fontSize: 14, color: "#777" }}>{distance}</Text>
        </View>
      </View>
    </TouchableOpacity>
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
});
