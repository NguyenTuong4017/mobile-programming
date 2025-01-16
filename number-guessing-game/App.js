import { StatusBar } from "expo-status-bar";
import { use, useState } from "react";
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const [count, setCount] = useState(1);
  const [inputNum, setInputNum] = useState("");
  const [message, setMessage] = useState("Guess a number between 1-100");
  const [randomNum, setRandomNum] = useState(
    Math.floor(Math.random() * 100) + 1
  );

  const handlePress = () => {
    setCount(count + 1);
    const num = parseInt(inputNum);
    setInputNum("");
    if (num < randomNum) {
      setMessage(`Your guess ${num} is too low`);
    } else if (num > randomNum) {
      setMessage(`Your guess ${num} is too high`);
    } else {
      let endOfLine = "";
      count > 1
        ? (endOfLine = `${count} guesses`)
        : (endOfLine = `${count} guess`);
      Alert.alert("Congratulations", "You guessed the number in " + endOfLine);
    }
  };

  return (
    <View style={styles.container}>
      <Text>{message}</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={inputNum}
        onChangeText={(text) => setInputNum(text)}
      ></TextInput>

      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>MAKE GUESS</Text>
      </TouchableOpacity>

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
    marginBottom: 200,
  },
  input: {
    borderWidth: 1,
    width: 50,
    height: 30,
    marginTop: 5,
  },
  button: {
    marginTop: 10,
    backgroundColor: "#007AFF",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    backgroundColor: "#007AFF",
    fontWeight: 600,
    padding: 5,
  },
});
