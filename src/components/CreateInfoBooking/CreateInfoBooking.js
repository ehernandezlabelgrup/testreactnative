import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'

const CreateInfoBooking = ()=>  {
    return     <View style={styles.container}>
    <View style={styles.infoPriceContainer}>
      <Text style={styles.price}>$ 153, 50 / night</Text>
      <Text style={styles.date}>Sep 6 - sep 13</Text>
    </View>
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>Booking now</Text>
      </TouchableOpacity>
    </View>
  </View>
}
const styles = StyleSheet.create({
    price: {
      color: 'black',
      fontSize: 20,
      fontWeight: 'bold',
    },
    date: {
      color: 'gray',
      fontSize: 16,
    },
    container: {
      display: 'flex',
      flexDirection: 'row',
    },
    infoPriceContainer: {
      width: '50%',
    },
    buttonContainer: {
      width: '50%',
    },
    button: {
      backgroundColor: '#FF677F',
      height: '100%',
      width: '100%',
      borderRadius: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 5,
      },
      shadowOpacity: 0.34,
      shadowRadius: 6.27,
      
      elevation: 10,
    },
    textButton: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });

export default CreateInfoBooking