import { View } from "react-native";

import { Checkbox, CheckboxProps } from "../../atoms/Checkbox/Checkbox";

import { styles } from "./styles";

type CheckboxGroupProps = {
  options: Omit<CheckboxProps, "checked">[];
  value?: string[];
};

export function CheckboxGroup({ options, value }: CheckboxGroupProps) {
  return (
    <View style={styles.container}>
      {options.map((option, index) => (
        <Checkbox
          value={option.value}
          key={index.toString()}
          label={option.label}
          checked={value?.includes(option.value) || false}
          onPress={option.onPress}
        />
      ))}
    </View>
  );
}
