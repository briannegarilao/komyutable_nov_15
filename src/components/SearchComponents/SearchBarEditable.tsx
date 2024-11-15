// SearchBarEditable.tsx
import React from "react";
import {
  TouchableOpacity,
  View,
  Image,
  TextInput,
  StyleSheet,
} from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../../types/types"; // Update the path to your type definitions

const SearchBarEditable = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [location, onChangeLocation] = React.useState("");

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Image
          style={styles.backImage}
          source={require("../../../assets/images/back_btn.png")}
        />
      </TouchableOpacity>

      {/* Search input */}
      <TextInput
        style={styles.input}
        onChangeText={onChangeLocation}
        value={location}
        placeholder="Search here"
        autoFocus // Automatically focuses on this input when SearchPage opens
      />
    </View>
  );
};

export default SearchBarEditable;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f3f3f3",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 100,
    gap: 8,
  },
  backButton: {
    marginRight: 8,
  },
  backImage: {
    height: 24,
    width: 24,
    resizeMode: "contain",
  },
  input: {
    fontSize: 18,
    flex: 1,
  },
});
