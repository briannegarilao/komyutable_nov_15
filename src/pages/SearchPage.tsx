// SearchPage.tsx
import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import SearchBarEditable from "../components/SearchComponents/SearchBarEditable";
import SearchItem from "../components/SearchComponents/SearchItem";

const SearchPage = () => {
  return (
    <View style={styles.container}>
      <SearchBarEditable />
      <SearchItem
        name="Starbucks"
        address="123 Main St"
        distance="0.5 miles"
        onPress={() => {}}
      />
    </View>
  );
};

export default SearchPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
});
