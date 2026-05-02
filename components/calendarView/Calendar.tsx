import { useRef, useState } from "react";
import { PanResponder, StyleSheet, View } from "react-native";
import ArrowBtn from "./ArrowBtn";
import Month from "./Month";

const SWIPE_THRESHOLD = 50;

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handlePrev = () => {
    setCurrentDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1),
    );
  };

  const handleNext = () => {
    setCurrentDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1),
    );
  };

  const swipeResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => false,
      onMoveShouldSetPanResponder: (_, { dx, dy }) =>
        Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 10,
      onPanResponderRelease: (_, { dx }) => {
        if (dx > SWIPE_THRESHOLD) handlePrev();
        else if (dx < -SWIPE_THRESHOLD) handleNext();
      },
    }),
  ).current;

  return (
    <View {...swipeResponder.panHandlers}>
      <View style={styles.header}>
        <ArrowBtn direction="left" onPress={handlePrev} />
        <Month date={currentDate} />
        <ArrowBtn direction="right" onPress={handleNext} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default Calendar;
