import { StyleSheet } from "react-native";

import { theme } from "../../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    minHeight: 48,
    maxHeight: 48,
    borderRadius: 9999,
    backgroundColor: theme.colors.base.gray[100],
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    borderWidth: 1,
    borderColor: theme.colors.base.gray[300],
  },
  buttonContainer: {
    width: 24,
    height: 24,
    borderRadius: 9999,
    alignItems: "center",
    justifyContent: "center",
  },
});
