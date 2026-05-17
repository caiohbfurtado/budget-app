import { useState } from "react";
import { View } from "react-native";

import ShopIcon from "../../../../assets/icons/shop.svg";
import { Input, QuoteSection } from "../../../../components";

import { styles } from "./styles";

export function GeneralInfo() {
  const [title, setTitle] = useState("");
  const [client, setClient] = useState("");

  const renderBody = () => {
    return (
      <View style={styles.container}>
        <Input placeholder="Título" value={title} onChangeText={setTitle} />
        <Input placeholder="Cliente" value={client} onChangeText={setClient} />
      </View>
    );
  };

  return (
    <QuoteSection
      title="Informações gerais"
      icon={ShopIcon}
      renderBody={renderBody}
    />
  );
}
