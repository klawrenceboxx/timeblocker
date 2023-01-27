import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  Alert,
} from "react-native";

function Tasks() {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState("");

  const handleSubmit = () => {
    setTodos([
      ...todos,
      { text: todoText, key: todos.length.toString(), checked: false },
    ]);
    setTodoText("");
  };

  //   const handleChange = (e) => {
  //     setTodoText(e.target.value);
  //   };

  const handleCheck = (index) => {
    let newTodos = [...todos];
    newTodos[index].checked = !newTodos[index].checked;
    setTodos(newTodos);
  };

  const handleRemove = (index) => {
    let newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 20,
        }}
        value={todoText}
        onChangeText={(text) => setTodoText(text)}
      />
      <TouchableOpacity onPress={handleSubmit}>
        <Text>Add Todo</Text>
      </TouchableOpacity>
      {/* <FlatList */}
      {todos.map((todo, index) => (
        <View key={todo.key}>
          <TextInput
            type="checkbox"
            checked={todo.checked}
            onChange={() => handleCheck(index)}
          />
          <Text>{todo.text}</Text>
          <TouchableOpacity onPress={() => handleRemove(index)}>
            <Text>Remove</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}

export default Tasks;
