import React from 'react';
import { View, StyleSheet} from 'react-native';
import CreateInfoBooking from '../../components/CreateInfoBooking';
import FeaturesProperty from '../../components/FeaturesProperty';
import HeaderPictureProperty from '../../components/HeaderPictureProperty';

const DetailPropertyScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
         <HeaderPictureProperty />
        </View>
        <View style={styles.features}>
          <FeaturesProperty />
        </View>
        <View style={styles.infoOwner}>{/* info del propietario */}</View>
        <View style={styles.infoProperty}>{/* info de la alojamiento */}</View>
      </View>
      <View style={styles.infoBooking}>
        <CreateInfoBooking />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 250,
    width: '100%',
  },
  infoOwner: {
    backgroundColor: 'green',
    height: 100,
    width: '100%',
  },
  infoProperty: {
    backgroundColor: 'blue',
    height: 100,
    width: '100%',
  },
  infoBooking: {
    height: 70,
    width: '100%',
    padding: 10,
  },
  content: {
    flex: 1,
  },
});

export default DetailPropertyScreen;
