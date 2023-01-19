import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function Todo(props) {
  return (
    <View style={styles.taskContainer}>
      <View style={styles.category}>
        <Text>Inbox</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    backgroundColor: "grey",
    flex: 0,
    marginTop: 100,
    padding: 6,
    position: "relative",
    alignSelf: "flex-start",
    borderColor: "blue",
    borderWidth: 2,
  },
  category: {
    borderColor: "red",
    borderWidth: 2,
  },
});
