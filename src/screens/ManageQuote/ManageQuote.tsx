import { ScrollView, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { Header, QuoteSection } from "../../components";
import { StackRoutesProps } from "../../routes";

import { styles } from "./styles";

export function ManageQuote({ navigation }: StackRoutesProps<"ManageQuote">) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <Header title="Orçamento" />

      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <QuoteSection title="Informações gerais" />
      </ScrollView>
    </SafeAreaView>
  );
}
