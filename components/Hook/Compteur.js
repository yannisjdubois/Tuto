import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState } from 'react';

const Compteur = () => {
    const [ nombre, setNombre ] = useState (0)

    // Incrémentation
    const plus =()=>{
      setNombre (nombre+1)
    }

    // Décrémentation
    const moins =()=>{
      setNombre (nombre-1)
    }

        // Réinitialisation
    const zero =()=>{
      setNombre (0)
    }

  return (
    <View>

      <Text> Compteur : {nombre}</Text>

      <Button
        title="Ajouter"
        onPress={(plus)}
      />

      <Button
        title="Soustraire"
        onPress={(moins)}
      />

      <Button
        title="Réinitialiser"
        onPress={(zero)}
      />
    </View>
  )
}

export default Compteur

const styles = StyleSheet.create({})