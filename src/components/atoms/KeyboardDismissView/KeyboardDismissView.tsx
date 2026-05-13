import { PropsWithChildren } from "react";
import {
  Keyboard,
  StyleProp,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from "react-native";

type KeyboardDismissViewProps = PropsWithChildren<{
  style?: StyleProp<ViewStyle>;
}>;

export function KeyboardDismissView({
  children,
  style,
}: KeyboardDismissViewProps) {
  return (
    <TouchableWithoutFeedback accessible={false} onPress={Keyboard.dismiss}>
      <View style={[{ flex: 1 }, style]}>{children}</View>
    </TouchableWithoutFeedback>
  );
}
