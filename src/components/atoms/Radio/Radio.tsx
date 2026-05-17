import { Text, TouchableOpacity, View } from "react-native";

import { Status } from "../Status";

import { styles } from "./styles";

export type RadioProps = {
  label: string | React.ReactElement<typeof Status>;
  value: string;
  checked: boolean;
  onPress: (value: string) => void;
};

export function Radio({ label, checked, onPress, value }: RadioProps) {
  const isLabelString = typeof label === "string";
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container}
      onPress={() => onPress(value)}
    >
      <View style={[styles.radio, checked && styles.radioChecked]}>
        {checked && <View style={styles.radioIcon} />}
      </View>

      {isLabelString ? <Text style={styles.radioLabel}>{label}</Text> : label}
    </TouchableOpacity>
  );
}
