import { View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import FilterIcon from "../../assets/icons/filter.svg";
import SearchIcon from "../../assets/icons/search.svg";
import { Button, Input } from "../../components";
import { MainHeader } from "../../components/molecules/MainHeader";

import { styles } from "./styles";

export function Home() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <MainHeader hasDraft={true} />

      <View style={styles.content}>
        <View style={styles.headerContent}>
          <Input placeholder="Título ou cliente" icon={SearchIcon} />
          <Button icon={FilterIcon} variant="secondary" />
        </View>
      </View>
    </SafeAreaView>
  );
}
