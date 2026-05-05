import { useRef, useState } from "react";
import { PanResponder, StyleSheet, Text, View } from "react-native";
import HabitDrawer from "../habitView/HabitDrawer";
import ArrowBtn from "./ArrowBtn";
import Month from "./Month";

const SWIPE_THRESHOLD = 50;

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [visible, setVisible] = useState(false);

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
        <ArrowBtn direction="left" onPress={handlePrev} date={currentDate} />
        <Month date={currentDate} setVisible={setVisible} />
        <ArrowBtn direction="right" onPress={handleNext} date={currentDate} />
      </View>
      <HabitDrawer visible={visible} onClose={() => setVisible(false)}>
        <View>
          <Text>HabitList</Text>
        </View>
      </HabitDrawer>
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
