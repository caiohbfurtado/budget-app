import { StyleSheet } from "react-native";

import { theme } from "../../../../styles/theme";

export const styles = StyleSheet.create({
  line: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 16,
  },
  lineContent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 16,
  },
  infoLabel: {
    fontFamily: theme.font.fontFamily.base,
    fontSize: theme.font.fontSize.sm,
    color: theme.colors.base.gray[700],
  },
  quantityLabel: {
    fontFamily: theme.font.fontFamily.base,
    fontSize: theme.font.fontSize.xs,
    color: theme.colors.base.gray[600],
  },
  prefixLabel: {
    fontFamily: theme.font.fontFamily.base,
    fontSize: theme.font.fontSize.xs,
    color: theme.colors.base.gray[700],
  },
  compactInputContainer: {
    width: 80,
    minWidth: 80,
    height: 32,
    minHeight: 32,
    maxHeight: 32,
  },
  compactInput: {
    textAlign: "center",
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  totalLabel: {
    fontFamily: theme.font.fontFamily.bold,
    fontSize: theme.font.fontSize.sm,
    color: theme.colors.base.gray[700],
  },
  totalValue: {
    fontFamily: theme.font.fontFamily.bold,
    fontSize: theme.font.fontSize.lg,
    color: theme.colors.base.gray[700],
  },
  discountValue: {
    fontFamily: theme.font.fontFamily.base,
    fontSize: theme.font.fontSize.xs,
    color: theme.colors.base.gray[600],
    textDecorationLine: "line-through",
    alignSelf: "flex-end",
  },
});
