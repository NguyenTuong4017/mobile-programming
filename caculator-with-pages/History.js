import { StyleSheet, View, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";

export default function History({ route }) {
  const { history } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.historyContainer}>
        <Text style={{ fontWeight: "bold", marginBottom: 10 }}>History</Text>
        <FlatList
          data={history}
          renderItem={({ item }) => <Text>{item.title}</Text>}
          keyExtractor={(item) => item.id}
        />
      </View>
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

  historyContainer: {
    alignItems: "center",
    marginTop: 50,
  },
});
