import React from "react";
import { View, StyleSheet } from "react-native";
import SearchBarEditable from "../components/SearchComponents/SearchBarEditable";
import SearchItem from "../components/SearchComponents/SearchItem";
import { useNavigation } from "@react-navigation/native";

const SearchPage = () => {
  const navigation = useNavigation<any>();

  // Handle the search item press
  const handleSearchItemPress = () => {
    navigation.navigate("Home", { expandDrawer: true });
  };

  return (
    <View style={styles.container}>
      <SearchBarEditable />
      <SearchItem
        name="SM North EDSA"
        address="North Avenue, corner Epifanio..."
        distance="24.2 miles"
        onPress={handleSearchItemPress}
      />
    </View>
  );
};

export default SearchPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
