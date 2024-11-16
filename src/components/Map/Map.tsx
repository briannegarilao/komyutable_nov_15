import React, { forwardRef } from "react";
import MapBox, {
  Camera,
  LocationPuck,
  MapView,
  ShapeSource,
  LineLayer,
  PointAnnotation,
} from "@rnmapbox/maps";
import { StyleSheet } from "react-native";
import colors from "../../constants/colors";
import useFetchBusLocations from "../../hooks/useFetchBusLocation";
import BusIcon from "../../components/Map/BusIcon";

MapBox.setAccessToken(process.env.EXPO_PUBLIC_MAPBOX_KEY || "");

interface MapProps {
  routeCoordinates: [number, number][];
}

const Map = forwardRef<MapView, MapProps>(({ routeCoordinates }, ref) => {
  const { busLocations } = useFetchBusLocations(); // Fetch bus locations

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

      {/* Render the route if there are coordinates */}
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

      {/* Render bus icons for each bus */}
      {busLocations.map((bus) => (
        <BusIcon key={bus.id} busCoordinate={bus.location} />
      ))}

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
