import { SafeAreaView } from "react-native-safe-area-context";

import { MainHeader } from "../components/molecules/MainHeader";

export function Home() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
      edges={["top"]}
    >
      <MainHeader hasDraft={true} />
    </SafeAreaView>
  );
}
