import type { Dispatch, SetStateAction } from "react";
import { View } from "react-native";
import DayHeader from "./DayHeader";
import Days from "./Days";

type MonthProps = {
  date: Date;
  setVisible: Dispatch<SetStateAction<boolean>>;
};

const Month = ({ date, setVisible }: MonthProps) => {
  const d = new Date(date.getFullYear(), date.getMonth(), 1);
  const startWeekDayOfMonth = d.getDay();
  const lastDayOfMonth = new Date(
    d.getFullYear(),
    d.getMonth() + 1,
    0,
  ).getDate();
  return (
    <View style={{ flex: 1 }}>
      <DayHeader
        date={date}
        setOpenDrawer={() => {}}
        setDrawerBody={() => {}}
        setMonthYear={() => {}}
      />
      <Days
        firstWeekDayOfMonth={startWeekDayOfMonth}
        lastDayOfMonth={lastDayOfMonth}
        dayOfMonth={date}
        setVisible={setVisible}
      />
    </View>
  );
};

export default Month;
