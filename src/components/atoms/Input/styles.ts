import { StyleSheet } from "react-native";

import { theme } from "../../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    minHeight: 48,
    maxHeight: 48,
    width: "100%",
    borderRadius: 9999,
    backgroundColor: theme.colors.base.gray[100],
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    borderWidth: 1,
    borderColor: theme.colors.base.gray[300],
  },
  input: {
    flex: 1,
    height: "100%",
    minWidth: 0,
    fontFamily: theme.font.fontFamily.base,
    color: theme.colors.base.gray[700],
  },
  prefix: {
    fontFamily: theme.font.fontFamily.bold,
    color: theme.colors.base.gray[600],
  },
});
