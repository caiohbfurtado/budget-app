import { StyleSheet } from "react-native";

import { theme } from "../../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 20,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.base.gray[200],
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  title: {
    fontFamily: theme.font.fontFamily.bold,
    fontSize: theme.font.fontSize.sm,
    color: theme.colors.base.gray[700],
  },
});
