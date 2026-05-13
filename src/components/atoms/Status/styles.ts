import { StyleSheet } from "react-native";

import { theme } from "../../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    alignSelf: "flex-start",
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  containerSent: {
    backgroundColor: theme.colors.feedback.info.light,
  },
  containerDraft: {
    backgroundColor: theme.colors.base.gray[300],
  },
  containerApproved: {
    backgroundColor: theme.colors.feedback.success.light,
  },
  containerDeclined: {
    backgroundColor: theme.colors.feedback.danger.light,
  },
  statusIndicator: {
    width: 8,
    height: 8,
    borderRadius: 9999,
  },
  statusIndicatorSent: {
    backgroundColor: theme.colors.feedback.info.base,
  },
  statusIndicatorDraft: {
    backgroundColor: theme.colors.base.gray[400],
  },
  statusIndicatorApproved: {
    backgroundColor: theme.colors.feedback.success.base,
  },
  statusIndicatorDeclined: {
    backgroundColor: theme.colors.feedback.danger.base,
  },
  statusTitle: {
    fontFamily: theme.font.fontFamily.bold,
    fontSize: theme.font.fontSize.xs,
  },
  statusTitleSent: {
    color: theme.colors.feedback.info.dark,
  },
  statusTitleDraft: {
    color: theme.colors.base.gray[500],
  },
  statusTitleApproved: {
    color: theme.colors.feedback.success.dark,
  },
  statusTitleDeclined: {
    color: theme.colors.feedback.danger.dark,
  },
});
