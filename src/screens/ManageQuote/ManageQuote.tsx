import { useCallback, useRef, useState } from "react";
import { ScrollView, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { v4 as uuid } from "uuid";

import CheckIcon from "../../assets/icons/check.svg";
import TrashIcon from "../../assets/icons/trash-2.svg";
import {
  BottomSheet,
  BottomSheetRef,
  Button,
  Header,
  Input,
  InputNumber,
  QuoteStatus,
} from "../../components";
import { StackRoutesProps } from "../../routes";

import {
  GeneralInfo,
  InvestmentInfo,
  ServicesIncludedInfo,
  StatusInfo,
} from "./components";
import { styles } from "./styles";

export type ServiceProps = {
  id: string;
  title: string;
  description: string;
  price: number;
  quantity: number;
};

export function ManageQuote({ navigation }: StackRoutesProps<"ManageQuote">) {
  const bottomSheetRef = useRef<BottomSheetRef>(null);
  const [bottomSheetIndex, setBottomSheetIndex] = useState(-1);
  const [title, setTitle] = useState("");
  const [client, setClient] = useState("");
  const [status, setStatus] = useState<QuoteStatus>("approved");
  const [quantityService, setQuantityService] = useState(1);
  const [services, setServices] = useState<ServiceProps[]>([]);
  const [priceService, setPriceService] = useState<undefined | number>(
    undefined,
  );
  const [discount, setDiscount] = useState(0);
  const [descriptionService, setDescriptionService] = useState("");
  const [titleService, setTitleService] = useState("");

  const handleOpenServiceInfo = useCallback(() => {
    bottomSheetRef.current?.expand();
  }, []);

  const handleCloseServiceInfo = useCallback(() => {
    setQuantityService(1);
    setPriceService(undefined);
    setDescriptionService("");
    setTitleService("");
    bottomSheetRef.current?.close();
  }, []);

  const handleAddService = useCallback(() => {
    if (!titleService || !descriptionService || !priceService) {
      return;
    }

    setServices((s) => [
      ...s,
      {
        id: uuid(),
        title: titleService,
        description: descriptionService,
        price: priceService,
        quantity: quantityService,
      },
    ]);

    handleCloseServiceInfo();
  }, [
    descriptionService,
    handleCloseServiceInfo,
    priceService,
    quantityService,
    titleService,
  ]);

  const renderBottomSheetFooter = useCallback(() => {
    return (
      <>
        <Button
          icon={TrashIcon}
          variant="danger"
          onPress={handleCloseServiceInfo}
        />
        <Button icon={CheckIcon} title="Salvar" onPress={handleAddService} />
      </>
    );
  }, [handleAddService, handleCloseServiceInfo]);

  const renderBottomSheetContent = useCallback(() => {
    return (
      <View>
        <View style={{ gap: 12 }}>
          <Input
            placeholder="Título"
            value={titleService}
            onChangeText={setTitleService}
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
            value={descriptionService}
            onChangeText={setDescriptionService}
          />
          <View
            style={{ flexDirection: "row", gap: 12, flex: 2, width: "100%" }}
          >
            <Input
              prefix="R$"
              placeholder="Valor"
              containerStyle={{ flex: 1 }}
              keyboardType="numeric"
              value={priceService ? priceService.toString() : ""}
              onChangeText={(e) => setPriceService(Number(e))}
            />
            <InputNumber
              value={quantityService}
              onAdd={() => setQuantityService((q) => q + 1)}
              onSubtract={() => setQuantityService((q) => Math.max(1, q - 1))}
            />
          </View>
        </View>
      </View>
    );
  }, [titleService, descriptionService, priceService, quantityService]);

  function handleAddQuote() {
    const data = {
      title,
      client,
      status,
      services,
      discount,
      createdAt: new Date(),
    };

    console.log(data);
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
          <GeneralInfo
            title={title}
            onChangeTitle={setTitle}
            client={client}
            onChangeClient={setClient}
          />

          <StatusInfo status={status} onChangeStatus={setStatus} />

          <ServicesIncludedInfo
            onAddService={handleOpenServiceInfo}
            services={services}
          />

          <InvestmentInfo
            services={services}
            discount={discount}
            onChangeDiscount={(e) => setDiscount(Number(e))}
          />
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Button
          title="Cancelar"
          variant="secondary"
          onPress={() => navigation.goBack()}
        />
        <Button title="Salvar" icon={CheckIcon} onPress={handleAddQuote} />
      </View>

      <BottomSheet
        title="Serviço"
        ref={bottomSheetRef}
        index={bottomSheetIndex}
        onChange={setBottomSheetIndex}
        onClose={handleCloseServiceInfo}
        footer={renderBottomSheetFooter()}
        snapPoints={["60%"]}
      >
        {renderBottomSheetContent()}
      </BottomSheet>
    </SafeAreaView>
  );
}
