import { Text, View } from "react-native";

import { styles } from "./styles";

type StatusProps = {
  status: "sent" | "draft" | "approved" | "declined";
};

export function Status({ status }: StatusProps) {
  const statusTitle = {
    sent: "Enviado",
    draft: "Rascunho",
    approved: "Aprovado",
    declined: "Recusado",
  };

  const statusBackgroundColors = {
    sent: styles.containerSent,
    draft: styles.containerDraft,
    approved: styles.containerApproved,
    declined: styles.containerDeclined,
  };

  const statusIndicatorColors = {
    sent: styles.statusIndicatorSent,
    draft: styles.statusIndicatorDraft,
    approved: styles.statusIndicatorApproved,
    declined: styles.statusIndicatorDeclined,
  };

  const stausTitleColors = {
    sent: styles.statusTitleSent,
    draft: styles.statusTitleDraft,
    approved: styles.statusTitleApproved,
    declined: styles.statusTitleDeclined,
  };

  return (
    <View style={[styles.container, statusBackgroundColors[status]]}>
      <View style={[styles.statusIndicator, statusIndicatorColors[status]]} />

      <Text style={[styles.statusTitle, stausTitleColors[status]]}>
        {statusTitle[status]}
      </Text>
    </View>
  );
}
