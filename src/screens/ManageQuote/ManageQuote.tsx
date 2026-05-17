import { ScrollView } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { Header } from "../../components";
import { StackRoutesProps } from "../../routes";

import { GeneralInfo, StatusInfo } from "./components";
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
        <GeneralInfo />
        <StatusInfo />
      </ScrollView>
    </SafeAreaView>
  );
}
