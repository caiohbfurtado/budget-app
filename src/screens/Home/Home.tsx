import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FlatList, Text, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import FilterIcon from "../../assets/icons/filter.svg";
import SearchIcon from "../../assets/icons/search.svg";
import { Button, Checkbox, Input, Status } from "../../components";
import {
  BottomSheet,
  BottomSheetRef,
} from "../../components/atoms/BottomSheet";
import { CheckboxGroup } from "../../components/molecules/CheckboxGroup";
import { MainHeader } from "../../components/molecules/MainHeader";
import { QuoteCard } from "../../components/molecules/QuoteCard";
import { Quote, quotes } from "../../seeds/quotes";

import { styles } from "./styles";

export function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredQuotes, setFilteredQuotes] = useState<Quote[]>(quotes);
  const bottomSheetRef = useRef<BottomSheetRef>(null);
  const [bottomSheetIndex, setBottomSheetIndex] = useState(-1);
  const [statusFilter, setStatusFilter] = useState<string[]>([]);

  const quotesInDraft = useMemo(() => {
    return quotes.filter((quote) => quote.status === "draft").length;
  }, []);

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

  const handleOpenFilters = useCallback(() => {
    bottomSheetRef.current?.expand();
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <MainHeader quotesInDraft={quotesInDraft} />

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
        />
      </View>
      <BottomSheet
        title="Filtrar e ordenar"
        ref={bottomSheetRef}
        index={bottomSheetIndex}
        onChange={setBottomSheetIndex}
        onClose={() => setBottomSheetIndex(-1)}
      >
        <View style={styles.bottomsheetContentContainer}>
          <View style={styles.filterContainer}>
            <Text style={styles.titleBottomSheet}>Status</Text>

            <CheckboxGroup
              value={statusFilter}
              options={[
                {
                  value: "draft",
                  label: <Status status="draft" />,
                  onPress: (value) => handlePressStatusFilter(value),
                },
                {
                  value: "sent",
                  label: <Status status="sent" />,
                  onPress: (value) => handlePressStatusFilter(value),
                },
                {
                  value: "approved",
                  label: <Status status="approved" />,
                  onPress: (value) => handlePressStatusFilter(value),
                },
                {
                  value: "declined",
                  label: <Status status="declined" />,
                  onPress: (value) => handlePressStatusFilter(value),
                },
              ]}
            />
          </View>
        </View>
      </BottomSheet>
    </SafeAreaView>
  );
}
