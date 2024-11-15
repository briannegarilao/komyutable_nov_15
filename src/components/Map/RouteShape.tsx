import React from "react";
import { ShapeSource, LineLayer } from "@rnmapbox/maps";
import colors from "../../constants/colors";

interface RouteShapeProps {
  coordinates: [number, number][] | undefined;
}

const RouteShape: React.FC<RouteShapeProps> = ({ coordinates }) => {
  if (!coordinates) return null;

  return (
    <ShapeSource
      id="routeSource"
      lineMetrics
      shape={{
        properties: {},
        type: "Feature",
        geometry: {
          type: "LineString",
          coordinates,
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
  );
};

export default RouteShape;
