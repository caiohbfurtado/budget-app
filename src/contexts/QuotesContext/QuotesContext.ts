import { createContext } from "react";

import { QuoteStatus } from "../../components";

export type QuoteServiceProps = {
  id: string;
  title: string;
  description: string;
  price: number;
  quantity: number;
};

export type QuoteProps = {
  id: string;
  title: string;
  client: string;
  services: QuoteServiceProps[];
  status: QuoteStatus;
  discount: number;
  createdAt: Date;
};

type QuotesContextType = {
  quotes: QuoteProps[];
  addQuote: (quote: QuoteProps) => void;
  getQuote: (id: string) => QuoteProps | undefined;
};

export const QuotesContext = createContext<QuotesContextType | null>(null);
