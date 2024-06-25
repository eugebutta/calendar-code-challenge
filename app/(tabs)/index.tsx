import Card from "@/components/Card";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import { useEffect, useState } from "react";

import Date from "@/components/Date";
import Header from "@/components/Header";
import mockJon from "../../assets/mockjson.json";
import { Action, Calendar, ChallengeData } from "../models/ChallengeData";
import fetchChallengeData from "../../middleware/apiMiddleware";

export default function CalendarContainer() {
  const [selectedCardId, setSelectedCardId] = useState("");
  const [challengeData, setChallengeData] = useState<ChallengeData>();
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const data = await fetchChallengeData();
      setChallengeData(data);
    } catch (error: any) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const customer = challengeData?.customer;

  const handleCardPress = (id: Action["id"]) => {
    setSelectedCardId(id);
  };
  return (
    <ScrollView style={styles.container}>
      <Header />
      <View>
        {challengeData?.calendar.map(({ month, year, actions }: Calendar) => (
          <View key={`${year}-${month}`}>
            <Date month={month} year={year} />
            {actions.length > 0 ? (
              actions.map(
                (
                  {
                    name,
                    status,
                    vendor,
                    arrivalStartWindow,
                    arrivalEndWindow,
                    id,
                  }: Action,
                  index: number
                ) => {
                  return (
                    <Card
                      vendor={vendor}
                      nameService={name}
                      statusService={status}
                      customer={customer}
                      scheduledDate={
                        arrivalStartWindow
                          ? `${arrivalStartWindow}-${arrivalEndWindow}`
                          : ""
                      }
                      isLastCard={index === actions.length - 1}
                      onPress={() => handleCardPress(id)}
                      isSelected={selectedCardId === id}
                      key={id}
                    />
                  );
                }
              )
            ) : (
              <View style={styles.noMaintenceContainer}>
                <Text style={styles.text}>No Maintenance Scheduled</Text>
              </View>
            )}
          </View>
        ))}
        {error && <Text>{error}</Text>}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    width: "100%",
  },
  noMaintenceContainer: {
    height: 44,
    flexShrink: 0,
    borderRadius: 4,
    backgroundColor: "#848FA5",
    width: "90%",
    display: "flex",
    alignSelf: "flex-end",
    justifyContent: "center",
    paddingTop: 12,
    paddingBottom: 14,
    paddingLeft: 16,
  },
  text: {
    color: "white",
    fontFamily: "Lato",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 20,
  },
});
