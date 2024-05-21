import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import StockList from '../database/StockList';

const DatabaseScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ARTICLES DECATHLON</Text>
      <StockList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    color: "white"
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: "white"
  },
});

export default DatabaseScreen;


