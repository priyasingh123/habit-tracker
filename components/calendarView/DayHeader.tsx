import { ThemeContext } from "@react-navigation/native";
import { useContext, type Dispatch, type SetStateAction } from "react";
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
  const theme = useContext(ThemeContext);
  const weekdays = ["S", "M", "T", "W", "T", "F", "S"];
  const handleMonthClick = async (year: number, month: number) => {
    setDrawerBody("monthlyStats");
    setOpenDrawer(true);
    setMonthYear({ month, year });
  };
  if (!theme)
    throw new Error(
      "ThemeContext is undefined. Make sure you are using a ThemeProvider.",
    );
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
      backgroundColor: "green",
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
      padding: 10,
      fontSize: 20,
    },
  });
}

export default DayHeader;
