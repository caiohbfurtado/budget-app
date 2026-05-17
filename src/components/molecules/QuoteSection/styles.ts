import { StyleSheet } from "react-native";

import { theme } from "../../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: theme.colors.base.gray[200],
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  title: {
    fontFamily: theme.font.fontFamily.base,
    fontSize: theme.font.fontSize.xs,
    color: theme.colors.base.gray[500],
  },
  bodyContainer: {
    borderTopWidth: 1,
    borderTopColor: theme.colors.base.gray[200],
    padding: 16,
  },
  footerContainer: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
});
