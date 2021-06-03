import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase'


const firebaseConfig = {
  apiKey: "AIzaSyBoRzAE-Jxy3S4uqQAqlhLxYm4PSw4znYw",
  authDomain: "react-native-chat-a1787.firebaseapp.com",
  projectId: "react-native-chat-a1787",
  storageBucket: "react-native-chat-a1787.appspot.com",
  messagingSenderId: "837362959957",
  appId: "1:837362959957:web:cfd825c399c8140d8db6dc"
};

firebase.initializeApp(firebaseConfig);

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
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
});
