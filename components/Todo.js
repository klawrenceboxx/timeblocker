import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function Todo(props) {
  return (
    <View style={styles.taskContainer}>
      <View style={styles.category}>
        <Text>Inbox</Text>
        <Text>Today</Text>
        <Text>Upcoming</Text>
        <Text>Filter</Text>
      </View>
      <View style={styles.tasks}>
        <Text>Reading</Text>
        <Text>Coding</Text>
        <Text>Exercising</Text>
        <Text>Meditate</Text>
        <Text>Plan Tomorrow</Text>
        <Text>Hygiene</Text>
      </View>
    </View>
  );
}
// figure out how to make the asbolute views "see" eachother and fill up the space between the two of them
const styles = StyleSheet.create({
  taskContainer: {
    flex: 1,
    backgroundColor: "grey",
    flex: 0,
    marginTop: 100,
    padding: 6,
    position: "absolute",
    bottom: 0,
    top: 0,
    width: 140,
    alignSelf: "flex-start",
    borderColor: "blue",
    borderWidth: 2,
  },
  category: {
    height: 200,
    borderColor: "red",
    borderWidth: 2,
  },

  tasks: {
    flex: 1,
    justifyContent: "space-between",
    borderColor: "red",
    borderWidth: 2,
  },
});
