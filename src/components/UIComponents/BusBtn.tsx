import React from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";

interface BusBtnProps {
  onPress: () => void;
}

const BusBtn: React.FC<BusBtnProps> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.imageContainer}>
      <Image
        style={styles.image}
        source={require("../../../assets/images/bus_btn.png")}
      />
    </TouchableOpacity>
  );
};

export default BusBtn;

const styles = StyleSheet.create({
  imageContainer: {
    height: 60,
    width: 60,
    elevation: 10,
    borderRadius: 100,
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
});
