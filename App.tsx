import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { enableScreens } from "react-native-screens";

import HomePage from "./src/pages/HomePage";
import SearchPage from "./src/pages/SearchPage";
import colors from "./src/constants/colors";

enableScreens();

// Define the navigation param list
type RootStackParamList = {
  Home: undefined;
  Search: undefined;
};

// Create the stack navigator
const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <SafeAreaView style={styles.container}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Home" component={HomePage} />
              <Stack.Screen name="Search" component={SearchPage} />
            </Stack.Navigator>
            <StatusBar style="auto" />
          </SafeAreaView>
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
