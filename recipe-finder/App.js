import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";

export default function App() {
  const [searchItem, setSearchItem] = useState("");
  const [meal, setMeal] = useState([]);

  const handleFetch = async () => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchItem}`
    );
    const data = await response.json();
    setMeal(data.meals);
  };

  const handleSearch = () => {
    handleFetch();
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.elementContainer}>
          <Text style={styles.header}>Recipe Finder</Text>
          <View style={styles.inputAndButton}>
            <TextInput
              style={styles.input}
              placeholder="Ingredients"
              value={searchItem}
              onChangeText={(text) => setSearchItem(text)}
            />

            <TouchableOpacity style={styles.button} onPress={handleSearch}>
              <Text style={styles.buttonText}>FIND</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.list}>
            <FlatList
              data={meal}
              key={(item) => item.mealId}
              renderItem={({ item }) => (
                <View style={styles.mealItem}>
                  <Text style={styles.mealText}>{item.strMeal}</Text>
                  <Image
                    source={{ uri: item.strMealThumb }}
                    style={styles.mealImage}
                  />
                </View>
              )}
            />
          </View>
        </View>

        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    width: 200,
    //backgroundColor: "purple",
    height: 50,
    marginRight: 150,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  elementContainer: {
    width: 400,
    height: 700,
    alignItems: "center",
    //backgroundColor: "green",
    justifyContent: "flex-start",
    marginBottom: 100,
    marginTop: 120,
  },
  input: {
    borderWidth: 1,
    width: 200,
    height: 50,
    borderRadius: 5,
    padding: 5,
    fontSize: 16,
  },
  inputAndButton: {
    width: 400,
    //backgroundColor: "blue",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "space-around",
  },
  list: {
    marginTop: 10,
    height: 575,
    width: 400,
    //backgroundColor: "red",
    padding: 20,
  },
  button: {
    marginTop: 10,
    width: 100,
    backgroundColor: "#007AFF",
    height: 40,
    borderRadius: 20,
    marginBottom: 5,
  },

  buttonText: {
    color: "#fff",
    padding: 10,
    textAlign: "center",
    fontWeight: "bold",
  },
  mealItem: {
    borderWidth: 1,
    marginTop: 10,
    padding: 10,
    height: 100,
    width: 350,
    borderRadius: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    marginLeft: 5,
  },
  mealImage: {
    width: 75,
    height: 75,
    borderRadius: 5,
  },

  mealText: {
    fontWeight: "bold",
  },
});
