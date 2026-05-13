import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";

import CheckedIcon from "../../assets/icons/check.svg";

import { styles } from "./styles";

type CheckboxProps = TouchableOpacityProps & {
  label: string;
  checked: boolean;
};

export function Checkbox({ label, checked, ...rest }: CheckboxProps) {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.container} {...rest}>
      <View style={[styles.checkbox, checked && styles.checkboxChecked]}>
        {checked && <CheckedIcon fill="#FFF" width={16} height={16} />}
      </View>

      <Text style={styles.checkboxLabel}>{label}</Text>
    </TouchableOpacity>
  );
}
