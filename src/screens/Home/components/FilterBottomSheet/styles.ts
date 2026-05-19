import { StyleSheet } from "react-native";

import { theme } from "../../../../styles/theme";

export const styles = StyleSheet.create({
  bottomsheetContentContainer: {
    flex: 1,
    gap: 20,
  },
  titleBottomSheet: {
    fontFamily: theme.font.fontFamily.base,
    fontSize: theme.font.fontSize.sm,
    color: theme.colors.base.gray[500],
  },
  filterContainer: {
    gap: 16,
  },
});
