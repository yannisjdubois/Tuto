import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const JourDeLaSemaine = ({jour}) => {
  return (
    <View>
      <Text>Aujourd'hui c'est {jour}</Text>
    </View>
  )
}

export default JourDeLaSemaine

const styles = StyleSheet.create({})