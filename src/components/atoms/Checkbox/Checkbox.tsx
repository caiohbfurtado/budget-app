import { Text, TouchableOpacity, View } from "react-native";

import CheckedIcon from "../../../assets/icons/check.svg";
import { Status } from "../..";

import { styles } from "./styles";

export type CheckboxProps<T extends string = string> = {
  label: string | React.ReactElement<typeof Status>;
  checked: boolean;
  onPress: (value: T) => void;
  value: T;
};

export function Checkbox<T extends string>({
  label,
  checked,
  onPress,
  value,
}: CheckboxProps<T>) {
  const isLabelString = typeof label === "string";
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container}
      onPress={() => onPress(value)}
    >
      <View style={[styles.checkbox, checked && styles.checkboxChecked]}>
        {checked && <CheckedIcon fill="#FFF" width={16} height={16} />}
      </View>

      {isLabelString ? (
        <Text style={styles.checkboxLabel}>{label}</Text>
      ) : (
        label
      )}
    </TouchableOpacity>
  );
}
