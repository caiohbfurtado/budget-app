import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import { SvgProps } from "react-native-svg";

import { styles } from "./styles";

type ButtonProps = TouchableOpacityProps & {
  title?: string;
  icon?: React.ComponentType<SvgProps>;
  variant?: "primary" | "secondary" | "danger";
};

export function Button({
  title,
  icon: Icon,
  variant = "primary",
  ...rest
}: ButtonProps) {
  const variantStyles = {
    primary: styles.containerPrimary,
    secondary: styles.containerSecondary,
    danger: styles.containerDanger,
  };

  const textVariantStyles = {
    primary: styles.textPrimary,
    secondary: styles.textSecondary,
    danger: styles.textDanger,
  };

  const iconVariantColor = {
    primary: styles.textPrimary.color,
    secondary: styles.textSecondary.color,
    danger: styles.textDanger.color,
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.container, variantStyles[variant]]}
      {...rest}
    >
      {Icon && <Icon width={24} height={24} fill={iconVariantColor[variant]} />}

      {title && (
        <Text style={[styles.text, textVariantStyles[variant]]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}
