import { StyleSheet } from "react-native";

import { theme } from "../../../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
  serviceContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  serviceVerticalContainer: {
    gap: 2,
    justifyContent: "center",
  },
  serviceHorizontalContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 4,
  },
  serviceTitle: {
    fontFamily: theme.font.fontFamily.bold,
    fontSize: theme.font.fontSize.sm,
    color: theme.colors.base.gray[700],
  },
  serviceDescription: {
    fontFamily: theme.font.fontFamily.base,
    fontSize: theme.font.fontSize.xs,
    color: theme.colors.base.gray[500],
  },
  servicePricePrefix: {
    fontFamily: theme.font.fontFamily.base,
    fontSize: theme.font.fontSize.xs,
    color: theme.colors.base.gray[700],
  },
  servicePrice: {
    fontFamily: theme.font.fontFamily.bold,
    fontSize: theme.font.fontSize.md,
    color: theme.colors.base.gray[700],
  },
  serviceQuantity: {
    fontFamily: theme.font.fontFamily.base,
    fontSize: theme.font.fontSize.xs,
    color: theme.colors.base.gray[600],
  },
});
