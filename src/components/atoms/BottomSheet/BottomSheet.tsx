import {
  type ComponentRef,
  forwardRef,
  useCallback,
  useMemo,
  useRef,
} from "react";
import { Text, TouchableOpacity, View } from "react-native";

import GorhomBottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetProps as GorhomBottomSheetProps,
  BottomSheetView,
  SNAP_POINT_TYPE,
} from "@gorhom/bottom-sheet";

import CloseIcon from "../../../assets/icons/multiply.svg";

import { styles } from "./styles";

type BottomSheetProps = GorhomBottomSheetProps & {
  title: string;
};

export type BottomSheetRef = ComponentRef<typeof GorhomBottomSheet>;

export const BottomSheet = forwardRef<BottomSheetRef, BottomSheetProps>(
  ({ children, snapPoints, onChange, onClose, title, ...props }, ref) => {
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
        <BottomSheetBackdrop
          {...backdropProps}
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          appearsOnIndex={0}
          disappearsOnIndex={-1}
          pressBehavior="close"
        />
      ),
      [],
    );

    const renderHandleComponent = useCallback(
      () => (
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>{title}</Text>

          <TouchableOpacity onPress={() => bottomSheetRef.current?.close()}>
            <CloseIcon width={24} height={24} />
          </TouchableOpacity>
        </View>
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
        {...props}
      >
        <BottomSheetView style={styles.contentContainer}>
          {children}
        </BottomSheetView>
      </GorhomBottomSheet>
    );
  },
);

BottomSheet.displayName = "BottomSheet";
