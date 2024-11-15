import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

const DirectionContainer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../../assets/images/bus_icon.png")}
        />
      </View>
      <View style={styles.descContainer}>
        <Text style={{ fontSize: 16 }}>Walk to Aguinaldo Highway</Text>
        <Text style={{ fontSize: 14 }}>12:34 PM - 4:00 PM</Text>
      </View>
    </View>
  );
};

export default DirectionContainer;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    borderRadius: 8,
    gap: 8,
    padding: 16,
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
  descContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
});
