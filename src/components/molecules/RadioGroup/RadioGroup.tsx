import { View } from "react-native";

import { Radio, RadioProps } from "../../atoms";

import { styles } from "./styles";

type RadioGroupProps = {
  options: Omit<RadioProps, "checked" | "onPress">[];
  value: string;
  onChange: (value: string) => void;
};

export function RadioGroup({ options, value, onChange }: RadioGroupProps) {
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
