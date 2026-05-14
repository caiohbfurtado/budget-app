import { Text, TouchableOpacity, View } from "react-native";

import CloseIcon from "../../../../../assets/icons/multiply.svg";

import { styles } from "./styles";

type HandleComponentProps = {
  title: string;
  onClose: () => void;
};

export function HandleComponent({ title, onClose }: HandleComponentProps) {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>{title}</Text>

      <TouchableOpacity onPress={onClose}>
        <CloseIcon width={24} height={24} />
      </TouchableOpacity>
    </View>
  );
}
