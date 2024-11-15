import React from "react";
import BusIcon from "./BusIcon";

interface RenderBusesProps {
  busLocations: { id: string; location: [number, number] }[];
  onBusPress: (location: [number, number]) => void;
}

const RenderBuses: React.FC<RenderBusesProps> = ({ busLocations }) => {
  return (
    <>
      {busLocations.map((bus) => (
        <BusIcon key={bus.id} busCoordinate={bus.location} />
      ))}
    </>
  );
};

export default RenderBuses;
