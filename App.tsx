import React from "react";

import { useFonts } from "@expo-google-fonts/lato";
import { Lato_400Regular } from "@expo-google-fonts/lato/400Regular";
import { Lato_700Bold } from "@expo-google-fonts/lato/700Bold";

import { SafeAreaProvider } from "react-native-safe-area-context";

import { KeyboardDismissView } from "./src/components";
import { Home } from "./src/screens/Home";

export default function App() {
  let [fontsLoaded] = useFonts({
    Lato_700Bold,
    Lato_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <KeyboardDismissView>
        <Home />
      </KeyboardDismissView>
    </SafeAreaProvider>
  );
}
