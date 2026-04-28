import { View } from "react-native";
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
    <View style={{ alignItems: "center" }}>
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
  );
};

export default Month;
