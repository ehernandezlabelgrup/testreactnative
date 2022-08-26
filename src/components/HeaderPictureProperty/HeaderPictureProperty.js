import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function HeaderPictureProperty() {
  return (
    <View style={styles.container}>
      <Image 
        style={styles.image}
        resizeMode='cover'
      source={{uri: 'https://www.bbva.com/wp-content/uploads/2021/04/casas-ecolo%CC%81gicas_apertura-hogar-sostenibilidad-certificado-.jpg'}} />
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        borderBottomEndRadius: 40,
        borderBottomStartRadius: 40,
        overflow: 'hidden' 
    },
    image: {
        width: '100%' ,
        height: '100%',
    }
})