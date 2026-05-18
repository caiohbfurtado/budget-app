import { Text, TouchableOpacity, View } from "react-native";

import MinusIcon from "../../../assets/icons/minus.svg";
import PlusIcon from "../../../assets/icons/plus.svg";
import { theme } from "../../../styles/theme";

import { styles } from "./styles";

type InputNumberProps = {
  value: number;
  onAdd: () => void;
  onSubtract: () => void;
};

export function InputNumber({
  value = 1,
  onAdd,
  onSubtract,
}: InputNumberProps) {
  return (
    <View style={[styles.container]}>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={onSubtract}
        hitSlop={8}
      >
        <MinusIcon width={20} height={20} fill={theme.colors.principal.base} />
      </TouchableOpacity>
      <Text>{value}</Text>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={onAdd}
        hitSlop={8}
      >
        <PlusIcon width={20} height={20} fill={theme.colors.principal.base} />
      </TouchableOpacity>
    </View>
  );
}
