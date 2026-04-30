import { View } from "react-native";
import ArrowBtn from "./ArrowBtn";
import DayHeader from "./DayHeader";
import Days from "./Days";

const Month = ({ date }: { date: Date }) => {
  const d = new Date(date.getFullYear(), date.getMonth(), 1);
  const startWeekDayOfMonth = d.getDay();
  const lastDayOfMonth = new Date(
    d.getFullYear(),
    d.getMonth() + 1,
    0,
  ).getDate();
  return (
    <View style={{ alignItems: "center", flexDirection: "row" }}>
      <ArrowBtn direction="right" />
      <View style={{ flex: 1 }}>
        <DayHeader
          date={new Date()}
          setOpenDrawer={() => {}}
          setDrawerBody={() => {}}
          setMonthYear={() => {}}
        />
        <Days
          firstWeekDayOfMonth={startWeekDayOfMonth}
          lastDayOfMonth={lastDayOfMonth}
        />
      </View>
      <ArrowBtn direction="left" />
    </View>
  );
};

export default Month;
