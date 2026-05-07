import { Pressable, StyleSheet, Text, View } from "react-native";

const HabitList = () => {
  const styles = createStyles();
  return (
    <View style={styles.habit_list_wrapper}>
      <Text style={styles.date_text}></Text>
      <View></View>
      <Pressable>
        <Text>Save Changes</Text>
      </Pressable>
    </View>
  );
};

function createStyles() {
  return StyleSheet.create({
    habit_list_wrapper: {},
    date_text: {},
  });
}

export default HabitList;
