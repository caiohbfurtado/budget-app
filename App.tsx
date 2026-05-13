import React from "react";
import { Keyboard, Pressable, StyleSheet, Text, View } from "react-native";

import { StatusBar } from "expo-status-bar";
import { useFonts } from "@expo-google-fonts/lato";
import { Lato_400Regular } from "@expo-google-fonts/lato/400Regular";
import { Lato_700Bold } from "@expo-google-fonts/lato/700Bold";

import CalendarIcon from "./src/assets/icons/calendar.svg";
import DirectionUpRightIcon from "./src/assets/icons/direction-up-right.svg";
import { Button } from "./src/components/Button";
import { Input } from "./src/components/Input";
import { Status } from "./src/components/Status";
import { theme } from "./src/styles/theme";

export default function App() {
  let [fontsLoaded] = useFonts({
    Lato_700Bold,
    Lato_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Pressable style={styles.container} onPress={Keyboard.dismiss}>
      <StatusBar style="auto" />

      <View style={styles.content}>
        <Text style={styles.title}>Input</Text>
        <Input placeholder="Teste de Input" prefix="R$" icon={CalendarIcon} />

        <Text style={styles.title}>Button Primary</Text>
        <Button title="Label" icon={DirectionUpRightIcon} />

        <Text style={styles.title}>Button Secondary</Text>
        <Button title="Label" variant="secondary" icon={DirectionUpRightIcon} />

        <Text style={styles.title}>Button Danger</Text>
        <Button title="Label" variant="danger" icon={DirectionUpRightIcon} />

        <Text style={styles.title}>Status Sent</Text>
        <Status status="sent" />

        <Text style={styles.title}>Status Draft</Text>
        <Status status="draft" />

        <Text style={styles.title}>Status Approved</Text>
        <Status status="approved" />

        <Text style={styles.title}>Status Declined</Text>
        <Status status="declined" />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  content: {
    width: "100%",
    gap: 12,
  },
  title: {
    fontFamily: theme.font.fontFamily.bold,
    fontSize: theme.font.fontSize.md,
    color: theme.colors.base.gray[700],
  },
});
