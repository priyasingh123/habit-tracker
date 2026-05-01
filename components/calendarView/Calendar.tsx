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
      <ArrowBtn direction="left" />
      <Month date={new Date()} />
      <ArrowBtn direction="right" />
    </View>
  );
};

export default Calendar;
