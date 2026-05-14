import { StyleSheet } from "react-native";

import { theme } from "../../../../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 12,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: theme.colors.base.gray[200],
    backgroundColor: theme.colors.base.white,
    paddingBottom: 24,
  },
});
