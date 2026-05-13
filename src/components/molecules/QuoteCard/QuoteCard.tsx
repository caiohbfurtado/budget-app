import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";

import { QuoteStatus, Status } from "../../atoms/Status/Status";

import { styles } from "./styles";

type QuoteCardProps = TouchableOpacityProps & {
  title: string;
  description: string;
  value: number;
  status: QuoteStatus;
};

export function QuoteCard({
  title,
  description,
  value,
  status,
}: QuoteCardProps) {
  const formattedValue = value
    .toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })
    .replace("R$", "")
    .trim();

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.mainInfoContainer}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
        <Text style={styles.description} numberOfLines={2}>
          {description}
        </Text>
      </View>
      <Text style={styles.value}>{formattedValue}</Text>

      <View style={{ position: "absolute", top: 8, right: 8 }}>
        <Status status={status} />
      </View>
    </TouchableOpacity>
  );
}
