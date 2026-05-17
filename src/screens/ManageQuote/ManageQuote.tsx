import { SafeAreaView } from "react-native-safe-area-context";

import { Header } from "../../components";
import { StackRoutesProps } from "../../routes";

export function ManageQuote({ navigation }: StackRoutesProps<"ManageQuote">) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <Header title="Orçamento" />
    </SafeAreaView>
  );
}
