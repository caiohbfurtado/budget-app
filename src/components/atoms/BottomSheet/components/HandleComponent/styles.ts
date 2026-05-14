import { StyleSheet } from "react-native";

import { theme } from "../../../../../styles/theme";

export const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 20,
    paddingVertical: 22,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.base.gray[200],
    gap: 16,
  },
  headerTitle: {
    fontFamily: theme.font.fontFamily.bold,
    fontSize: theme.font.fontSize.sm,
    color: theme.colors.base.gray[700],
  },
});
