import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [name,setName] = useState("");


  const handlePress = () => {
    Alert.alert("Alerttt",'Your name is: ' + name);
  }


  return (
    <View style={styles.container}>
      <TextInput placeholder='Enter your name' value={name} onChangeText={text => setName(text)} keyboardType='numeric' backgroundColor='#fff'/>
      <Button title='press'  onPress={handlePress } color="#fff"/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2735',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
