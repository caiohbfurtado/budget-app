import { useContext } from "react";

import { QuotesContext } from "../contexts";

export function useQuotes() {
  const context = useContext(QuotesContext);

  if (!context) {
    throw new Error("useQuotes must be used within a QuotesProvider");
  }

  return context;
}
