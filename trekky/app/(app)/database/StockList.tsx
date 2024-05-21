import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { stocks } from './stocks';

const StockList = () => {
  return (
    <FlatList
      data={stocks}
      keyExtractor={(item) => item.ticker}
      renderItem={({ item }) => (
        <View style={styles.item}>
          {/* Dynamically resolve image source based on item's imageUrl */}
          <Image style={styles.image} source={item.imageUrl} />
          <Text style={[styles.text, styles.ticker]}>{item.ticker}</Text>
          <Text style={styles.text}>{item.companyName}</Text>
          <Text style={styles.text}>Price: ${item.price.toFixed(2)}</Text>
          <Text style={styles.text}>{item.city}</Text>
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
    color: 'white',
  },
  ticker: {
    fontWeight: 'bold',
  },
  image: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
});

export default StockList;
