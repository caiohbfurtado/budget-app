import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

export type RadioProps = {
  label: string;
  value: string;
  checked: boolean;
  onPress: (value: string) => void;
};

export function Radio({ label, checked, onPress, value }: RadioProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container}
      onPress={() => onPress(value)}
    >
      <View style={[styles.radio, checked && styles.radioChecked]}>
        {checked && <View style={styles.radioIcon} />}
      </View>

      <Text style={styles.radioLabel}>{label}</Text>
    </TouchableOpacity>
  );
}
