import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FlatList, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import FilterIcon from "../../assets/icons/filter.svg";
import SearchIcon from "../../assets/icons/search.svg";
import {
  BottomSheet,
  BottomSheetRef,
  Button,
  FilterBottomSheet,
  Input,
  MainHeader,
  QuoteCard,
} from "../../components";
import { StackRoutesProps } from "../../routes/StackRoutes";
import { Quote, quotes } from "../../seeds/quotes";

import { styles } from "./styles";

export function Home({ navigation }: StackRoutesProps<"Home">) {
  const bottomSheetRef = useRef<BottomSheetRef>(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredQuotes, setFilteredQuotes] = useState<Quote[]>(quotes);
  const [bottomSheetIndex, setBottomSheetIndex] = useState(-1);
  const [statusFilter, setStatusFilter] = useState<string[]>([]);
  const [orderFilter, setOrderFilter] = useState<string>("recentlyCreated");

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

  function handlePressStatusFilter(status: string) {
    setStatusFilter((prev) => {
      if (prev.includes(status)) {
        return prev.filter((s) => s !== status);
      } else {
        return [...prev, status];
      }
    });
  }

  const handlePressOrderFilter = useCallback((order: string) => {
    setOrderFilter(order);
  }, []);

  const handleOpenFilters = useCallback(() => {
    bottomSheetRef.current?.expand();
  }, []);

  const quotesInDraft = useMemo(() => {
    return quotes.filter((quote) => quote.status === "draft").length;
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <MainHeader
        quotesInDraft={quotesInDraft}
        onNewQuotePress={() => navigation.navigate("ManageQuote")}
      />

      <View style={styles.content}>
        <View style={styles.headerContent}>
          <Input
            value={searchTerm}
            onChangeText={setSearchTerm}
            placeholder="Título ou cliente"
            icon={SearchIcon}
          />
          <Button
            icon={FilterIcon}
            variant="secondary"
            onPress={handleOpenFilters}
          />
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
          showsVerticalScrollIndicator={false}
        />
      </View>

      <BottomSheet
        title="Filtrar e ordenar"
        ref={bottomSheetRef}
        index={bottomSheetIndex}
        onChange={setBottomSheetIndex}
        onClose={() => setBottomSheetIndex(-1)}
      >
        <FilterBottomSheet
          statusFilter={statusFilter}
          orderFilter={orderFilter}
          handlePressStatusFilter={handlePressStatusFilter}
          handlePressOrderFilter={handlePressOrderFilter}
        />
      </BottomSheet>
    </SafeAreaView>
  );
}
