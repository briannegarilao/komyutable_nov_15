import { useState, useEffect } from "react";
import firestore from "@react-native-firebase/firestore";
import { getDirections } from "../services/directions";

const useRoutes = () => {
  const [routeCoordinates, setRouteCoordinates] = useState<[number, number][]>(
    []
  );

  useEffect(() => {
    const fetchAndProcessRoutes = async () => {
      try {
        // Fetch route coordinates from Firestore
        const documentSnapshot = await firestore()
          .collection("routes")
          .doc("busRoutes")
          .collection("busEDSARoutes")
          .doc("busNorthbound")
          .get();

        if (documentSnapshot.exists) {
          const data = documentSnapshot.data();
          if (data && Array.isArray(data.stops)) {
            const coordinates = data.stops
              .map((stop: any) =>
                stop.geopoint
                  ? [stop.geopoint.longitude, stop.geopoint.latitude]
                  : null
              )
              .filter((coord): coord is [number, number] => coord !== null);

            // Fetch processed route data from Mapbox
            if (coordinates.length > 0) {
              const directions = await getDirections(coordinates);
              const route =
                directions?.routes?.[0]?.geometry?.coordinates || [];
              setRouteCoordinates(route);
            }
          }
        }
      } catch (error) {
        console.error("Error fetching and processing routes:", error);
      }
    };

    fetchAndProcessRoutes();
  }, []);

  return routeCoordinates;
};

export default useRoutes;
