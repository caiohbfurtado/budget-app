import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FlatList, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import CheckIcon from "../../assets/icons/check.svg";
import FilterIcon from "../../assets/icons/filter.svg";
import SearchIcon from "../../assets/icons/search.svg";
import {
  BottomSheet,
  BottomSheetRef,
  Button,
  Input,
  MainHeader,
  QuoteCard,
  QuoteStatus,
} from "../../components";
import { QuoteProps } from "../../contexts";
import { useQuotes } from "../../hooks/useQuotes";
import { StackRoutesProps } from "../../routes/StackRoutes";

import { FilterBottomSheet, OrderFilter } from "./components";
import { styles } from "./styles";

export function Home({ navigation }: StackRoutesProps<"Home">) {
  const bottomSheetRef = useRef<BottomSheetRef>(null);
  const { quotes } = useQuotes();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredQuotes, setFilteredQuotes] = useState<QuoteProps[]>([]);
  const [bottomSheetIndex, setBottomSheetIndex] = useState(-1);
  const [statusFilter, setStatusFilter] = useState<QuoteStatus[]>([]);
  const [orderFilter, setOrderFilter] =
    useState<OrderFilter>("recentlyCreated");

  const handleCloseFilters = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);

  const handleSearch = useCallback(() => {
    let filtered = quotes.filter(
      (quote) =>
        quote.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        quote.client.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    if (orderFilter === "recentlyCreated") {
      filtered = filtered.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      );
    } else if (orderFilter === "oldestCreated") {
      filtered = filtered.sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
      );
    }

    setFilteredQuotes(filtered);
  }, [searchTerm, orderFilter, quotes]);

  const handleApplyFilters = useCallback(() => {
    let filtered = quotes;

    if (statusFilter.length > 0) {
      filtered = filtered.filter((quote) =>
        statusFilter.includes(quote.status),
      );
    }

    if (orderFilter === "recentlyCreated") {
      filtered = filtered.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      );
    } else if (orderFilter === "oldestCreated") {
      filtered = filtered.sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
      );
    }

    setFilteredQuotes(filtered);
    handleCloseFilters();
  }, [orderFilter, statusFilter, handleCloseFilters, quotes]);

  useEffect(() => {
    handleSearch();
  }, [searchTerm, handleSearch]);

  const handlePressStatusFilter = useCallback((status: QuoteStatus) => {
    setStatusFilter((prev) => {
      if (prev.includes(status)) {
        return prev.filter((s) => s !== status);
      } else {
        return [...prev, status];
      }
    });
  }, []);

  const handlePressOrderFilter = useCallback((order: OrderFilter) => {
    setOrderFilter(order);
  }, []);

  const handleOpenFilters = useCallback(() => {
    bottomSheetRef.current?.expand();
  }, []);

  const quotesInDraft = useMemo(() => {
    return quotes.filter((quote) => quote.status === "draft").length;
  }, [quotes]);

  const renderFooter = useCallback(() => {
    return (
      <>
        <Button variant="secondary" title="Resetar filtros" />
        <Button icon={CheckIcon} title="Aplicar" onPress={handleApplyFilters} />
      </>
    );
  }, [handleApplyFilters]);

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
            containerStyle={{ flex: 1 }}
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
          keyboardShouldPersistTaps="handled"
          keyboardDismissMode="on-drag"
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <QuoteCard
              title={item.title}
              client={item.client}
              value={item.services.reduce(
                (total, service) => total + service.price * service.quantity,
                0,
              )}
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
        onClose={handleCloseFilters}
        footer={renderFooter()}
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
