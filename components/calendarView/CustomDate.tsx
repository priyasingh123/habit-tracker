import { ThemeContext } from "@react-navigation/native";
import { useContext } from "react";
import { ColorSchemeName, Pressable, StyleSheet, Text } from "react-native";

const CustomDate = ({ dayNumber }: { dayNumber?: number }) => {
  const theme = useContext(ThemeContext);
  if (!theme)
    throw new Error(
      "ThemeContext is undefined. Make sure you are using a ThemeProvider.",
    );
  const styles = createStyles(theme.dark === true ? "dark" : "light");
  return (
    <Pressable
      style={({ pressed }) => [
        styles.dateBtn,
        pressed && styles.dateBtnPressed,
      ]}
    >
      <Text style={styles.dateText}>{dayNumber}</Text>
    </Pressable>
  );
};

function createStyles(theme: ColorSchemeName) {
  return StyleSheet.create({
    dateBtn: {
      flex: 1,
      alignItems: "center",
      paddingHorizontal: 8,
      paddingVertical: 5,
      borderRadius: "50%",
      margin: 2,
    },
    dateBtnPressed: {
      backgroundColor: theme === "dark" ? "#333" : "#ddd",
    },
    dateText: {
      color: theme === "dark" ? "white" : "black",
      fontSize: 20,
    },
  });
}

export default CustomDate;
