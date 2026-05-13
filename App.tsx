import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { StatusBar } from "expo-status-bar";
import { useFonts } from "@expo-google-fonts/lato";
import { Lato_400Regular } from "@expo-google-fonts/lato/400Regular";
import { Lato_700Bold } from "@expo-google-fonts/lato/700Bold";

export default function App() {
  let [fontsLoaded] = useFonts({
    Lato_700Bold,
    Lato_400Regular,
  });
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
