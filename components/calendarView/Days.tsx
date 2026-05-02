import { ThemeContext } from "@react-navigation/native";
import { useContext } from "react";
import { ColorSchemeName, FlatList, StyleSheet, View } from "react-native";
import CustomDate from "./CustomDate";

type DaysProps = {
  firstWeekDayOfMonth: number;
  lastDayOfMonth: number;
  dayOfMonth: Date;
};

const Days = ({
  firstWeekDayOfMonth,
  lastDayOfMonth,
  dayOfMonth,
}: DaysProps) => {
  let totalCells = firstWeekDayOfMonth + lastDayOfMonth;
  totalCells += 7 - (totalCells % 7);
  const cellsArr = Array.from({ length: totalCells }).fill(null);
  const theme = useContext(ThemeContext);
  if (!theme)
    throw new Error(
      "ThemeContext is undefined. Make sure you are using a ThemeProvider.",
    );
  const styles = createStyles(theme.dark === true ? "dark" : "light");
  return (
    <View style={styles.daysContainer}>
      <FlatList
        data={cellsArr}
        renderItem={({ item, index }) => {
          const dayNumber = index - firstWeekDayOfMonth + 1;
          return (
            <View style={{ flex: 1, alignItems: "center" }}>
              {index < firstWeekDayOfMonth ||
              index > firstWeekDayOfMonth + lastDayOfMonth - 1 ? (
                <CustomDate />
              ) : (
                <CustomDate dayNumber={dayNumber} dayOfMonth={dayOfMonth} />
              )}
            </View>
          );
        }}
        numColumns={7}
        keyExtractor={(list, index) => `${index}${list}`}
        contentContainerStyle={styles.daysInnerContainer}
      ></FlatList>
    </View>
  );
};

function createStyles(theme: ColorSchemeName) {
  return StyleSheet.create({
    daysContainer: {
      padding: 2,
      marginTop: 5,
      width: "80%",
      alignSelf: "center",
    },
    daysInnerContainer: {
      justifyContent: "space-evenly",
    },
  });
}

export default Days;
