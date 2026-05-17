import { View } from "react-native";

import ServicesIncludedIcon from "../../../../assets/icons/note-with-text.svg";
import PlusIcon from "../../../../assets/icons/plus.svg";
import { Button, QuoteSection } from "../../../../components";

export function ServicesIncludedInfo() {
  const renderServicesIncluded = () => {
    return (
      <View>
        <Button
          icon={PlusIcon}
          title="Adicionar serviço"
          onPress={() => {}}
          fullWidth
          variant="secondary"
        />
      </View>
    );
  };

  return (
    <QuoteSection
      title="Serviços Inclusos"
      icon={ServicesIncludedIcon}
      renderBody={renderServicesIncluded}
    />
  );
}
