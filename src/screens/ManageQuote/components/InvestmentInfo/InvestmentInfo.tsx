import { Text, View } from "react-native";

import CreditCardIcon from "../../../../assets/icons/credit-card.svg";
import { Input, QuoteSection } from "../../../../components";
import { theme } from "../../../../styles/theme";
import { ServiceProps } from "../../ManageQuote";

import { styles } from "./styles";

type InvestmentInfoProps = {
  services: ServiceProps[];
  discount: number;
  onChangeDiscount: (discount: string) => void;
};

export function InvestmentInfo({
  services,
  discount,
  onChangeDiscount,
}: InvestmentInfoProps) {
  const subtotal = services.reduce((acc, service) => {
    return acc + service.price * service.quantity;
  }, 0);

  const discountValue = (subtotal * discount) / 100;
  const hasDiscount = discountValue > 0;
  const total = hasDiscount ? subtotal - discountValue : subtotal;

  const renderInvestmentInfo = () => {
    return (
      <View>
        <View style={styles.line}>
          <Text style={[styles.infoLabel, { flex: 1 }]}>Subtotal</Text>
          <Text style={styles.quantityLabel}>{services.length} itens</Text>
          <Text style={styles.infoLabel}>
            <Text style={styles.prefixLabel}>R$ </Text>
            {subtotal.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </Text>
        </View>

        <View style={styles.line}>
          <View style={styles.lineContent}>
            <View
              style={[
                styles.line,
                {
                  justifyContent: "flex-start",
                  gap: 8,
                },
              ]}
            >
              <Text style={styles.infoLabel}>Desconto</Text>

              <Input
                sufix="%"
                maxLength={2}
                keyboardType="numeric"
                containerStyle={styles.compactInputContainer}
                style={styles.compactInput}
                value={discount.toString()}
                onChangeText={(e) => onChangeDiscount(e)}
              />
            </View>
          </View>

          <View style={[styles.lineContent, { justifyContent: "flex-end" }]}>
            <Text
              style={[
                styles.infoLabel,
                hasDiscount && { color: theme.colors.feedback.danger.base },
              ]}
            >
              <Text
                style={[
                  styles.prefixLabel,
                  hasDiscount && { color: theme.colors.feedback.danger.base },
                ]}
              >
                {discountValue > 0 && "- "}R${" "}
              </Text>
              {discountValue.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const renderFooter = () => {
    return (
      <View style={styles.footerContainer}>
        <Text style={styles.totalLabel}>Valor total</Text>

        <View>
          {hasDiscount && (
            <Text style={styles.discountValue}>
              <Text style={styles.prefixLabel}>R$ </Text>
              {discountValue.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </Text>
          )}

          <Text style={styles.totalValue}>
            <Text style={styles.prefixLabel}>R$ </Text>
            {total.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <QuoteSection
      title="Investimento"
      icon={CreditCardIcon}
      renderBody={renderInvestmentInfo}
      renderFooter={renderFooter}
    />
  );
}
