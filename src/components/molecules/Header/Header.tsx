import { Text, TouchableOpacity, View } from "react-native";

import { useNavigation } from "@react-navigation/native";

import ChevronIcon from "../../../assets/icons/chevron-left.svg";
import { theme } from "../../../styles/theme";
import { QuoteStatus, Status } from "../../";

import { styles } from "./styles";

type HeaderProps = {
  title: string;
  status?: QuoteStatus;
};

export function Header({ title, status }: HeaderProps) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ChevronIcon
            width={24}
            height={24}
            fill={theme.colors.base.gray[600]}
          />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
      </View>

      {status && <Status status={status} />}
    </View>
  );
}
