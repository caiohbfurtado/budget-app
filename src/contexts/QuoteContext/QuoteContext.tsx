import { createContext } from "react";

import { QuoteStatus } from "../../components";
import { QuoteProps, QuoteServiceProps } from "../QuotesContext";

export type QuoteFormValues = Pick<
  QuoteProps,
  "title" | "client" | "status" | "services" | "discount"
>;

export type QuoteServiceFormValues = {
  title: string;
  description: string;
  price: number | undefined;
  quantity: number;
};

export type QuoteContextType = {
  quote: QuoteFormValues;
  serviceForm: QuoteServiceFormValues;
  serviceSheetTitle: string;
  serviceSubmitLabel: string;
  isServiceSheetOpen: boolean;
  subtotal: number;
  discountValue: number;
  total: number;
  hasDiscount: boolean;
  setTitle: (title: string) => void;
  setClient: (client: string) => void;
  setStatus: (status: QuoteStatus) => void;
  setDiscount: (discount: string) => void;
  openNewServiceSheet: () => void;
  openEditServiceSheet: (serviceId: QuoteServiceProps["id"]) => void;
  closeServiceSheet: () => void;
  setServiceTitle: (title: string) => void;
  setServiceDescription: (description: string) => void;
  setServicePrice: (price: string) => void;
  incrementServiceQuantity: () => void;
  decrementServiceQuantity: () => void;
  saveService: () => void;
  buildQuote: (id: string) => QuoteProps;
};

export const QuoteContext = createContext<QuoteContextType | null>(null);
