import { useTheme } from "@react-navigation/native";
import type { Dispatch, SetStateAction } from "react";
import { ColorSchemeName, FlatList, StyleSheet, View } from "react-native";
import CustomDate from "./CustomDate";

type DaysProps = {
  firstWeekDayOfMonth: number;
  lastDayOfMonth: number;
  dayOfMonth: Date;
  setVisible: Dispatch<SetStateAction<boolean>>;
};

const Days = ({
  firstWeekDayOfMonth,
  lastDayOfMonth,
  dayOfMonth,
  setVisible,
}: DaysProps) => {
  let totalCells = firstWeekDayOfMonth + lastDayOfMonth;
  totalCells += 7 - (totalCells % 7);
  const cellsArr = Array.from({ length: totalCells }).fill(null);
  const theme = useTheme();

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
                <CustomDate setVisible={setVisible} />
              ) : (
                <CustomDate
                  dayNumber={dayNumber}
                  dayOfMonth={dayOfMonth}
                  setVisible={setVisible}
                />
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
