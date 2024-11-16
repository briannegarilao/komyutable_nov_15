import React, { forwardRef } from "react";
import MapBox, {
  Camera,
  LocationPuck,
  MapView,
  ShapeSource,
  LineLayer,
} from "@rnmapbox/maps";
import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

MapBox.setAccessToken(process.env.EXPO_PUBLIC_MAPBOX_KEY || "");

interface MapProps {
  routeCoordinates: [number, number][];
}

const Map = forwardRef<MapView, MapProps>(({ routeCoordinates }, ref) => {
  return (
    <MapView
      style={styles.map}
      styleURL="mapbox://styles/mapbox/dark-v11"
      projection="mercator"
      zoomEnabled
      logoEnabled={false}
      compassEnabled
      compassPosition={{ top: 100, right: 16 }}
      scaleBarEnabled={false}
      pitchEnabled={false}
      attributionEnabled={false}
    >
      <Camera followUserLocation followZoomLevel={16} />

      {routeCoordinates.length > 0 && (
        <ShapeSource
          id="routeSource"
          lineMetrics
          shape={{
            properties: {},
            type: "Feature",
            geometry: {
              type: "LineString",
              coordinates: routeCoordinates,
            },
          }}
        >
          <LineLayer
            id="exampleLineLayer"
            style={{
              lineColor: colors.main,
              lineCap: "round",
              lineJoin: "round",
              lineWidth: 8,
            }}
          />
        </ShapeSource>
      )}

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
