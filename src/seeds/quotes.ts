import { QuoteStatus } from "../components/atoms/Status/Status";

export type Quote = {
  id: string;
  title: string;
  client: string;
  value: number;
  status: QuoteStatus;
};

export const quotes: Quote[] = [
  {
    id: "1",
    title: "Reforma da Recepção",
    client: "Alpha Construções",
    value: 1000.5,
    status: "draft",
  },
  {
    id: "2",
    title: "Identidade Visual Nova",
    client: "Brisa Studio",
    value: 1500.75,
    status: "approved",
  },
  {
    id: "3",
    title: "Campanha de Lançamento",
    client: "Café Central",
    value: 500.25,
    status: "sent",
  },
  {
    id: "4",
    title: "Automação Financeira",
    client: "Delta Consultoria",
    value: 2000,
    status: "declined",
  },
  {
    id: "5",
    title: "Landing Page Institucional",
    client: "Eclipse Saúde",
    value: 1200.5,
    status: "draft",
  },
  {
    id: "6",
    title: "Vídeo de Apresentação",
    client: "Foco Logística",
    value: 800.75,
    status: "approved",
  },
  {
    id: "7",
    title: "Sistema de Assinatura",
    client: "Gama Jurídico",
    value: 1800.25,
    status: "sent",
  },
  {
    id: "8",
    title: "App de Reservas",
    client: "Horizonte Turismo",
    value: 2500,
    status: "declined",
  },
];
