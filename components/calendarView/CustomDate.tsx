import { ThemeContext } from "@react-navigation/native";
import { useContext } from "react";
import { ColorSchemeName, Pressable, StyleSheet, Text } from "react-native";

const CustomDate = ({ dayNumber }: { dayNumber: number }) => {
  const theme = useContext(ThemeContext);
  if (!theme)
    throw new Error(
      "ThemeContext is undefined. Make sure you are using a ThemeProvider.",
    );
  const styles = createStyles(theme.dark === true ? "dark" : "light");
  return (
    <Pressable style={styles.dateBtn}>
      <Text style={styles.dateText}>{dayNumber}</Text>
    </Pressable>
  );
};

function createStyles(theme: ColorSchemeName) {
  return StyleSheet.create({
    dateBtn: {},
    dateText: {
      color: "white",
    },
  });
}

export default CustomDate;
