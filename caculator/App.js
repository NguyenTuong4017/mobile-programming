import { StatusBar } from 'expo-status-bar';
import { use, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [firstNum, setFirstNum] = useState("")
  const [secondNum, setSecondNum] = useState("")

  const[result, setResult] = useState("")

  const handlePlus = () => {
    const ref1 = parseInt(firstNum) || 0
    const ref2 = parseInt(secondNum) || 0
    setResult(ref1+ref2)
  }

  const handleMinus = () => {
    const ref1 = parseInt(firstNum) || 0
    const ref2 = parseInt(secondNum) || 0
    setResult(ref1 - ref2)
  }


  return (
    <View style={styles.container}>
      <View alignItems="center">
        <Text>Result: {result} </Text>
        <TextInput style={styles.input} value={firstNum} onChangeText={(text) => setFirstNum(text)} keyboardType='numeric'/>
        <TextInput style={styles.input} value={secondNum} onChangeText={(text) => setSecondNum(text)} keyboardType='numeric'/>
        <StatusBar style="auto" />  
      </View>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handlePlus}>
          <Text style={styles.button}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity >
          <Text style={styles.button} onPress={handleMinus}>-</Text>
        </TouchableOpacity>
       
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    height: 25,
    width: 200,
    marginTop: 5

  },
  button:{
    height: 30,
    width: 40,
    padding: 5,
    color: '#fff',
    textAlign: 'center',
    backgroundColor: '#007AFF',

  },

  buttonContainer: {
    flexDirection: 'row',
    width: 100,
    justifyContent: 'space-between',
    marginTop: 5
  
  }
});
