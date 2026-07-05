import * as Device from 'expo-device';
import { Platform, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AnimatedIcon } from '@/components/animated-icon';
import { HintRow } from '@/components/hint-row';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { WebBadge } from '@/components/web-badge';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { View, Text, Pressable,  } from "react-native";


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Welcome to</Text>

      <Text style={styles.title}>KaiApp Events</Text>

      <Text style={styles.description}>
        This is my first mobile app built with React Native and Expo.
      </Text>

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>View Agenda</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
  smallText: {
    fontSize: 18,
    marginBottom: 8,
    color: "#555",
  },
  title: {
    fontSize: 42,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#111",
  },
  description: {
    fontSize: 18,
    lineHeight: 26,
    marginBottom: 30,
    color: "#444",
  },
  button: {
    backgroundColor: "#111",
    padding: 16,
    borderRadius: 12,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});