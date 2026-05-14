import { StyleSheet } from "react-native";

import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
  content: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 20,
  },
  headerContent: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
    paddingVertical: 24,
  },
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
