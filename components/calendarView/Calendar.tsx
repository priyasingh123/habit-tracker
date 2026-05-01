import { View } from "react-native";
import ArrowBtn from "./ArrowBtn";
import Month from "./Month";

const Calendar = () => {
  return (
    <View
      style={{
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <ArrowBtn direction="right" />
      <Month date={new Date()} />
      <ArrowBtn direction="left" />
    </View>
  );
};

export default Calendar;
