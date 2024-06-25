import { View, Text } from "react-native";
import { StyleSheet } from "react-native";

const selectMonth = {
  0: "January",
  1: "February",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December",
};
export default function Date({ month, year }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {selectMonth[month]} {year}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 21,
    paddingHorizontal: 0,
  },
  text: {
    color: "rgba(0, 0, 0, 0.8)",
    fontFamily: "Lato",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "700",
  },
});
