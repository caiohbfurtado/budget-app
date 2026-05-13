import React from "react";

import { useFonts } from "@expo-google-fonts/lato";
import { Lato_400Regular } from "@expo-google-fonts/lato/400Regular";
import { Lato_700Bold } from "@expo-google-fonts/lato/700Bold";

import { Home } from "./src/app/Home";

export default function App() {
  let [fontsLoaded] = useFonts({
    Lato_700Bold,
    Lato_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return <Home />;
}
