import React, { useEffect, useRef } from "react";
import {
  Animated,
  Dimensions,
  Modal,
  Pressable,
  StyleSheet,
  View,
} from "react-native";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const DRAWER_HEIGHT = SCREEN_HEIGHT * 0.75;

type Props = {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function BottomDrawer({ visible, onClose, children }: Props) {
  const slideAnim = useRef(new Animated.Value(DRAWER_HEIGHT)).current;

  useEffect(() => {
    if (visible) {
      // slide up
      Animated.spring(slideAnim, {
        toValue: 0,
        useNativeDriver: true,
        bounciness: 4,
      }).start();
    } else {
      // slide down
      Animated.timing(slideAnim, {
        toValue: DRAWER_HEIGHT,
        duration: 250,
        useNativeDriver: true,
      }).start();
    }
  }, [visible, slideAnim]);

  return (
    <Modal
      visible={visible}
      transparent
      animationType="none" // we handle animation ourselves
      onRequestClose={onClose}
    >
      {/* dark backdrop */}
      <Pressable style={styles.backdrop} onPress={onClose} />

      {/* drawer panel */}
      <Animated.View
        style={[
          styles.drawer,
          { height: DRAWER_HEIGHT, transform: [{ translateY: slideAnim }] },
        ]}
      >
        {/* drag handle */}
        <View style={styles.handle} />

        {children}
      </Animated.View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  drawer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
  },
  handle: {
    width: 40,
    height: 4,
    backgroundColor: "#ccc",
    borderRadius: 2,
    alignSelf: "center",
    marginBottom: 12,
  },
});
