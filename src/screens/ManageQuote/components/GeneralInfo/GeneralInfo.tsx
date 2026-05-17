import { View } from "react-native";

import ShopIcon from "../../../../assets/icons/shop.svg";
import { Input, QuoteSection } from "../../../../components";

import { styles } from "./styles";

type GeneralInfoProps = {
  title: string;
  onChangeTitle: (title: string) => void;
  client: string;
  onChangeClient: (client: string) => void;
};

export function GeneralInfo({
  title,
  onChangeTitle,
  client,
  onChangeClient,
}: GeneralInfoProps) {
  const renderBody = () => {
    return (
      <View style={styles.container}>
        <Input
          placeholder="Título"
          value={title}
          onChangeText={onChangeTitle}
        />
        <Input
          placeholder="Cliente"
          value={client}
          onChangeText={onChangeClient}
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
