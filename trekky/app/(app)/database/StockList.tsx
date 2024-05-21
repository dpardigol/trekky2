import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { stocks } from './stocks';

const StockList = () => {
  return (
    <FlatList
      data={stocks}
      keyExtractor={(item) => item.ticker}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={[styles.text, styles.ticker]}>{item.ticker}</Text>
          <Text style={styles.text}>{item.companyName}</Text>
          <Text style={styles.text}>Price: ${item.price.toFixed(2)}</Text>
          <Text style={styles.text}>Change: {item.priceChangePercentage}% (${item.priceChange.toFixed(2)})</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  text: {
    color: 'white', // Set text color to white
  },
  ticker: {
    fontWeight: 'bold',
  },
});

export default StockList;

