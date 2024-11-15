import React, { forwardRef } from "react";
import MapBox, { Camera, LocationPuck, MapView } from "@rnmapbox/maps";
import { StyleSheet } from "react-native";
import Geolocation from "@react-native-community/geolocation";

MapBox.setAccessToken(process.env.EXPO_PUBLIC_MAPBOX_KEY || "");

const compassViewMargins = { x: 10, y: 100 };

const Map = forwardRef((props, ref) => {
  return (
    <MapView
      style={styles.map}
      styleURL="mapbox://styles/mapbox/dark-v11"
      projection="mercator"
      zoomEnabled
      logoEnabled={false}
      compassEnabled
      scaleBarEnabled={false}
      compassViewMargins={compassViewMargins}
      pitchEnabled={false}
      attributionEnabled={false}
    >
      <Camera followUserLocation followZoomLevel={16} />
      <LocationPuck
        puckBearing="heading"
        puckBearingEnabled
        pulsing={{ isEnabled: true }}
        visible={true}
      />
    </MapView>
  );
});

export default Map;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
