import { ThemeContext } from "@react-navigation/native";
import { useContext } from "react";
import {
  ColorSchemeName,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";

type DaysProps = {
  firstWeekDayOfMonth: number;
  lastDayOfMonth: number;
};

const Days = ({ firstWeekDayOfMonth, lastDayOfMonth }: DaysProps) => {
  const totalCells = firstWeekDayOfMonth + lastDayOfMonth;
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
          if (index < firstWeekDayOfMonth) return <Text>{""}</Text>;
          const dayNumber = index - firstWeekDayOfMonth + 1;
          return <Text>{dayNumber}</Text>;
        }}
        numColumns={7}
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
    },
  });
}

export default Days;
