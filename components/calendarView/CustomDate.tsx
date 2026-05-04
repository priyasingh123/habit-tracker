import { useTheme } from "@react-navigation/native";
import type { Dispatch, SetStateAction } from "react";
import { ColorSchemeName, Pressable, StyleSheet, Text } from "react-native";

const CustomDate = ({
  dayNumber,
  dayOfMonth,
  setVisible,
}: {
  dayNumber?: number;
  dayOfMonth?: Date;
  setVisible: Dispatch<SetStateAction<boolean>>;
}) => {
  const theme = useTheme();

  const styles = createStyles(theme.dark === true ? "dark" : "light");
  const isSameMonthYear = () => {
    const today = new Date();
    const todayMonth = today.getMonth();
    const todayYear = today.getFullYear();

    const MonthOfDayOfMonth = dayOfMonth?.getMonth();
    const YearOfDayOfMonth = dayOfMonth?.getFullYear();

    if (
      todayMonth === MonthOfDayOfMonth &&
      todayYear === YearOfDayOfMonth &&
      dayNumber === today.getDate()
    ) {
      return true;
    }
    return false;
  };

  return (
    <Pressable
      disabled={!dayNumber}
      onPress={() => setVisible(true)}
      style={({ pressed }) => [
        styles.dateBtn,
        pressed && styles.dateBtnPressed,
        isSameMonthYear() === true ? styles.today : "",
      ]}
    >
      <Text
        style={[
          isSameMonthYear() === true ? styles.todayText : styles.dateText,
        ]}
      >
        {dayNumber}
      </Text>
    </Pressable>
  );
};

function createStyles(theme: ColorSchemeName) {
  return StyleSheet.create({
    dateBtn: {
      flex: 1,
      alignItems: "center",
      paddingHorizontal: 8,
      paddingVertical: 5,
      borderRadius: "50%",
      margin: 2,
    },
    dateBtnPressed: {
      backgroundColor: theme === "dark" ? "#333" : "#ddd",
    },
    dateText: {
      color: theme === "dark" ? "white" : "black",
      fontSize: 20,
    },
    today: {
      borderRadius: "0%",
      backgroundColor: theme === "dark" ? "#ddd" : "#333",
    },
    todayText: {
      fontSize: 20,
      color: theme === "dark" ? "#333" : "#ddd",
    },
  });
}

export default CustomDate;
