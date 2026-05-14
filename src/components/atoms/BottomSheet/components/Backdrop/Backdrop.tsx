import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
} from "@gorhom/bottom-sheet";

import { styles } from "./styles";

export function Backdrop(backdropProps: BottomSheetBackdropProps) {
  return (
    <BottomSheetBackdrop
      {...backdropProps}
      style={styles.backdrop}
      appearsOnIndex={0}
      disappearsOnIndex={-1}
      pressBehavior="close"
    />
  );
}
