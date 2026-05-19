import { type ReactNode, useCallback, useMemo, useState } from "react";

import { randomUUID } from "expo-crypto";

import { QuoteStatus } from "../../components";
import { QuoteProps, QuoteServiceProps } from "../QuotesContext";

import {
  QuoteContext,
  QuoteFormValues,
  QuoteServiceFormValues,
} from "./QuoteContext";

const initialQuote: QuoteFormValues = {
  title: "",
  client: "",
  status: "approved",
  services: [],
  discount: 0,
};

const initialServiceForm: QuoteServiceFormValues = {
  title: "",
  description: "",
  price: undefined,
  quantity: 1,
};

function parseNumberInput(value: string) {
  const normalizedValue = value.replace(",", ".").trim();

  if (!normalizedValue) {
    return undefined;
  }

  const parsedValue = Number(normalizedValue);

  return Number.isFinite(parsedValue) ? parsedValue : undefined;
}

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [quote, setQuote] = useState<QuoteFormValues>(initialQuote);
  const [serviceForm, setServiceForm] =
    useState<QuoteServiceFormValues>(initialServiceForm);
  const [editingServiceId, setEditingServiceId] = useState<string | null>(null);
  const [isServiceSheetOpen, setIsServiceSheetOpen] = useState(false);

  const setTitle = useCallback((title: string) => {
    setQuote((prevQuote) => ({ ...prevQuote, title }));
  }, []);

  const setClient = useCallback((client: string) => {
    setQuote((prevQuote) => ({ ...prevQuote, client }));
  }, []);

  const setStatus = useCallback((status: QuoteStatus) => {
    setQuote((prevQuote) => ({ ...prevQuote, status }));
  }, []);

  const setDiscount = useCallback((discount: string) => {
    const parsedDiscount = parseNumberInput(discount);

    setQuote((prevQuote) => ({
      ...prevQuote,
      discount: Math.min(99, Math.max(0, parsedDiscount ?? 0)),
    }));
  }, []);

  const resetServiceForm = useCallback(() => {
    setServiceForm(initialServiceForm);
    setEditingServiceId(null);
  }, []);

  const openNewServiceSheet = useCallback(() => {
    resetServiceForm();
    setIsServiceSheetOpen(true);
  }, [resetServiceForm]);

  const closeServiceSheet = useCallback(() => {
    setIsServiceSheetOpen(false);
    resetServiceForm();
  }, [resetServiceForm]);

  const openEditServiceSheet = useCallback(
    (serviceId: QuoteServiceProps["id"]) => {
      const selectedService = quote.services.find(
        (service) => service.id === serviceId,
      );

      if (!selectedService) {
        return;
      }

      setEditingServiceId(serviceId);
      setServiceForm({
        title: selectedService.title,
        description: selectedService.description,
        price: selectedService.price,
        quantity: selectedService.quantity,
      });
      setIsServiceSheetOpen(true);
    },
    [quote.services],
  );

  const setServiceTitle = useCallback((title: string) => {
    setServiceForm((prevServiceForm) => ({ ...prevServiceForm, title }));
  }, []);

  const setServiceDescription = useCallback((description: string) => {
    setServiceForm((prevServiceForm) => ({
      ...prevServiceForm,
      description,
    }));
  }, []);

  const setServicePrice = useCallback((price: string) => {
    setServiceForm((prevServiceForm) => ({
      ...prevServiceForm,
      price: parseNumberInput(price),
    }));
  }, []);

  const incrementServiceQuantity = useCallback(() => {
    setServiceForm((prevServiceForm) => ({
      ...prevServiceForm,
      quantity: prevServiceForm.quantity + 1,
    }));
  }, []);

  const decrementServiceQuantity = useCallback(() => {
    setServiceForm((prevServiceForm) => ({
      ...prevServiceForm,
      quantity: Math.max(1, prevServiceForm.quantity - 1),
    }));
  }, []);

  const saveService = useCallback(() => {
    const title = serviceForm.title.trim();
    const description = serviceForm.description.trim();
    const price = serviceForm.price;

    if (!title || !description || price === undefined) {
      return;
    }

    const nextService: QuoteServiceProps = {
      id: editingServiceId ?? randomUUID(),
      title,
      description,
      price,
      quantity: serviceForm.quantity,
    };

    setQuote((prevQuote) => ({
      ...prevQuote,
      services: editingServiceId
        ? prevQuote.services.map((service) =>
            service.id === editingServiceId ? nextService : service,
          )
        : [...prevQuote.services, nextService],
    }));

    closeServiceSheet();
  }, [closeServiceSheet, editingServiceId, serviceForm]);

  const subtotal = useMemo(() => {
    return quote.services.reduce((total, service) => {
      return total + service.price * service.quantity;
    }, 0);
  }, [quote.services]);

  const discountValue = useMemo(() => {
    return (subtotal * quote.discount) / 100;
  }, [quote.discount, subtotal]);

  const hasDiscount = discountValue > 0;
  const total = hasDiscount ? subtotal - discountValue : subtotal;

  const buildQuote = useCallback(
    (id: string): QuoteProps => ({
      id,
      title: quote.title.trim(),
      client: quote.client.trim(),
      status: quote.status,
      services: quote.services,
      discount: quote.discount,
      createdAt: new Date(),
    }),
    [quote],
  );

  const value = useMemo(
    () => ({
      quote,
      serviceForm,
      serviceSheetTitle: editingServiceId ? "Editar serviço" : "Serviço",
      serviceSubmitLabel: editingServiceId ? "Atualizar" : "Salvar",
      isServiceSheetOpen,
      subtotal,
      discountValue,
      total,
      hasDiscount,
      setTitle,
      setClient,
      setStatus,
      setDiscount,
      openNewServiceSheet,
      openEditServiceSheet,
      closeServiceSheet,
      setServiceTitle,
      setServiceDescription,
      setServicePrice,
      incrementServiceQuantity,
      decrementServiceQuantity,
      saveService,
      buildQuote,
    }),
    [
      buildQuote,
      closeServiceSheet,
      decrementServiceQuantity,
      discountValue,
      editingServiceId,
      hasDiscount,
      incrementServiceQuantity,
      isServiceSheetOpen,
      openEditServiceSheet,
      openNewServiceSheet,
      quote,
      saveService,
      serviceForm,
      setClient,
      setDiscount,
      setServiceDescription,
      setServicePrice,
      setServiceTitle,
      setStatus,
      setTitle,
      subtotal,
      total,
    ],
  );

  return (
    <QuoteContext.Provider value={value}>{children}</QuoteContext.Provider>
  );
}
