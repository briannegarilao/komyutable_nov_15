import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";

interface LocateBtnProps {
  onPress: () => void;
}

const LocateBtn: React.FC<LocateBtnProps> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.imageContainer}>
      <Image
        style={styles.image}
        source={require("../../../assets/images/loc_btn.png")}
      />
    </TouchableOpacity>
  );
};

export default LocateBtn;

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
