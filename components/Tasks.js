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

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: todoText, key: todos.length.toString(), checked: false },
    ]);
    setTodoText("");
  };

  const handleChange = (e) => {
    setTodoText(e.target.value);
  };

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
    <View>
      <TextInput value={todoText} onChangeText={handleChange} />
      <TouchableOpacity onPress={handleSubmit}>
        <Text>Add Todo</Text>
      </TouchableOpacity>
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
