import { View, Text, StyleSheet} from "react-native"

export default function AgendaScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Event Agenda</Text>

      <View style={styles.card}>
        <Text style={styles.time}>09:00 AM</Text>
        <Text style={styles.session}>Opening Ceremony</Text>
        <Text style={styles.location}>Main Hall</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.time}>11:00 AM</Text>
        <Text style={styles.session}>Panel Discussion</Text>
        <Text style={styles.location}>Conference Room A</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.time}>02:00 PM</Text>
        <Text style={styles.session}>Networking Session</Text>
        <Text style={styles.location}>Exhibition Area</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    marginBottom: 24,
    color: "#111",
  },
  card: {
    padding: 18,
    borderRadius: 14,
    backgroundColor: "#f2f2f2",
    marginBottom: 14,
  },
  time: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 6,
    color: "#555",
  },
  session: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#111",
  },
  location: {
    fontSize: 15,
    color: "#666",
  },
});