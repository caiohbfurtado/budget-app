import { Text, View } from "react-native";

import PlusIcon from "../../../assets/icons/plus.svg";
import { Button } from "../..";

import { styles } from "./styles";

type HeaderProps = {
  quotesInDraft: number;
  onNewQuotePress: () => void;
};

export function MainHeader({
  quotesInDraft = 0,
  onNewQuotePress,
}: HeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.containerInfo}>
        <Text style={styles.title}>Orçamentos</Text>
        {quotesInDraft > 0 && (
          <Text style={styles.subtitle}>
            Você tem {quotesInDraft} items em rascunho
          </Text>
        )}
      </View>

      <Button title="Novo" onPress={onNewQuotePress} icon={PlusIcon} />
    </View>
  );
}
