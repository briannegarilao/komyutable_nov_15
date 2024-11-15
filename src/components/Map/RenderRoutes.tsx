// RenderRoutes.tsx

import React from "react";
import RouteShape from "./RouteShape";

interface RenderRoutesProps {
  routeCoordinates: [number, number][];
}

const RenderRoutes: React.FC<RenderRoutesProps> = ({ routeCoordinates }) => {
  return routeCoordinates.length > 0 ? (
    <RouteShape coordinates={routeCoordinates} />
  ) : null;
};

export default RenderRoutes;
