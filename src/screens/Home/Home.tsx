import { useCallback, useEffect, useState } from "react";
import { FlatList, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import FilterIcon from "../../assets/icons/filter.svg";
import SearchIcon from "../../assets/icons/search.svg";
import { Button, Input } from "../../components";
import { QuoteStatus } from "../../components/atoms/Status/Status";
import { MainHeader } from "../../components/molecules/MainHeader";
import { QuoteCard } from "../../components/molecules/QuoteCard";
import { Quote, quotes } from "../../seeds/quotes";

import { styles } from "./styles";

export function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredQuotes, setFilteredQuotes] = useState<Quote[]>(quotes);

  const handleSearch = useCallback(() => {
    const filtered = quotes.filter(
      (quote) =>
        quote.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        quote.client.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setFilteredQuotes(filtered);
  }, [searchTerm]);

  useEffect(() => {
    handleSearch();
  }, [searchTerm, handleSearch]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <MainHeader hasDraft={true} />

      <View style={styles.content}>
        <View style={styles.headerContent}>
          <Input
            value={searchTerm}
            onChangeText={setSearchTerm}
            placeholder="Título ou cliente"
            icon={SearchIcon}
          />
          <Button icon={FilterIcon} variant="secondary" />
        </View>

        <FlatList
          data={filteredQuotes}
          contentContainerStyle={{
            gap: 8,
            paddingBottom: 24,
          }}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <QuoteCard
              title={item.title}
              client={item.client}
              value={item.value}
              status={item.status}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
}
