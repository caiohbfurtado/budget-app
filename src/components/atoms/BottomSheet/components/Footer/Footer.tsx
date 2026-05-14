import { View } from "react-native";

import {
  BottomSheetFooter,
  BottomSheetFooterProps,
} from "@gorhom/bottom-sheet";

import CheckIcon from "../../../../../assets/icons/check.svg";
import { Button } from "../../../../";

import { styles } from "./styles";

export function Footer(footerProps: BottomSheetFooterProps) {
  return (
    <BottomSheetFooter
      {...footerProps}
      // bottomInset={24}
      style={styles.container}
    >
      <Button variant="secondary" title="Resetar filtros" />
      <Button icon={CheckIcon} title="Aplicar" />
    </BottomSheetFooter>
  );
}
