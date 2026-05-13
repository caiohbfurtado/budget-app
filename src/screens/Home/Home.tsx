import { FlatList, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import FilterIcon from "../../assets/icons/filter.svg";
import SearchIcon from "../../assets/icons/search.svg";
import { Button, Input } from "../../components";
import { QuoteStatus } from "../../components/atoms/Status/Status";
import { MainHeader } from "../../components/molecules/MainHeader";
import { QuoteCard } from "../../components/molecules/QuoteCard";

import { styles } from "./styles";

type Quote = {
  id: string;
  title: string;
  description: string;
  value: number;
  status: QuoteStatus;
};

const quotes: Quote[] = [
  {
    id: "1",
    title: "Orçamento 1",
    description: "Descrição do orçamento 1",
    value: 1000.5,
    status: "draft",
  },
  {
    id: "2",
    title: "Orçamento 2",
    description: "Descrição do orçamento 2",
    value: 1500.75,
    status: "approved",
  },
  {
    id: "3",
    title: "Orçamento 3",
    description: "Descrição do orçamento 3",
    value: 500.25,
    status: "sent",
  },
  {
    id: "4",
    title: "Orçamento 4",
    description: "Descrição do orçamento 4",
    value: 2000,
    status: "declined",
  },
  {
    id: "5",
    title: "Orçamento 5",
    description: "Descrição do orçamento 5",
    value: 1200.5,
    status: "draft",
  },
  {
    id: "6",
    title: "Orçamento 6",
    description: "Descrição do orçamento 6",
    value: 800.75,
    status: "approved",
  },
  {
    id: "7",
    title: "Orçamento 7",
    description: "Descrição do orçamento 7",
    value: 1800.25,
    status: "sent",
  },
  {
    id: "8",
    title: "Orçamento 8",
    description: "Descrição do orçamento 8",
    value: 2500,
    status: "declined",
  },
];

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

        <FlatList
          data={quotes}
          contentContainerStyle={{
            gap: 8,
            paddingBottom: 24,
          }}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <QuoteCard
              title={item.title}
              description={item.description}
              value={item.value}
              status={item.status}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
}
