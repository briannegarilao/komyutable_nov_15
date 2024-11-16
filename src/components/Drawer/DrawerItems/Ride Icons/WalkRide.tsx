import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

const WalkRide = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../../../../assets/images/mini_walk_icon.png")}
        />
      </View>
      <Text style={{ fontSize: 14, color: "#154992" }}>TRAIN</Text>
    </View>
  );
};

export default WalkRide;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    height: 40,
    width: 40,
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
});