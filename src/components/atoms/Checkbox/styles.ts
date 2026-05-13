import { StyleSheet } from "react-native";

import { theme } from "../../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: theme.colors.base.gray[400],
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxChecked: {
    borderColor: "transparent",
    backgroundColor: theme.colors.principal.base,
  },
  checkboxLabel: {
    fontFamily: theme.font.fontFamily.base,
    fontSize: theme.font.fontSize.md,
    color: theme.colors.base.gray[600],
  },
});
