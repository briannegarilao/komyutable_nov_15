import { useState, useEffect } from "react";
import { Platform, PermissionsAndroid } from "react-native";

const useRequestLocation = () => {
  const [hasPermission, setHasPermission] = useState(false);

  useEffect(() => {
    const requestPermission = async () => {
      if (Platform.OS === "android") {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
          );
          setHasPermission(granted === PermissionsAndroid.RESULTS.GRANTED);
        } catch (error) {
          console.error("Failed to request location permission", error);
          setHasPermission(false);
        }
      } else {
        setHasPermission(true);
      }
    };

    requestPermission();
  }, []);

  return hasPermission;
};

export default useRequestLocation;
