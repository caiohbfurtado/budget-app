import { Text, View } from "react-native";

import CreditCardIcon from "../../../../assets/icons/credit-card.svg";
import { Input, QuoteSection } from "../../../../components";

import { styles } from "./styles";

export function InvestmentInfo() {
  const renderInvestmentInfo = () => {
    return (
      <View>
        <View style={styles.line}>
          <Text style={[styles.infoLabel, { flex: 1 }]}>Subtotal</Text>
          <Text style={styles.quantityLabel}>8 itens</Text>
          <Text style={styles.infoLabel}>
            <Text style={styles.prefixLabel}>R$ </Text>
            1.000,00
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
              />
            </View>
          </View>

          <View style={[styles.lineContent, { justifyContent: "flex-end" }]}>
            <Text style={styles.infoLabel}>
              <Text style={styles.prefixLabel}>R$ </Text>
              0,00
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
          <Text style={styles.discountValue}>R$ 4.050,00</Text>
          <Text style={styles.totalValue}>
            <Text style={styles.prefixLabel}>R$</Text>
            1.000,00
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
