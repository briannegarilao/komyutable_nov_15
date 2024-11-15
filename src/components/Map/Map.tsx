import React, { forwardRef } from "react";
import MapBox, { Camera, LocationPuck, MapView } from "@rnmapbox/maps";
import { StyleSheet } from "react-native";
import useFetchRoutes from "../../hooks/useFetchRoutes";
import useRouteCoordinates from "../../hooks/useRouteCoordinates";
import RouteShape from "./RouteShape";

MapBox.setAccessToken(process.env.EXPO_PUBLIC_MAPBOX_KEY || "");

const Map = forwardRef((props, ref) => {
  // Fetch routes using the custom hook
  const coordinates: [number, number][] = useFetchRoutes() || [];

  // Use the new custom hook
  const routeCoordinates = useRouteCoordinates(coordinates);

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
        <RouteShape coordinates={routeCoordinates} />
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
