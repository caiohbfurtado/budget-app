import { useState } from "react";
import { Keyboard, Pressable, StyleSheet, Text, View } from "react-native";

import CalendarIcon from "../../assets/icons/calendar.svg";
import DirectionUpRightIcon from "../../assets/icons/direction-up-right.svg";
import { theme } from "../../styles/theme";

import { Button } from "./Button";
import { Checkbox } from "./Checkbox";
import { Input } from "./Input";
import { Radio } from "./Radio";
import { Status } from "./Status";

export function ComponentsPlayground() {
  const [isCheckedCheckbox, setIsCheckedCheckbox] = useState(false);
  const [isCheckedRadio, setIsCheckedRadio] = useState(false);

  return (
    <Pressable style={styles.container} onPress={Keyboard.dismiss}>
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

        <Text style={styles.title}>Checkbox</Text>
        <Checkbox
          label="Checkbox label"
          checked={isCheckedCheckbox}
          onPress={() => setIsCheckedCheckbox((prevState) => !prevState)}
        />

        <Text style={styles.title}>Radio</Text>
        <Radio
          label="Radio label"
          checked={isCheckedRadio}
          onPress={() => setIsCheckedRadio((prevState) => !prevState)}
        />
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
