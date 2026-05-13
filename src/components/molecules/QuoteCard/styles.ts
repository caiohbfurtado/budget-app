import { StyleSheet } from "react-native";

import { theme } from "../../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 16,
    backgroundColor: theme.colors.base.gray[100],
    borderWidth: 1,
    borderColor: theme.colors.base.gray[200],
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  mainInfoContainer: {
    gap: 8,
  },
  title: {
    fontFamily: theme.font.fontFamily.bold,
    fontSize: theme.font.fontSize.md,
    color: theme.colors.base.gray[700],
  },
  description: {
    fontFamily: theme.font.fontFamily.base,
    fontSize: theme.font.fontSize.sm,
    color: theme.colors.base.gray[600],
  },
  valueContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 4,
  },
  value: {
    fontFamily: theme.font.fontFamily.bold,
    fontSize: theme.font.fontSize.md,
    color: theme.colors.base.gray[700],
  },
});
