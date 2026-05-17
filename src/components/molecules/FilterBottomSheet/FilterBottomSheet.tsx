import { Text, View } from "react-native";

import { CheckboxGroup, QuoteStatus, RadioGroup, Status } from "../../";

import { styles } from "./styles";

type FilterBottomSheetProps = {
  statusFilter: QuoteStatus[];
  orderFilter: string;
  handlePressStatusFilter: (status: QuoteStatus) => void;
  handlePressOrderFilter: (order: string) => void;
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
              value: "olderlyCreated",
              label: "Mais antigo",
            },
            {
              value: "higherValue",
              label: "Maior valor",
            },
            {
              value: "lowerValue",
              label: "Menor valor",
            },
          ]}
        />
      </View>
    </View>
  );
}
