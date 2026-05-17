import { View } from "react-native";

import { Checkbox, CheckboxProps } from "../../atoms/";

import { styles } from "./styles";

type CheckboxGroupProps<T extends string = string> = {
  options: Omit<CheckboxProps<T>, "checked" | "onPress">[];
  value: T[];
  onChange: (value: T) => void;
};

export function CheckboxGroup<T extends string>({
  options,
  value,
  onChange,
}: CheckboxGroupProps<T>) {
  return (
    <View style={styles.container}>
      {options.map((option, index) => (
        <Checkbox
          value={option.value}
          key={index.toString()}
          label={option.label}
          checked={value?.includes(option.value) || false}
          onPress={() => onChange(option.value)}
        />
      ))}
    </View>
  );
}
