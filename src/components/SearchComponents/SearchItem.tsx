// SearchItem.tsx
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

interface SearchItemProps {
  name: string;
  address: string;
  distance: string;
  onPress: () => void;
}

const SearchItem: React.FC<SearchItemProps> = ({
  name,
  address,
  distance,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.locDistanceContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../../assets/images/loc_icon_gray01.png")}
            style={styles.image}
          />
        </View>

        <Text style={{ fontSize: 14 }}>5.2km</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.address}>{address}</Text>
      </View>

      <View style={styles.arrowContainer}>
        <Image
          source={require("../../../assets/images/arrow_rotated.png")}
          style={styles.arrowImage}
        />
      </View>
    </TouchableOpacity>
  );
};

export default SearchItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 9,
    gap: 16,
    width: "100%",
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 20,
  },
  address: {
    fontSize: 16,
    color: "#777",
  },
  distance: {
    fontSize: 12,
    color: "#777",
  },
  locDistanceContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    height: 18,
    width: 18,
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  arrowContainer: {
    height: 24,
    width: 24,
  },
  arrowImage: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
});
