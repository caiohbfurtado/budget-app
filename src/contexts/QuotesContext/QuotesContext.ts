import { createContext } from "react";

import { QuoteStatus } from "../../components";
import { ServiceProps } from "../../screens/ManageQuote/ManageQuote";

export type QuoteProps = {
  id: string;
  title: string;
  client: string;
  services: ServiceProps[];
  status: QuoteStatus;
  createdAt: Date;
};

type QuotesContextType = {
  quotes: QuoteProps[];
  addQuote: (quote: QuoteProps) => void;
  getQuote: (id: string) => QuoteProps | undefined;
};

export const QuotesContext = createContext<QuotesContextType>(
  {} as QuotesContextType,
);
