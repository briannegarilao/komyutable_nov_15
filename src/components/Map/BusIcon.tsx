import { PointAnnotation } from "@rnmapbox/maps";
import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

const busIcon = require("../../../assets/images/bus_icon.png");

interface BusIconProps {
  busCoordinate: [number, number];
}

const BusIcon: React.FC<BusIconProps> = React.memo(({ busCoordinate }) => {
  return (
    <PointAnnotation
      key={`bus-${busCoordinate[0]}-${busCoordinate[1]}`}
      id={`busAnnotation-${busCoordinate[0]}-${busCoordinate[1]}`}
      coordinate={busCoordinate}
    >
      <TouchableOpacity>
        <Image source={busIcon} style={styles.image} />
      </TouchableOpacity>
    </PointAnnotation>
  );
});

export default BusIcon;

const styles = StyleSheet.create({
  image: {
    height: 50,
    width: 50,
    resizeMode: "contain",
  },
});
