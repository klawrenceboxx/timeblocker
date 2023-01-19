import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Todo from "./Todo";

export default function Game(props) {
  return (
    <View style={styles.container}>
      {/* contain the whole app */}

      <View style={styles.calendar}>
        {/*the calendar portion sitting inside the rest of the container (app)*/}
        <View style={styles.month}>
          <View style={styles.date}>
            <Text>Janurary 2023</Text>
            <View style={styles.weekdays}>
              <Text>SUN</Text>
              <Text>MON</Text>
              <Text>TUE</Text>
              <Text>WED</Text>
              <Text>THU</Text>
              <Text>FRI</Text>
              <Text>SAT</Text>
            </View>
            <View style={styles.time}>
              <Text>4 AM</Text>
              <Text>5 AM</Text>
              <Text>6 AM</Text>
              <Text>7 AM</Text>
              <Text>8 AM</Text>
              <Text>9 AM</Text>
              <Text>10 AM</Text>
              <Text>11 AM</Text>
              <Text>12 PM</Text>
              <Text>1 PM</Text>
              <Text>2 PM</Text>
              <Text>3 PM</Text>
              <Text>4 PM</Text>
              <Text>5 PM</Text>
              <Text>6 PM</Text>
              <Text>7 PM</Text>
              <Text>8 PM</Text>
              <Text>9 PM</Text>
              <Text>10 PM</Text>
            </View>
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ddd",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // paddingTop: 30,
    borderColor: "red",
    borderWidth: 2,
    margin: 10,
  },
  calendar: {
    backgroundColor: "white",
    flex: 1,
    marginTop: 100,
    padding: 6,
    position: "relative",
    width: 240,
    alignSelf: "flex-end",
    borderColor: "red",
    borderWidth: 2,
  },
  month: {
    flex: 1,
  },
  date: {
    flex: 1,
    // borderColor: "blue",
    // borderWidth: 2,
  },
  weekdays: {
    flex: 0,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingTop: 8,
    paddingBottom: 8,
    // borderColor: "red",
    // borderWidth: 2,
  },
  time: {
    flex: 1,
    justifyContent: "space-between",
    // borderColor: "green",
    // borderWidth: 2,
  },
});
