import { useEffect, useRef, useState } from "react";
import { ScrollView, View } from "react-native";

import { randomUUID } from "expo-crypto";

import { SafeAreaView } from "react-native-safe-area-context";

import CheckIcon from "../../assets/icons/check.svg";
import TrashIcon from "../../assets/icons/trash-2.svg";
import {
  BottomSheet,
  BottomSheetRef,
  Button,
  Header,
  Input,
  InputNumber,
} from "../../components";
import { QuoteProvider } from "../../contexts";
import { useQuote } from "../../hooks/useQuote";
import { useQuotes } from "../../hooks/useQuotes";
import { StackRoutesProps } from "../../routes";

import {
  GeneralInfo,
  InvestmentInfo,
  ServicesIncludedInfo,
  StatusInfo,
} from "./components";
import { styles } from "./styles";

function ManageQuoteContent({ navigation }: StackRoutesProps<"ManageQuote">) {
  const { addQuote } = useQuotes();
  const {
    buildQuote,
    closeServiceSheet,
    decrementServiceQuantity,
    incrementServiceQuantity,
    isServiceSheetOpen,
    quote,
    saveService,
    serviceForm,
    serviceSheetTitle,
    serviceSubmitLabel,
    setServiceDescription,
    setServicePrice,
    setServiceTitle,
  } = useQuote();
  const bottomSheetRef = useRef<BottomSheetRef>(null);
  const [bottomSheetIndex, setBottomSheetIndex] = useState(-1);

  useEffect(() => {
    if (isServiceSheetOpen) {
      bottomSheetRef.current?.expand();
      return;
    }

    bottomSheetRef.current?.close();
  }, [isServiceSheetOpen]);

  function handleAddQuote() {
    addQuote(buildQuote(randomUUID()));
    navigation.goBack();
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <Header title="Orçamento" />

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag"
      >
        <View style={styles.container}>
          <GeneralInfo />

          <StatusInfo />

          <ServicesIncludedInfo />

          <InvestmentInfo />
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Button
          title="Cancelar"
          variant="secondary"
          onPress={() => navigation.goBack()}
        />
        <Button
          title="Salvar"
          icon={CheckIcon}
          onPress={handleAddQuote}
          disabled={!quote.title.trim() || !quote.client.trim()}
        />
      </View>

      <BottomSheet
        title={serviceSheetTitle}
        ref={bottomSheetRef}
        index={bottomSheetIndex}
        onChange={setBottomSheetIndex}
        onClose={closeServiceSheet}
        footer={
          <>
            <Button
              icon={TrashIcon}
              variant="danger"
              onPress={closeServiceSheet}
            />
            <Button
              icon={CheckIcon}
              title={serviceSubmitLabel}
              onPress={saveService}
            />
          </>
        }
        snapPoints={["60%"]}
      >
        <View>
          <View style={{ gap: 12 }}>
            <Input
              placeholder="Título"
              value={serviceForm.title}
              onChangeText={setServiceTitle}
            />
            <Input
              placeholder="Descrição"
              multiline
              textAlignVertical="top"
              containerStyle={{
                height: 120,
                maxHeight: 120,
                borderRadius: 20,
                paddingTop: 12,
              }}
              style={{
                minHeight: "100%",
                width: "100%",
              }}
              value={serviceForm.description}
              onChangeText={setServiceDescription}
            />
            <View
              style={{ flexDirection: "row", gap: 12, flex: 2, width: "100%" }}
            >
              <Input
                prefix="R$"
                placeholder="Valor"
                containerStyle={{ flex: 1 }}
                keyboardType="numeric"
                value={serviceForm.price?.toString() ?? ""}
                onChangeText={setServicePrice}
              />
              <InputNumber
                value={serviceForm.quantity}
                onAdd={incrementServiceQuantity}
                onSubtract={decrementServiceQuantity}
              />
            </View>
          </View>
        </View>
      </BottomSheet>
    </SafeAreaView>
  );
}

export function ManageQuote(props: StackRoutesProps<"ManageQuote">) {
  return (
    <QuoteProvider>
      <ManageQuoteContent {...props} />
    </QuoteProvider>
  );
}
