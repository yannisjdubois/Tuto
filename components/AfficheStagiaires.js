import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AfficheStagiaires = ({nom, prenom}) => {
  return (
    <View>
              <Text>Bonjour {nom} {prenom}</Text>
    </View>
  )
}

export default AfficheStagiaires

const styles = StyleSheet.create({})