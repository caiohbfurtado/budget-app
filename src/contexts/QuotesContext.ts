import { createContext } from "react";

import { QuoteProps } from "../seeds/quotes";

type QuotesContextType = {
  quotes: QuoteProps[];
  addQuote: (quote: QuoteProps) => void;
  getQuote: (id: string) => QuoteProps | undefined;
};

export const QuotesContext = createContext<QuotesContextType>(
  {} as QuotesContextType,
);
