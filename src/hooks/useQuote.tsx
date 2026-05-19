import { useContext } from "react";

import { QuoteContext } from "../contexts";

export function useQuote() {
  const context = useContext(QuoteContext);

  if (!context) {
    throw new Error("useQuote must be used within a QuoteProvider");
  }

  return context;
}
