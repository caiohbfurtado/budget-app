import { StyleSheet } from "react-native";

import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    padding: 20,
    gap: 20,
    paddingBottom: 32,
  },
  footer: {
    flexDirection: "row",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
    backgroundColor: theme.colors.base.white,
    borderTopWidth: 1,
    borderTopColor: theme.colors.base.gray[300],
  },
});
