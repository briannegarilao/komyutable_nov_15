import { useEffect, useState } from "react";
import database from "@react-native-firebase/database";

interface BusData {
  id: string;
  location: [number, number];
}

const useFetchBusLocations = () => {
  const [busLocations, setBusLocations] = useState<BusData[]>([]);

  useEffect(() => {
    const reference = database().ref("/busDetails");

    const onValueChange = reference.on("value", (snapshot) => {
      const data = snapshot.val();

      if (data) {
        const buses = Object.keys(data)
          .map((busId) => {
            const bus = data[busId];
            if (
              bus.location &&
              bus.location.longitude !== undefined &&
              bus.location.latitude !== undefined
            ) {
              return {
                id: busId,
                location: [bus.location.longitude, bus.location.latitude] as [
                  number,
                  number
                ],
              };
            }
            return null;
          })
          .filter(Boolean);

        setBusLocations(buses as BusData[]);
      } else {
        console.log("No bus data found.");
      }
    });

    return () => reference.off("value", onValueChange);
  }, []);

  return { busLocations };
};

export default useFetchBusLocations;
