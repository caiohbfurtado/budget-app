import { Text, TouchableOpacity, View } from "react-native";

import EditIcon from "../../../../assets/icons/edit-pen.svg";
import ServicesIncludedIcon from "../../../../assets/icons/note-with-text.svg";
import PlusIcon from "../../../../assets/icons/plus.svg";
import { Button, QuoteSection } from "../../../../components";
import { useQuote } from "../../../../hooks/useQuote";
import { theme } from "../../../../styles/theme";

import { styles } from "./styles";

export function ServicesIncludedInfo() {
  const { openEditServiceSheet, openNewServiceSheet, quote } = useQuote();

  const renderServicesIncluded = () => {
    return (
      <View style={styles.container}>
        {quote.services.map((service) => (
          <View key={service.id} style={styles.serviceContainer}>
            <View style={[styles.serviceVerticalContainer, { flex: 1 }]}>
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

            <TouchableOpacity onPress={() => openEditServiceSheet(service.id)}>
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
          onPress={openNewServiceSheet}
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
