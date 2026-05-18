import { Text, TouchableOpacity, View } from "react-native";

import EditIcon from "../../../../assets/icons/edit-pen.svg";
import ServicesIncludedIcon from "../../../../assets/icons/note-with-text.svg";
import PlusIcon from "../../../../assets/icons/plus.svg";
import { Button, QuoteSection } from "../../../../components";
import { theme } from "../../../../styles/theme";
import { ServiceProps } from "../../ManageQuote";

import { styles } from "./styles";

type ServicesIncludedInfoProps = {
  onAddService?: () => void;
  services: ServiceProps[];
};

export function ServicesIncludedInfo({
  onAddService,
  services,
}: ServicesIncludedInfoProps) {
  const renderServicesIncluded = () => {
    return (
      <View style={styles.container}>
        {services.map((service, index) => (
          <View key={index} style={styles.serviceContainer}>
            <View style={styles.serviceVerticalContainer}>
              <Text style={styles.serviceTitle}>{service.title}</Text>
              <Text style={styles.serviceDescription} numberOfLines={1}>
                {service.description}
              </Text>
            </View>

            <View
              style={[
                styles.serviceVerticalContainer,
                { alignItems: "flex-end" },
              ]}
            >
              <View style={styles.serviceHorizontalContainer}>
                <Text style={styles.servicePricePrefix}>R$</Text>
                <Text style={styles.servicePrice}>{service.price}</Text>
              </View>
              <Text style={styles.serviceQuantity}>Qt: {service.quantity}</Text>
            </View>

            <TouchableOpacity>
              <EditIcon
                width={20}
                height={20}
                fill={theme.colors.principal.base}
              />
            </TouchableOpacity>
          </View>
        ))}
        <Button
          icon={PlusIcon}
          title="Adicionar serviço"
          onPress={onAddService}
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
