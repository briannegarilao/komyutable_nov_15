import { View, StyleSheet, Image } from "react-native";
import React from "react";

const CompassBtn = () => {
  return (
    <View style={styles.imageContainer}>
      <Image
        style={styles.image}
        source={require("../../../assets/images/compass_btn.png")}
      />
    </View>
  );
};

export default CompassBtn;

const styles = StyleSheet.create({
  imageContainer: {
    height: 44,
    width: 44,
    elevation: 10,
    borderRadius: 100,
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
});
