import { SafeAreaView } from "react-native-safe-area-context";

import { Header } from "../../components";
import { StackRoutesProps } from "../../routes";

export function NewQuote({ navigation }: StackRoutesProps<"NewQuote">) {
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
