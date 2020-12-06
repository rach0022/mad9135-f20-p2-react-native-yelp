import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { API_KEY } from '@env'
import { themes } from './styles'

export default function App() {
  // create our reference to the light theme 
  const theme = themes.light
  // console.log(API_KEY) // testing if API key will work 
  return (
    <View style={styles.container}>
      <Text color={{ color: theme.subduedTextColor }}>Stuff</Text>
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