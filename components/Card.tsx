import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

import { CheckCircleIcon } from "react-native-heroicons/solid";
import { ClockIcon } from "react-native-heroicons/outline";

const getIcon = {
  Completed: <CheckCircleIcon style={{ color: "#00B47D" }} />,
  Scheduled: <ClockIcon style={{ color: "#00B47D" }} />,
};
export default function Card({
  nameService,
  statusService,
  vendor,
  customer,
  scheduledDate,
  isLastCard,
  isSelected,
  onPress,
}) {
  const isUnscheduled = statusService == "Unscheduled";
  const { phoneNumber, vendorName } = vendor || {};
  const { street } = customer || {};

  return (
    <View
      style={
        !isLastCard
          ? styles.container
          : { ...styles.container, ...styles.container.lastCard }
      }
    >
      <View style={styles.leftContent}>
        <Text style={{ ...styles.text, ...styles.text.day }}>
          {isUnscheduled ? "TBD" : "WED"}{" "}
        </Text>
        <Text style={{ ...styles.text, ...styles.text.number }}>4</Text>
        {getIcon[statusService]}
      </View>
      <TouchableOpacity
        style={{
          ...styles[statusService],
          ...styles.rightContent,
          ...(isSelected ? styles.selectedButton : {}),
        }}
        activeOpacity={1}
        onPress={onPress}
      >
        <View style={styles.vendorInfo}>
          <Text style={{ ...styles.text, ...styles.text.principal }}>
            {nameService}
          </Text>
          <Text style={styles.text}>{vendorName}</Text>
          <Text style={{ ...styles.text, ...styles.text.phone }}>
            {phoneNumber}
          </Text>
        </View>

        <View>
          <View style={styles.address}>
            <svg
              width="7"
              height="10"
              viewBox="0 0 7 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.5 0C1.565 0 0 1.565 0 3.5C0 6.125 3.5 10 3.5 10C3.5 10 7 6.125 7 3.5C7 1.565 5.435 0 3.5 0ZM3.5 4.75C2.81 4.75 2.25 4.19 2.25 3.5C2.25 2.81 2.81 2.25 3.5 2.25C4.19 2.25 4.75 2.81 4.75 3.5C4.75 4.19 4.19 4.75 3.5 4.75Z"
                fill="white"
              />
            </svg>
            <Text style={styles.text}>{street}</Text>
          </View>
          <Text style={styles.text}>
            {!isUnscheduled
              ? `${statusService} ${scheduledDate}`
              : "Schedule date & time TBD"}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
    color: "white",
    width: "100%",
    marginBottom: 4,
    lastCard: {
      marginBottom: 0,
    },
  },
  shadowContainer: {
    width: 22,
    height: 11,
  },
  selectedButton: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  leftContent: {
    display: "flex",
    alignItems: "center",
    gap: 5,
  },
  rightContent: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    gap: 10,
    height: 111,
    width: "90%",
    borderRadius: 4,
    color: "white",
    display: "flex",
    justifyContent: "space-around",
  },
  Completed: {
    backgroundColor: "#00B47D",
  },
  Scheduled: {
    backgroundColor: "#006A4B",
  },
  Unscheduled: {
    backgroundColor: "#011638",
  },
  address: {
    flexDirection: "row",
    display: "flex",
    gap: 4,
    alignItems: "center",
  },
  vendorInfo: {
    gap: 1,
  },
  text: {
    day: {
      color: "rgba(0 0 0 0.60)",
      fontSize: 9,
      fontFamily: "Lato",
      fontWeight: "900",
      wordWrap: "break-word",
    },
    number: {
      color: "rgba(0, 0, 0, 0.80)",
      textAlign: "center",
      fontFamily: "SF Pro Display",
      fontSize: "20px",
      fontWeight: "700",
    },
    principal: {
      fontSize: 16,
      fontWeight: "700",
    },
    phone: {
      fontWeight: "700",
    },
    color: "var(--Color, #FFF)",
    fontFamily: "Lato",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "400",
  },
});
