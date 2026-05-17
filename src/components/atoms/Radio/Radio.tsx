import { Text, TouchableOpacity, View } from "react-native";

import { Status } from "../Status";

import { styles } from "./styles";

export type RadioProps<T extends string = string> = {
  label: string | React.ReactElement<typeof Status>;
  value: T;
  checked: boolean;
  onPress: (value: T) => void;
};

export function Radio<T extends string>({
  label,
  checked,
  onPress,
  value,
}: RadioProps<T>) {
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
