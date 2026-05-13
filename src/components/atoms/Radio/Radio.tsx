import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

type RadioProps = {
  label: string;
  checked: boolean;
  onPress: () => void;
};

export function Radio({ label, checked, onPress }: RadioProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container}
      onPress={onPress}
    >
      <View style={[styles.radio, checked && styles.radioChecked]}>
        {checked && <View style={styles.radioIcon} />}
      </View>

      <Text style={styles.radioLabel}>{label}</Text>
    </TouchableOpacity>
  );
}
