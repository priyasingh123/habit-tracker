import { ThemeContext } from "@react-navigation/native";
import { useContext } from "react";
import { ColorSchemeName, StyleSheet, View } from "react-native";

type ArrowBtnProps = {
  direction: "left" | "right";
};

const ArrowBtn = ({ direction }: ArrowBtnProps) => {
  const theme = useContext(ThemeContext);
  if (!theme)
    throw new Error(
      "ThemeContext is undefined. Make sure you are using a ThemeProvider.",
    );
  const styles = createStyles(theme.dark ? "dark" : "light");
  return (
    <>
      <View style={styles.container}>
        {/* top line of arrow — rotates differently for left/right */}
        <View
          style={[
            styles.line,
            direction === "right" ? styles.topLeft : styles.topRight,
          ]}
        />
        {/* bottom line of arrow */}
        <View
          style={[
            styles.line,
            direction === "right" ? styles.bottomLeft : styles.bottomRight,
          ]}
        />
      </View>
    </>
  );
};
export default ArrowBtn;

function createStyles(theme: ColorSchemeName) {
  const color = theme === "dark" ? "#ffffff" : "#000000";
  const lineThickness = 2;
  const lineLength = 10;
  return StyleSheet.create({
    container: {
      width: lineLength,
      height: lineLength * 2,
      justifyContent: "center",
      alignItems: "center",
      margin: "1%",
    },

    line: {
      position: "absolute",
      width: lineThickness,
      height: lineLength, // length of each arm
      backgroundColor: color,
      borderRadius: lineThickness,
    },

    // left arrow — top arm: goes from bottom-center up to top-right
    //                        so rotate -45deg, shift up
    topLeft: {
      top: 0,
      transform: [{ rotate: "-45deg" }],
      height: lineLength + 2,
    },

    // left arrow — bottom arm: goes from top-center down to bottom-right
    //                           so rotate +45deg, shift down
    bottomLeft: {
      bottom: 0,
      transform: [{ rotate: "45deg" }],
      height: lineLength + 3,
    },

    // right arrow — mirror of left
    topRight: {
      top: 0,
      transform: [{ rotate: "45deg" }],
      height: lineLength + 2,
    },

    bottomRight: {
      bottom: 0,
      transform: [{ rotate: "-45deg" }],
      height: lineLength + 3,
    },
  });
}
