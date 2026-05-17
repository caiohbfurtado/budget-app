import {
  BottomSheetFooter,
  BottomSheetFooterProps,
} from "@gorhom/bottom-sheet";

import { styles } from "./styles";

type FooterProps = BottomSheetFooterProps & {
  children?: React.ReactNode;
};

export function Footer({ children, ...rest }: FooterProps) {
  return (
    <BottomSheetFooter {...rest} style={styles.container}>
      {children}
    </BottomSheetFooter>
  );
}
