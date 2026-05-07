import { useTheme } from "@react-navigation/native";
import { type Dispatch, type SetStateAction } from "react";
import {
  ColorSchemeName,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Animated from "react-native-reanimated";

type DayHeaderProps = {
  date: Date;
  setOpenDrawer: Dispatch<SetStateAction<boolean>>;
  setDrawerBody: Dispatch<SetStateAction<"dailyStats" | "monthlyStats">>;
  setMonthYear: Dispatch<SetStateAction<{ month: number; year: number }>>;
};

const DayHeader = ({
  date,
  setOpenDrawer,
  setDrawerBody,
  setMonthYear,
}: DayHeaderProps) => {
  const theme = useTheme();
  const weekdays = ["S", "M", "T", "W", "T", "F", "S"];
  const handleMonthClick = async (year: number, month: number) => {
    setDrawerBody("monthlyStats");
    setOpenDrawer(true);
    setMonthYear({ month, year });
  };
  const styles = createStyle(theme.dark === true ? "dark" : "light");
  return (
    <View style={styles.dayHeaderContainer}>
      <Pressable
        style={styles.monthBanner}
        onPress={() =>
          handleMonthClick(date.getFullYear(), date.getMonth() + 1)
        }
      >
        <Text
          style={styles.monthLabel}
        >{`${date.toLocaleString("default", { month: "short" })} ${date.getFullYear()}`}</Text>
      </Pressable>
      <View style={styles.monthDays}>
        <Animated.FlatList
          data={weekdays}
          renderItem={({ item }) => (
            <View style={styles.dayItem}>
              <Text style={styles.daysText}>{item}</Text>
            </View>
          )}
          keyExtractor={(list, index) => `${index}${list}`}
          numColumns={7}
        ></Animated.FlatList>
      </View>
    </View>
  );
};

function createStyle(theme: ColorSchemeName) {
  return StyleSheet.create({
    dayHeaderContainer: {
      width: "100%",
      alignItems: "center",
    },
    monthBanner: {
      padding: 10,
      backgroundColor: theme === "dark" ? "#eee" : "#333",
      borderRadius: 7,
      width: 200,
    },
    monthLabel: {
      color: theme === "dark" ? "#333" : "#eee",
      fontWeight: "bold",
      textAlign: "center",
      fontSize: 25,
    },
    monthDays: {
      backgroundColor: "rgb(21, 134, 96)",
      padding: 2,
      marginTop: 5,
      width: "80%",
    },
    dayItem: {
      flex: 1,
      alignItems: "center",
    },
    daysText: {
      flex: 1,
      color: "white",
      padding: 10,
      fontSize: 20,
    },
  });
}

export default DayHeader;
