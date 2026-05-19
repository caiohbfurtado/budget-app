import { Text, View } from "react-native";

import {
  CheckboxGroup,
  QuoteStatus,
  RadioGroup,
  Status,
} from "../../../../components";

import { styles } from "./styles";

export type OrderFilter =
  | "recentlyCreated"
  | "oldestCreated"
  | "highestValue"
  | "lowestValue";

type FilterBottomSheetProps = {
  statusFilter: QuoteStatus[];
  orderFilter: OrderFilter;
  handlePressStatusFilter: (status: QuoteStatus) => void;
  handlePressOrderFilter: (order: OrderFilter) => void;
};

export function FilterBottomSheet({
  statusFilter,
  orderFilter,
  handlePressStatusFilter,
  handlePressOrderFilter,
}: FilterBottomSheetProps) {
  return (
    <View style={styles.bottomsheetContentContainer}>
      <View style={styles.filterContainer}>
        <Text style={styles.titleBottomSheet}>Status</Text>

        <CheckboxGroup
          value={statusFilter}
          onChange={handlePressStatusFilter}
          options={[
            {
              value: "draft",
              label: <Status status="draft" />,
            },
            {
              value: "sent",
              label: <Status status="sent" />,
            },
            {
              value: "approved",
              label: <Status status="approved" />,
            },
            {
              value: "declined",
              label: <Status status="declined" />,
            },
          ]}
        />
      </View>

      <View style={styles.filterContainer}>
        <Text style={styles.titleBottomSheet}>Ordenação</Text>

        <RadioGroup
          value={orderFilter}
          onChange={handlePressOrderFilter}
          options={[
            {
              value: "recentlyCreated",
              label: "Mais recente",
            },
            {
              value: "oldestCreated",
              label: "Mais antigo",
            },
            {
              value: "highestValue",
              label: "Maior valor",
            },
            {
              value: "lowestValue",
              label: "Menor valor",
            },
          ]}
        />
      </View>
    </View>
  );
}
