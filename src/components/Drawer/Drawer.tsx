import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { StyleSheet } from "react-native";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";

interface DrawerProps {
  children: React.ReactNode;
}

const Drawer = forwardRef((props: DrawerProps, ref) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleExpandDrawer = () => {
    if (bottomSheetRef.current) {
      bottomSheetRef.current.expand();
    }
  };

  useImperativeHandle(ref, () => ({
    expandDrawer: handleExpandDrawer,
  }));

  const snapPoints = ["5%", "10%", "30%", "60%", "100%"];

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={0}
      snapPoints={snapPoints}
      enablePanDownToClose={false}
    >
      <BottomSheetScrollView contentContainerStyle={styles.contentContainer}>
        {props.children}
      </BottomSheetScrollView>
    </BottomSheet>
  );
});

export default Drawer;

const styles = StyleSheet.create({
  contentContainer: {
    padding: 16,
  },
});
