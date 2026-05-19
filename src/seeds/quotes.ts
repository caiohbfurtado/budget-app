import { v4 as uuid } from "uuid";

import { QuoteStatus } from "../components/atoms/Status/Status";
import { ServiceProps } from "../screens/ManageQuote/ManageQuote";

export type QuoteProps = {
  id: string;
  title: string;
  client: string;
  services: ServiceProps[];
  status: QuoteStatus;
  createdAt: Date;
};

export const quotes: QuoteProps[] = [
  {
    id: "1",
    title: "Reforma da Recepção",
    client: "Alpha Construções",
    services: [
      {
        id: uuid(),
        title: "Reforma da Recepção",
        description: "Reforma completa da refeição",
        price: 1000,
        quantity: 1,
      },
    ],
    status: "draft",
    createdAt: new Date("2024-05-01T10:00:00"),
  },
  {
    id: "2",
    title: "Identidade Visual Nova",
    client: "Brisa Studio",
    services: [
      {
        id: uuid(),
        title: "Identidade Visual Nova",
        description: "Criação de identidade visual completa",
        price: 1500.75,
        quantity: 1,
      },
    ],
    status: "approved",
    createdAt: new Date("2024-05-03T14:30:00"),
  },
  {
    id: "3",
    title: "Campanha de Lançamento",
    client: "Café Central",
    services: [
      {
        id: uuid(),
        title: "Campanha de Lançamento",
        description: "Campanha de lançamento do novo produto",
        price: 500.25,
        quantity: 1,
      },
    ],
    status: "sent",
    createdAt: new Date("2024-05-02T09:15:00"),
  },
  {
    id: "4",
    title: "Automação Financeira",
    client: "Delta Consultoria",
    services: [
      {
        id: uuid(),
        title: "Automação Financeira",
        description: "Automação do processo financeiro",
        price: 2000,
        quantity: 1,
      },
    ],
    status: "declined",
    createdAt: new Date("2024-05-04T16:45:00"),
  },
  {
    id: "5",
    title: "Landing Page Institucional",
    client: "Eclipse Saúde",
    services: [
      {
        id: uuid(),
        title: "Landing Page Institucional",
        description: "Página de destino institucional",
        price: 1200.5,
        quantity: 1,
      },
    ],
    status: "draft",
    createdAt: new Date("2024-05-01T11:30:00"),
  },
  {
    id: "6",
    title: "Vídeo de Apresentação",
    client: "Foco Logística",
    services: [
      {
        id: uuid(),
        title: "Vídeo de Apresentação",
        description: "Vídeo de apresentação do novo produto",
        price: 800.75,
        quantity: 1,
      },
    ],
    status: "approved",
    createdAt: new Date("2024-05-03T13:00:00"),
  },
  {
    id: "7",
    title: "Sistema de Assinatura",
    client: "Gama Jurídico",
    services: [
      {
        id: uuid(),
        title: "Sistema de Assinatura",
        description: "Sistema de assinatura digital",
        price: 1800.25,
        quantity: 1,
      },
    ],
    status: "sent",
    createdAt: new Date("2024-05-02T10:45:00"),
  },
  {
    id: "8",
    title: "App de Reservas",
    client: "Horizonte Turismo",
    services: [
      {
        id: uuid(),
        title: "App de Reservas",
        description: "Aplicativo de reserva de hotéis",
        price: 2500,
        quantity: 1,
      },
    ],
    status: "declined",
    createdAt: new Date("2024-05-04T15:30:00"),
  },
];
