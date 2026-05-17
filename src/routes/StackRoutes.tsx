import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";

import { Home, ManageQuote } from "../screens";

export type StackRoutesList = {
  Home: undefined;
  ManageQuote: undefined;
};

export type StackRoutesProps<T extends keyof StackRoutesList> =
  NativeStackScreenProps<StackRoutesList, T>;

const Stack = createNativeStackNavigator<StackRoutesList>();

export function StackRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ManageQuote" component={ManageQuote} />
    </Stack.Navigator>
  );
}
