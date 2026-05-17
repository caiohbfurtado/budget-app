import { StyleSheet } from "react-native";

import { theme } from "../../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    borderRadius: 9999,
    padding: 12,
    alignSelf: "flex-start",
    gap: 8,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  containerPrimary: {
    backgroundColor: theme.colors.principal.base,
    borderColor: "transparent",
  },
  containerSecondary: {
    backgroundColor: theme.colors.base.gray[100],
    borderColor: theme.colors.base.gray[300],
  },
  containerDanger: {
    backgroundColor: theme.colors.base.gray[100],
    borderColor: theme.colors.base.gray[300],
  },
  text: {
    fontFamily: theme.font.fontFamily.bold,
    fontSize: theme.font.fontSize.sm,
  },
  textPrimary: {
    color: theme.colors.base.white,
  },
  textSecondary: {
    color: theme.colors.principal.base,
  },
  textDanger: {
    color: theme.colors.feedback.danger.base,
  },
});
