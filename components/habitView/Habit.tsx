import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { StyleSheet, Text, View } from "react-native";

const Habit = ({ title }: { title: string }) => {
  const styles = createStyles();
  return (
    <View style={styles.habit_container}>
      <MaterialCommunityIcons name="close-circle" size={24} color="white" />
      <View style={styles.habit_info_container}>
        <Text>{title}</Text>
        <MaterialCommunityIcons name="pencil" size={24} color="white" />
      </View>
      <MaterialCommunityIcons
        name="checkbox-blank-outline"
        size={24}
        color="white"
      />
    </View>
  );
};

function createStyles() {
  return StyleSheet.create({
    habit_container: {
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
    },
    habit_info_container: {
      flexDirection: "row",
      flex: 1,
    },
  });
}

export default Habit;
