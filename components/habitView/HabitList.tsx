import { useDayRecordStore } from "@/store/useDayRecordStore";
import { useHabitStore } from "@/store/useHabitStore";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

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
        data={habits}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
        keyExtractor={(habit) => habit._id}
      ></FlatList>
      <Pressable>
        <Text>Save Changes</Text>
      </Pressable>
    </View>
  );
};

function createStyles() {
  return StyleSheet.create({
    habit_list_wrapper: {
      alignItems: "center",
    },
    date_text: {
      color: "white",
      fontSize: 30,
      fontWeight: "700",
    },
  });
}

export default HabitList;
