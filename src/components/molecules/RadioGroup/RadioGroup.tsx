import { View } from "react-native";

import { Radio, RadioProps } from "../../atoms";

import { styles } from "./styles";

type RadioGroupProps<T extends string = string> = {
  options: Omit<RadioProps<T>, "checked" | "onPress">[];
  value: T;
  onChange: (value: T) => void;
};

export function RadioGroup<T extends string>({
  options,
  value,
  onChange,
}: RadioGroupProps<T>) {
  return (
    <View style={styles.container}>
      {options.map((option, index) => (
        <Radio
          value={option.value}
          key={index.toString()}
          label={option.label}
          checked={value === option.value}
          onPress={() => onChange(option.value)}
        />
      ))}
    </View>
  );
}
