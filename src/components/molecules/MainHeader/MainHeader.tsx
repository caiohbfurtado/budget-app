import { Text, View } from "react-native";

import PlusIcon from "../../../assets/icons/plus.svg";
import { Button } from "../..";

import { styles } from "./styles";

type HeaderProps = {
  hasDraft: boolean;
};

export function MainHeader({ hasDraft = true }: HeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.containerInfo}>
        <Text style={styles.title}>Orçamentos</Text>
        {hasDraft && (
          <Text style={styles.subtitle}>Você tem 1 item em rascunho</Text>
        )}
      </View>

      <Button
        title="Novo"
        onPress={() => console.log("Button pressed")}
        icon={PlusIcon}
      />
    </View>
  );
}
