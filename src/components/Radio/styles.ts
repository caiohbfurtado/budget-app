import { StyleSheet } from "react-native";

import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  radio: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: theme.colors.base.gray[400],
    borderRadius: 9999,
    alignItems: "center",
    justifyContent: "center",
  },
  radioChecked: {
    borderColor: "transparent",
    backgroundColor: theme.colors.principal.base,
  },
  radioLabel: {
    fontFamily: theme.font.fontFamily.base,
    fontSize: theme.font.fontSize.md,
    color: theme.colors.base.gray[600],
  },
  radioIcon: {
    width: 8,
    height: 8,
    borderRadius: 9999,
    backgroundColor: theme.colors.base.white,
  },
});
