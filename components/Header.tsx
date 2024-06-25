import { Text, View } from "react-native";
import { StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Calendar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 84,
    flexShrink: 0,
  },
  text: {
    color: "rgba(0, 0, 0, 0.8)",
    textAlign: "center",
    textShadowColor: "#DCDCDC",
    textShadowOffset: { width: 1, height: 1 },
    fontFamily: "Lato",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 24,
    paddingTop: 50,
  },
});
