import { StyleSheet } from "react-native";

import { theme } from "../../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.base.gray[200],
    padding: 20,
  },
  containerInfo: {
    gap: 2,
  },
  title: {
    fontFamily: theme.font.fontFamily.bold,
    fontSize: theme.font.fontSize.lg,
    color: theme.colors.principal.base,
  },
  subtitle: {
    fontFamily: theme.font.fontFamily.base,
    fontSize: theme.font.fontSize.sm,
    color: theme.colors.base.gray[500],
  },
});
