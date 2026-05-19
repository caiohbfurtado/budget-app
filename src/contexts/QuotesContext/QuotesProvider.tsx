import { useState } from "react";

import { QuoteProps, QuotesContext } from "./";

export function QuotesProvider({ children }: { children: React.ReactNode }) {
  const [quotes, setQuotes] = useState<QuoteProps[]>([]);

  function addQuote(quote: QuoteProps) {
    setQuotes((prevQuotes) => [...prevQuotes, quote]);
  }

  function getQuote(id: string) {
    return quotes.find((q) => q.id === id);
  }

  return (
    <QuotesContext.Provider value={{ quotes, addQuote, getQuote }}>
      {children}
    </QuotesContext.Provider>
  );
}
