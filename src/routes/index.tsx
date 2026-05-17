import { DefaultTheme, NavigationContainer } from "@react-navigation/native";

import { theme } from "../styles/theme";

import { StackRoutes } from "./StackRoutes";

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: theme.colors.base.white,
  },
};

export function Routes() {
  return (
    <NavigationContainer theme={navTheme}>
      <StackRoutes />
    </NavigationContainer>
  );
}

export { StackRoutesProps } from "./StackRoutes";
