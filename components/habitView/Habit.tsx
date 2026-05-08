import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { StyleSheet, Text, View } from "react-native";

const Habit = ({ title }: { title: string }) => {
  const styles = createStyles();
  return (
    <View style={styles.habit_container}>
      <MaterialCommunityIcons
        name="close-circle"
        size={25}
        style={styles.cancel_btn}
      />
      <View style={styles.habit_info_container}>
        <Text style={styles.habit_text}>{title}</Text>
        <MaterialCommunityIcons name="pencil" size={24} color="white" />
      </View>
      <MaterialCommunityIcons
        name="checkbox-blank-outline"
        size={27}
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
      backgroundColor: "rgb(11, 124, 86)",
      borderRadius: 10,
      padding: 10,
      margin: 6,
    },
    habit_info_container: {
      flexDirection: "row",
      flex: 1,
      alignItems: "center",
    },
    habit_text: {
      flex: 1,
      fontSize: 15,
      color: "white",
    },
    cancel_btn: {
      backgroundColor: "white",
      color: "red",
      borderRadius: "50%",
      marginRight: 4,
    },
  });
}

export default Habit;
