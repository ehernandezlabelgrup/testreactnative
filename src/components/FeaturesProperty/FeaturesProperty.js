import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const FeaturesProperty = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Floating apartment</Text>
      <View style={styles.contentFeatures}>
        <View style={styles.contentLocation}>
          <Text>Porland, Oregon</Text>
          <Text>633183809</Text>
        </View>
        <View style={styles.contentDescription}>
          <Text>2 Bedroom</Text>
          <Text>1 Bathroom</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  contentFeatures: {
    display: 'flex',
    flexDirection: 'row',
  },
  contentLocation: {
    width: '50%',
  },
  contentDescription: {
    width: '50%',
    display: 'flex',
    alignItems: 'flex-end',
  },
});

export default FeaturesProperty;
