import { SafeAreaView, StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useState } from 'react';
import AfficheTodo from '../AfficheTodo'

const initTask = [
    {id:1, tache:"Réussir"},
    {id:2, tache:"Faire le meilleur"}
]

const Todo = () => {
    const [ tasks, setTasks]=useState(initTask)
  return (
    <SafeAreaView>
        <FlatList
        data={tasks}
        renderItem={({item})=><Text>{item.tache}</Text>}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  )
}

export default Todo

const styles = StyleSheet.create({})