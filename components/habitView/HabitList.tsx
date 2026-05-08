import { useDayRecordStore } from "@/store/useDayRecordStore";
import { useHabitStore } from "@/store/useHabitStore";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import Habit from "./Habit";

const HabitList = () => {
  const styles = createStyles();
  const date = useDayRecordStore((state) => state.date);
  const habits = useHabitStore((state) => state.habits);
  return (
    <View style={styles.habit_list_wrapper}>
      <Text style={styles.date_text}>
        {date
          ? new Date(date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })
          : "-"}
      </Text>
      <FlatList
        data={habits.filter((habit) => !habit.isArchived)}
        renderItem={({ item }) => {
          return <Habit title={item.title} />;
        }}
        keyExtractor={(habit) => habit._id}
      ></FlatList>
      <Pressable style={styles.save_changes_btn}>
        <Text style={styles.save_changes_text}>Save Changes</Text>
      </Pressable>
    </View>
  );
};

function createStyles() {
  return StyleSheet.create({
    habit_list_wrapper: {
      flex: 1,
    },
    date_text: {
      color: "white",
      fontSize: 30,
      fontWeight: "700",
      textAlign: "center",
    },
    habit_list: {
      flex: 1,
    },
    save_changes_btn: {
      alignSelf: "center",
      backgroundColor: "rgb(11, 100, 80)",
      paddingVertical: 6,
      paddingHorizontal: 8,
      borderRadius: 4,
      marginTop: 8,
    },
    save_changes_text: {
      fontSize: 20,
      color: "white",
    },
  });
}

export default HabitList;
