// SearchBar.js
import React from "react";
import {
  TouchableOpacity,
  View,
  Image,
  TextInput,
  StyleSheet,
} from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../../types/types";

import colors from "../../constants/colors";

interface SearchBarProps {
  onPress: () => void;
}

const SearchBar = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [location, onChangeLocation] = React.useState("");

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Search")}
      style={styles.container}
    >
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../../assets/images/location_icon.png")}
        />
      </View>

      <TextInput
        style={styles.input}
        onChangeText={onChangeLocation}
        value={location}
        placeholder="Search here"
        editable={false}
        pointerEvents="none"
      />
    </TouchableOpacity>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 100,
    gap: 8,
    elevation: 16,
  },
  imageContainer: {
    height: 24,
    width: 24,
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  input: {
    fontSize: 24,
  },
});
