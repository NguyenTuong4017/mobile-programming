import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");
  const count = useRef(0);
  const handleAdd = () => {
    count.current += 1;
    const data = {
      id: count.current.toString(),
      listItem: item,
    };

    setList([...list, data]);
    setItem("");
  };
  const handleClear = () => {
    setList([]);
  };
  return (
    <View style={styles.container}>
      <View style={styles.elementContainer}>
        <TextInput
          style={styles.listInput}
          value={item}
          onChangeText={(text) => setItem(text)}
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleAdd}>
            <Text style={styles.buttonText}>ADD</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handleClear}>
            <Text style={styles.buttonText}>CLEAR</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.listContainer}>
          <FlatList
            data={list}
            key={(item) => item.id}
            renderItem={({ item }) => <Text>{item.listItem}</Text>}
          />
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  listInput: {
    borderWidth: 1,
    height: 30,
    width: 150,
  },
  buttonContainer: {
    flexDirection: "row",
    width: 100,
    justifyContent: "space-between",
    marginTop: 10,
  },
  button: {
    backgroundColor: "#007AFF",
    borderRadius: 10,
  },
  buttonText: {
    padding: 5,
    color: "#fff",
    fontWeight: 500,
  },
  elementContainer: {
    height: 300,
    alignItems: "center",
    justifyContent: "center",
  },
  listContainer: {
    marginTop: 10,
  },
});
