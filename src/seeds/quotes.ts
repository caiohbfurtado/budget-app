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
