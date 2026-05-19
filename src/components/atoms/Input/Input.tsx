import { useState } from "react";
import {
  StyleProp,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from "react-native";

import { SvgProps } from "react-native-svg";

import { theme } from "../../../styles/theme";

import { styles } from "./styles";

type InputProps = TextInputProps & {
  icon?: React.ComponentType<SvgProps>;
  prefix?: string;
  sufix?: string;
  isErrored?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
};

export function Input({
  icon: Icon,
  prefix,
  isErrored,
  containerStyle,
  sufix,
  ...rest
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const { onFocus, onBlur, style, ...textInputProps } = rest;

  return (
    <View
      style={[
        styles.container,
        containerStyle,
        isErrored && { borderColor: theme.colors.feedback.danger.base },
        isFocused && { borderColor: theme.colors.principal.base },
      ]}
    >
      {Icon && (
        <Icon
          fill={theme.colors.base.gray[600]}
          {...(isErrored && { fill: theme.colors.feedback.danger.base })}
          {...(isFocused && { fill: theme.colors.principal.base })}
          width={20}
          height={20}
        />
      )}

      {prefix && (
        <Text
          style={[
            styles.prefix,
            isErrored && { borderColor: theme.colors.feedback.danger.base },
            isFocused && { color: theme.colors.principal.base },
          ]}
        >
          {prefix}
        </Text>
      )}

      <TextInput
        style={[styles.input, style]}
        placeholderTextColor={theme.colors.base.gray[500]}
        cursorColor={theme.colors.principal.base}
        selectionColor={theme.colors.principal.base}
        returnKeyType={textInputProps.returnKeyType ?? "done"}
        onFocus={(event) => {
          setIsFocused(true);
          onFocus?.(event);
        }}
        onBlur={(event) => {
          setIsFocused(false);
          onBlur?.(event);
        }}
        {...textInputProps}
      />

      {sufix && (
        <Text
          style={[
            styles.prefix,
            isErrored && { borderColor: theme.colors.feedback.danger.base },
            isFocused && { color: theme.colors.principal.base },
          ]}
        >
          {sufix}
        </Text>
      )}
    </View>
  );
}
