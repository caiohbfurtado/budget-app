import {
  type ComponentRef,
  forwardRef,
  useCallback,
  useMemo,
  useRef,
} from "react";

import GorhomBottomSheet, {
  BottomSheetBackdropProps,
  BottomSheetFooterProps,
  BottomSheetProps as GorhomBottomSheetProps,
  BottomSheetView,
  SNAP_POINT_TYPE,
} from "@gorhom/bottom-sheet";

import { Backdrop, Footer, HandleComponent } from "./components";
import { styles } from "./styles";

type BottomSheetProps = GorhomBottomSheetProps & {
  title: string;
  footer?: React.ReactNode;
};

export type BottomSheetRef = ComponentRef<typeof GorhomBottomSheet>;

export const BottomSheet = forwardRef<BottomSheetRef, BottomSheetProps>(
  (
    { children, snapPoints, onChange, onClose, title, footer, ...props },
    ref,
  ) => {
    const bottomSheetRef = useRef<BottomSheetRef>(null);

    const handleBottomSheetRef = useCallback(
      (instance: BottomSheetRef | null) => {
        bottomSheetRef.current = instance;

        if (typeof ref === "function") {
          ref(instance);
          return;
        }

        if (ref) {
          ref.current = instance;
        }
      },
      [ref],
    );

    const renderBackdrop = useCallback(
      (backdropProps: BottomSheetBackdropProps) => (
        <Backdrop {...backdropProps} />
      ),
      [],
    );

    const renderFooterComponent = useCallback(
      (footerProps: BottomSheetFooterProps) =>
        footer ? <Footer {...footerProps}>{footer}</Footer> : null,
      [footer],
    );

    const renderHandleComponent = useCallback(
      () => (
        <HandleComponent
          title={title}
          onClose={() => bottomSheetRef.current?.close()}
        />
      ),
      [title],
    );

    const handleSheetChanges = useCallback(
      (index: number, position: number, type: SNAP_POINT_TYPE) => {
        onChange?.(index, position, type);
      },
      [onChange],
    );

    const defaultSnapPoints = useMemo(() => ["50%", "70%"], []);

    return (
      <GorhomBottomSheet
        ref={handleBottomSheetRef}
        snapPoints={snapPoints ?? defaultSnapPoints}
        onChange={handleSheetChanges}
        onClose={onClose}
        backdropComponent={renderBackdrop}
        enablePanDownToClose
        handleComponent={renderHandleComponent}
        footerComponent={renderFooterComponent}
        {...props}
      >
        <BottomSheetView style={styles.container}>{children}</BottomSheetView>
      </GorhomBottomSheet>
    );
  },
);

BottomSheet.displayName = "BottomSheet";
