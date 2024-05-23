import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Contador from './components/Contador';

export default function App() {
  return (
    <View style={styles.container}>
      <Contador />
      <StatusBar style="auto" />
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
<<<<<<< HEAD
});
=======
});
>>>>>>> d49465fd71be9fd7e82ccb27caee726e73227030
