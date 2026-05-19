import { View } from "react-native";

import ShopIcon from "../../../../assets/icons/shop.svg";
import { Input, QuoteSection } from "../../../../components";
import { useQuote } from "../../../../hooks/useQuote";

import { styles } from "./styles";

export function GeneralInfo() {
  const { quote, setClient, setTitle } = useQuote();

  const renderBody = () => {
    return (
      <View style={styles.container}>
        <Input
          placeholder="Título"
          value={quote.title}
          onChangeText={setTitle}
        />
        <Input
          placeholder="Cliente"
          value={quote.client}
          onChangeText={setClient}
        />
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
