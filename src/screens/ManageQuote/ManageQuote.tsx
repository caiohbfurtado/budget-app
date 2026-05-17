import { useState } from "react";
import { ScrollView } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { Header, QuoteStatus } from "../../components";
import { StackRoutesProps } from "../../routes";

import { GeneralInfo, ServicesIncludedInfo, StatusInfo } from "./components";
import { styles } from "./styles";

export function ManageQuote({ navigation }: StackRoutesProps<"ManageQuote">) {
  const [title, setTitle] = useState("");
  const [client, setClient] = useState("");
  const [status, setStatus] = useState<QuoteStatus>("approved");

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
        <GeneralInfo
          title={title}
          onChangeTitle={setTitle}
          client={client}
          onChangeClient={setClient}
        />

        <StatusInfo status={status} onChangeStatus={setStatus} />

        <ServicesIncludedInfo />
      </ScrollView>
    </SafeAreaView>
  );
}
