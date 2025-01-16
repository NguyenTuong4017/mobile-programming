import { StatusBar } from "expo-status-bar";
import { use, useState } from "react";
import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const [firstNum, setFirstNum] = useState("");
  const [secondNum, setSecondNum] = useState("");
  const [history, setHistory] = useState([{}]);
  let count = 0;

  const [result, setResult] = useState("");

  const handlePlus = () => {
    const ref1 = parseInt(firstNum) || 0;
    const ref2 = parseInt(secondNum) || 0;
    setFirstNum("");
    setSecondNum("");
    setResult(ref1 + ref2);
    count += 1;

    const data = {
      id: toString(count),
      title: `${ref1} + ${ref2} = ${ref1 + ref2}`,
    };

    setHistory([...history, data]);
  };

  const handleMinus = () => {
    const ref1 = parseInt(firstNum) || 0;
    const ref2 = parseInt(secondNum) || 0;
    setFirstNum("");
    setSecondNum("");
    setResult(ref1 - ref2);
    count += 1;

    const data = {
      id: toString(count),
      title: `${ref1} - ${ref2} = ${ref1 - ref2}`,
    };

    setHistory([...history, data]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View alignItems="center">
          <Text>Result: {result} </Text>
          <TextInput
            style={styles.input}
            value={firstNum}
            onChangeText={(text) => setFirstNum(text)}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            value={secondNum}
            onChangeText={(text) => setSecondNum(text)}
            keyboardType="numeric"
          />
          <StatusBar style="auto" />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handlePlus}>
            <Text style={styles.button}>+</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleMinus}>
            <Text style={styles.button}>-</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.historyButton}>History</Text>
          </TouchableOpacity>
        </View>

        <View>
          <FlatList
            data={history}
            renderItem={({ item }) => <Text>{item.title}</Text>}
            key={(item) => item.id}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    height: 25,
    width: 200,
    marginTop: 5,
  },
  button: {
    height: 30,
    width: 40,
    padding: 5,
    color: "#fff",
    textAlign: "center",
    backgroundColor: "#007AFF",
  },

  buttonContainer: {
    flexDirection: "row",
    width: 200,
    justifyContent: "space-evenly",
    marginTop: 10,
  },
  historyButton: {
    height: 30,
    width: 80,
    padding: 5,
    color: "#fff",
    textAlign: "center",
    backgroundColor: "#007AFF",
  },
});
