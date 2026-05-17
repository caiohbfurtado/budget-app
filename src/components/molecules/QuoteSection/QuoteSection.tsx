import { Text, View } from "react-native";

import { SvgProps } from "react-native-svg";

import { theme } from "../../../styles/theme";

import { styles } from "./styles";

type QuoteSectionProps = {
  title: string;
  icon: React.ComponentType<SvgProps>;
  renderBody: () => React.ReactNode;
  renderFooter?: () => React.ReactNode;
};

export function QuoteSection({
  title,
  icon: Icon,
  renderBody,
  renderFooter,
}: QuoteSectionProps) {
  const hasBody = Boolean(renderBody);
  const hasFooter = Boolean(renderFooter);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Icon width={20} height={20} fill={theme.colors.principal.base} />
        <Text style={styles.title}>{title}</Text>
      </View>

      {hasBody && <View style={styles.bodyContainer}>{renderBody()}</View>}

      {hasFooter && (
        <View style={styles.footerContainer}>{renderFooter?.()}</View>
      )}
    </View>
  );
}
